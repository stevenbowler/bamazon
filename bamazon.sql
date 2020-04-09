DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100),
    price INTEGER(10) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY (item_id)
);


-- add data to products
INSERT INTO products 
(product_name, department_name, price, stock_quantity)
VALUES
("Hamburger", "Whole Foods", 100, 100);

INSERT INTO products 
(product_name, department_name, price, stock_quantity)
VALUES
("TV", "Electronics", 99, 99);

INSERT INTO products 
(product_name, department_name, price, stock_quantity)
VALUES
("Shirt", "Clothing", 98, 98);

INSERT INTO products 
(product_name, department_name, price, stock_quantity)
VALUES
("Hammer", "Hardware", 97, 97);

INSERT INTO products 
(product_name, department_name, price, stock_quantity)
VALUES
("Saw", "Hardware", 96, 96);

INSERT INTO products 
(product_name, department_name, price, stock_quantity)
VALUES
("Shoes", "Clothing", 95, 95);

INSERT INTO products 
(product_name, department_name, price, stock_quantity)
VALUES
("Laptop", "Electronics", 94, 94);

INSERT INTO products 
(product_name, department_name, price, stock_quantity)
VALUES
("Microwave", "Kitchen", 93, 93);

INSERT INTO products 
(product_name, department_name, price, stock_quantity)
VALUES
("Food Processor", "Kitchen", 92, 92);

INSERT INTO products 
(product_name, department_name, price, stock_quantity)
VALUES
("Toilet Paper", "Bathroom", 91, 91);


-- select data
SELECT * FROM products;


-- UPDATE products
-- SET stock_quantity = 77
-- WHERE id=1;



-- DESCRIBE products;