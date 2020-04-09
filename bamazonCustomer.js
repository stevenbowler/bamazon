//@ts-check

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
});


/**
 * Original test routines for testing MySQL queries
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
        getUserInput();
    });
}


/** 
 * Called from main loop, calls itself recursively to retry different inputs
 * @function getCharInput
 */
const getUserInput = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What SKU do you want to purchase? ",
                name: "item_id"
            },
            {
                type: "input",
                message: "How many items do you want to purchase? ",
                name: "quantity"
            }
        ])
        .then(function (inquirerResponse) {
            var sql = `SELECT * FROM products WHERE item_id="${inquirerResponse.item_id}"`;
            // console.log(`sql: ${sql}`);
            con.query(sql, function (err, result) {
                if (err) throw err;
                // console.log(`result[0].product_name: ${result[0].product_name}`);
                if (inquirerResponse.quantity <= result[0].stock_quantity) {
                    console.log(`order placed for ${inquirerResponse.quantity} ${result[0].product_name}${inquirerResponse.quantity > 1 ? "s" : ""}`);
                    var sql = `UPDATE products SET stock_quantity = ${result[0].stock_quantity - inquirerResponse.quantity} WHERE item_id=${inquirerResponse.item_id};`
                    con.query(sql, function (err, result) {
                        if (err) throw err;
                        // console.log(`SKU# updated: ${result.affectedRows ? inquirerResponse.item_id : "none"}`);
                        console.log(`Removed ${result.affectedRows ? inquirerResponse.quantity : "no"} items of SKU# ${result.affectedRows ? inquirerResponse.item_id : "none"} inventory`);
                    });
                } else console.log(`Insufficient quantity of SKU# ${inquirerResponse.item_id} to meet order of ${inquirerResponse.quantity}`);
                console.log(`<ctrl>C to break out of input mode`);
                firstDisplay();
                // getUserInput();
            });
        }
        ).catch(function (err) {
            console.log(err);
        }
        );
}


firstDisplay();
// getUserInput();