var mysql = require("mysql");
var inquirer = require('inquirer');
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",

    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    queryAllRows();
});

// always call the query where you are connected
function queryAllRows() {
    connection.query("SELECT * FROM products", function (err, data) {
        if (err) throw err;

        console.table(data);
        selectItem(data);
    });
};

function selectItem(inventory) {

    inquirer.prompt([
        {
            type: 'input',
            name: 'choice',
            message: "What is the ID of the item you would like to purchase? [quit with Q]",
            validate: function(answers) {
                return answers > 0 || answers.toLowerCase() === "q";
            }

        }]).then(function (answers) {
            exitCheck(answers.choice);
            var choiceId = parseInt(answers.choice)
            var product = checkInventory(choiceId, inventory)
            if (product) {
                selectQuantity(product)
            } else {
                console.log(" ")
                console.log("That item is not in the inventory.")
                console.log(" ")
                queryAllRows();
            }
        })

}

function selectQuantity(product) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'quantity',
            message: "How many of this item would you like? [quit with Q]",
            validate: function(answers) {
                return answers > 0 || answers.toLowerCase() === "q";
            }

        }]).then(function (answers) {
            exitCheck(answers.quantity);
            var quantity = parseInt(answers.quantity);
            if (quantity > product.stock_quantity) {
                console.log("Insufficient quantity.")
                queryAllRows();
            } else {
                makePurchase(product, quantity);
            }
        })
};

function makePurchase(product, quantity) {
    var query = "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?"
    connection.query(query, [quantity, product.item_id], function (err, data){
        if (err) throw err;
        console.log(`${quantity} ${product.product_name}(s) successfully purchased.`)
        queryAllRows();
    })
};

function checkInventory(choiceId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === choiceId) {
            return inventory[i];
        } 
    } 
    return null 
};

function exitCheck(choice) {
    if (choice.toLowerCase() === "q") {
        console.log("Thank you for shopping.")
        process.exit(0);
    }
};