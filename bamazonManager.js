//@ts-check

/**
 * @namespace bamazonManager
 * @memberof bamazon
 */

var mysql = require('mysql');
const { table } = require('table');
var inquirer = require('inquirer');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bamazon"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    firstDisplay();
});



/**
 * Original test routines for testing MySQL queries, left in for further testing and validation
 * @function genericMySQL
 */
const genericMySQL = () => {
    var sql = `UPDATE products SET stock_quantity = 74 WHERE item_id=1;`
    // var sql = `INSERT INTO products (product_name, stock_quantity) VALUES ("superFunne", 45);`
    // var sql = `SELECT * FROM products WHERE product_name="Hamburger";`
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        switch (sql.slice(0, 6)) {
            case "SELECT":
                for (var i = 0; i < result.length; ++i) console.log(`result[${i}].product_name: ${result[i].product_name} .stock_quantity: ${result[i].stock_quantity}`);
                break;
            case "INSERT":
                console.log(`result.insertId: ${result.insertId}`);
                break;
            case "UPDATE":
                console.log(`result.affectedRows: ${result.affectedRows}`);
                break;
        }
    });
}



/**
 * Displays initial contents of "bamazon" database "products" table
 * @function firstDisplay
 */
const firstDisplay = () => {
    var data = [];
    var header = ["SKU", "Description", "Price", "On Hand"];
    data.push(header);
    var sql = `SELECT * FROM products;`
    con.query(sql, function (err, result) {
        if (err) throw err;
        for (var i = 0; i < result.length; ++i) {
            var dataItem = [result[i].item_id, result[i].product_name, result[i].price, result[i].stock_quantity];
            data.push(dataItem);
        }
        var output = table(data);
        console.log(output);
        getManagerInput();
    });
}



/**
 * Select and display any item_id/SKU with stock_quantity < 5
 * @function lowInventory
 */
const lowInventory = () => {
    var data = [];
    var header = ["SKU", "Description", "Price", "On Hand"];
    data.push(header);
    var sql = `SELECT * FROM products;`
    con.query(sql, function (err, result) {
        if (err) throw err;
        for (var i = 0; i < result.length; ++i) {
            var dataItem = [result[i].item_id, result[i].product_name, result[i].price, result[i].stock_quantity];
            if (result[i].stock_quantity < 5) data.push(dataItem);
        }
        var output = table(data);
        console.log(output);
        getManagerInput();
        // firstDisplay();
    });
}



/**
 * Update stock_quantity for and item_id/SKU in products table of bamazon database, based on input from Manager
 * @function updateStockQuantity
 */
const updateStockQuantity = () => {
    console.log(`addInventory`);
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter SKU/item_id to be modified: ",
                name: "item_id"
            },
            {
                type: "input",
                message: "Enter updated stock quantity: ",
                name: "stock_quantity"
            }
        ])
        .then(function (inquirerResponse) {
            var sql = `UPDATE products SET stock_quantity = ${inquirerResponse.stock_quantity} WHERE item_id=${inquirerResponse.item_id};`

            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(`Updated stock_quantity for inventory item_id: ${result.affectedRows}`);

            });

            // firstDisplay();
            getManagerInput();
        })
        .catch(function (err) {
            console.log(`err: ${err}`);
        });
}



/**
 * Add a new item_id/SKU to products table of bamazaon database
 * @function addSKU
 */
const addSKU = () => {
    console.log(`addSKU`);
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter product name of item: ",
                name: "product_name"
            },
            {
                type: "input",
                message: "Enter department name of item: ",
                name: "department_name"
            },
            {
                type: "input",
                message: "Enter price of item: ",
                name: "price"
            },
            {
                type: "input",
                message: "Enter starting stock quantity of item: ",
                name: "stock_quantity"
            }

        ])
        .then(function (inquirerResponse) {
            var sql = `INSERT INTO products (product_name, department_name, price, stock_quantity) 
                            VALUES ("${inquirerResponse.product_name}", "${inquirerResponse.department_name}",${inquirerResponse.price},${inquirerResponse.stock_quantity});`
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(`Added to inventory item_id: ${result.insertId}`);
            });
            // firstDisplay();
            getManagerInput();
        })
        .catch(function (err) {
            console.log(`err:  ${err}`);
        });

}


/** 
 * Called from {@link firstDisplay}, calls itself recursively to retry different inputs
 * @function getManagerInput
 */
const getManagerInput = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Which would you like to do choose?",
                choices: ["View Products for Sale", "View Low Inventory", "Update Stock Quantity", "Add SKU", "EXIT"],
                name: "managerChoice"
            }
            // ,
            // {
            //     type: "input",
            //     message: "How many items do you want to purchase? ",
            //     name: "quantity"
            // }
        ])
        .then(function (inquirerResponse) {
            switch (inquirerResponse.managerChoice) {
                case "View Products for Sale": firstDisplay(); break;
                case "View Low Inventory": lowInventory(); break;
                case "Update Stock Quantity": updateStockQuantity(); break;
                case "Add SKU": addSKU(); break;
                case "EXIT": con.end(); return; break;
                default: break;

            }
        }
        )
        .catch(function (err) {
            console.log(err);
        }
        );

}

