DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100),
    price INTEGER(10) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    product_sales INTEGER(10),
    PRIMARY KEY (item_id)
);

-- add data to products
INSERT INTO products 
(product_name, department_name, price, stock_quantity, product_sales)
VALUES
("Hamburger", "Whole Foods", 100, 100, 10000),
("TV", "Electronics", 99, 99, 10000),
("Shirt", "Clothing", 98, 98, 10000),
("Hammer", "Hardware", 97, 97, 10000),
("Saw", "Hardware", 96, 96, 10000),
("Shoes", "Clothing", 95, 95, 10000),
("Laptop", "Electronics", 94, 94, 10000),
("Microwave", "Kitchen", 93, 93, 10000),
("Food Processor", "Kitchen", 92, 92, 10000),
("Toilet Paper", "Bathroom", 91, 91, 10000);


-- select data
SELECT * FROM products;



CREATE TABLE departments (
	department_id INTEGER NOT NULL AUTO_INCREMENT,
	department_name VARCHAR(100),
    over_head_costs INTEGER(10),
    PRIMARY KEY (department_id)
);

INSERT INTO departments 
(department_name, over_head_costs)
VALUES
("Bathroom", 1000),("Electronics", 2000),("Kitchen", 3000),("Hardware", 4000),("Clothing", 5000);



-- select data
SELECT * FROM departments;


-- UPDATE products
-- SET stock_quantity=77, product_sales=100
-- WHERE item_id=1;

SELECT department_name, SUM(product_sales) FROM products GROUP BY department_name;
-- SELECT name, SUM(units) FROM sales GROUP BY name;

-- DESCRIBE products;