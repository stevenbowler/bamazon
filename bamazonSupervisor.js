//@ts-check

/**
 * @namespace bamazonSupervisor
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
    // emitter.setMaxListeners(30);
    firstDisplay();
});



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
        getSupervisorInput();
    });
}



/**
 * Displays initial contents of "bamazon" database "products" table
 * @function firstDisplay
 */
const displaySalesByDepartment = () => {
    var data = [];
    var header = ["Department ID", "Department Name", "Sales", "Overhead", "Profit"];
    data.push(header);

    // get sales totals for each department
    var salesTotals;
    var sqlSalesTotals = `SELECT department_name, SUM(product_sales) FROM products GROUP BY department_name;`;
    con.query(sqlSalesTotals, function (err, resultProducts, fields) {
        if (err) throw err;
        salesTotals = resultProducts;
        // console.log(`saleThisDept: ${salesTotals[0].department_name}`);
        // console.log(`saleThisDept: ${salesTotals[1]["SUM(product_sales)"]}`);

        var sql = `SELECT * FROM departments;`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; ++i) {
                var salesThisDept = 0;
                for (var j = 0; j < salesTotals.length; j++) if (salesTotals[j].department_name === result[i].department_name) salesThisDept = salesTotals[j]["SUM(product_sales)"];
                // console.log(`department_name: ${result[i].deparment_name} salesThisDept: ${salesThisDept}`);
                var dataItem = [result[i].department_id, result[i].department_name, salesThisDept, result[i].over_head_costs, salesThisDept - result[i].over_head_costs];
                data.push(dataItem);
            }
            var output = table(data);
            console.log(output);
            getSupervisorInput();
            // firstDisplay();
        });
    });
}



/**
 * Add a new department  to departments table of bamazaon database
 * @function addDepartment
 */
const addDepartment = () => {
    console.log(`addSKU`);
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter name of Department: ",
                name: "department_name"
            },
            {
                type: "input",
                message: "Enter department overhead: ",
                name: "over_head_costs"
            }

        ])
        .then(function (inquirerResponse) {
            var sql = `INSERT INTO departments (department_name, over_head_costs) 
                            VALUES ("${inquirerResponse.department_name}", ${inquirerResponse.over_head_costs});`

            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(`Added to department database, department_id: ${result.insertId}`);
                getSupervisorInput();
            });
            // displaySalesByDepartment();
        })


        .catch(function (err) {
            console.log(`err:  ${err}`);
        });

}



/** 
 * Called from main loop, calls itself recursively to retry different inputs
 * @function getSupervisorInput
 */
const getSupervisorInput = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Which would you like to do choose?",
                choices: ["View Products for Sale", "View Product Sales by Department", "Add Department", "EXIT"],
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
                case "View Product Sales by Department": displaySalesByDepartment(); break;
                case "Add Department": addDepartment(); break;
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

