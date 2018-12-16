DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
   item_id INT NOT NULL AUTO_INCREMENT,
   product_name VARCHAR(45) NOT NULL,
   department_name VARCHAR(45)NOT NULL,
   price DECIMAL(10,2) NOT NULL,
   stock_quantity INT(11) NOT NULL,
   PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony 65 inch Television", "Electronics", 400, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Electronics", 200, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook Pro", "Electronics", 900, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Refridgerator", "Appliances", 800, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dishwasher", "Appliances", 500, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Washer/Dryer", "Appliances", 700, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Camping Tent", "Outdoors", 150, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Camping Stove", "Outdoors", 100, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Backpacking Pack", "Outdoors", 250, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Camping Tent", "Outdoors", 150, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Knife Set", "Home Goods", 75, 12);

SELECT * FROM products;
