# bamazon
Homework 10


### Overview
This is an execution of the Shopping Cart function using Command Line Interface (CLI) only and an interface to MySQL.  The project has afforded this programmer the opportunity to develop skills using the follwing NPM packages: [Table](https://www.npmjs.com/package/table), [Inquirer](https://www.npmjs.com/package/inquirer), [MySQL](https://www.npmjs.com/package/mysql) and [JSDoc](https://www.npmjs.com/package/jsdoc).


### User Documentation
First, watch this video: _*[bamazonCustomer](https://drive.google.com/file/d/14n_v6nVk4phDeK0Vzy6z3lEmtbhKBdk6/view)*_

#### bamazon Customer module User Documentation
From the console terminal prompt:
1. Enter `node bamazonCustomer`
2. Will display contents of inventory.
3. User will be prompted `What SKU do you want to purchase?`
4. Enter the SKU# press `enter` key
5. User will be prompted `How many items do you want to purchase?` 
6. See clips below for examples.

Enter `node bamazonCustomer` get prompted for input
````
╔═════╤════════════════╤═══════╤═════════╗
║ SKU │ Description    │ Price │ On Hand ║
╟─────┼────────────────┼───────┼─────────╢
║ 1   │ Hamburger      │ 100   │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 2   │ TV             │ 99    │ 99      ║
╟─────┼────────────────┼───────┼─────────╢
║ 3   │ Shirt          │ 98    │ 96      ║
╟─────┼────────────────┼───────┼─────────╢
║ 4   │ Hammer         │ 97    │ 87      ║
╟─────┼────────────────┼───────┼─────────╢
║ 5   │ Saw            │ 96    │ 96      ║
╟─────┼────────────────┼───────┼─────────╢
║ 6   │ Shoes          │ 95    │ 95      ║
╟─────┼────────────────┼───────┼─────────╢
║ 7   │ Laptop         │ 94    │ 84      ║
╟─────┼────────────────┼───────┼─────────╢
║ 8   │ Microwave      │ 93    │ 51      ║
╟─────┼────────────────┼───────┼─────────╢
║ 9   │ Food Processor │ 92    │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 10  │ Toilet Paper   │ 91    │ 24      ║
╚═════╧════════════════╧═══════╧═════════╝

? What SKU do you want to purchase?  2     
? How many items do you want to purchase?  1
order placed for 1 TV
<ctrl>C to break out of input mode
Removed 1 items of SKU# 2 inventory
╔═════╤════════════════╤═══════╤═════════╗
║ SKU │ Description    │ Price │ On Hand ║
╟─────┼────────────────┼───────┼─────────╢
║ 1   │ Hamburger      │ 100   │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 2   │ TV             │ 99    │ 98      ║
╟─────┼────────────────┼───────┼─────────╢
║ 3   │ Shirt          │ 98    │ 96      ║
╟─────┼────────────────┼───────┼─────────╢
║ 4   │ Hammer         │ 97    │ 87      ║
╟─────┼────────────────┼───────┼─────────╢
║ 5   │ Saw            │ 96    │ 96      ║
╟─────┼────────────────┼───────┼─────────╢
║ 6   │ Shoes          │ 95    │ 95      ║
╟─────┼────────────────┼───────┼─────────╢
║ 7   │ Laptop         │ 94    │ 84      ║
╟─────┼────────────────┼───────┼─────────╢
║ 8   │ Microwave      │ 93    │ 51      ║
╟─────┼────────────────┼───────┼─────────╢
║ 9   │ Food Processor │ 92    │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 10  │ Toilet Paper   │ 91    │ 24      ║
╚═════╧════════════════╧═══════╧═════════╝

? What SKU do you want to purchase?  5
? How many items do you want to purchase?  97
Insufficient quantity of SKU# 5 to meet order of 97
<ctrl>C to break out of input mode
╔═════╤════════════════╤═══════╤═════════╗
║ SKU │ Description    │ Price │ On Hand ║
╟─────┼────────────────┼───────┼─────────╢
║ 1   │ Hamburger      │ 100   │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 2   │ TV             │ 99    │ 98      ║
╟─────┼────────────────┼───────┼─────────╢
║ 3   │ Shirt          │ 98    │ 96      ║
╟─────┼────────────────┼───────┼─────────╢
║ 4   │ Hammer         │ 97    │ 87      ║
╟─────┼────────────────┼───────┼─────────╢
║ 5   │ Saw            │ 96    │ 96      ║
╟─────┼────────────────┼───────┼─────────╢
║ 6   │ Shoes          │ 95    │ 95      ║
╟─────┼────────────────┼───────┼─────────╢
║ 7   │ Laptop         │ 94    │ 84      ║
╟─────┼────────────────┼───────┼─────────╢
║ 8   │ Microwave      │ 93    │ 51      ║
╟─────┼────────────────┼───────┼─────────╢
║ 9   │ Food Processor │ 92    │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 10  │ Toilet Paper   │ 91    │ 24      ║
╚═════╧════════════════╧═══════╧═════════╝

? What SKU do you want to purchase?  5
? How many items do you want to purchase?  90
order placed for 90 Saws
<ctrl>C to break out of input mode
Removed 90 items of SKU# 5 inventory
╔═════╤════════════════╤═══════╤═════════╗
║ SKU │ Description    │ Price │ On Hand ║
╟─────┼────────────────┼───────┼─────────╢
║ 1   │ Hamburger      │ 100   │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 2   │ TV             │ 99    │ 98      ║
╟─────┼────────────────┼───────┼─────────╢
║ 3   │ Shirt          │ 98    │ 96      ║
╟─────┼────────────────┼───────┼─────────╢
║ 4   │ Hammer         │ 97    │ 87      ║
╟─────┼────────────────┼───────┼─────────╢
║ 5   │ Saw            │ 96    │ 6       ║
╟─────┼────────────────┼───────┼─────────╢
║ 6   │ Shoes          │ 95    │ 95      ║
╟─────┼────────────────┼───────┼─────────╢
║ 7   │ Laptop         │ 94    │ 84      ║
╟─────┼────────────────┼───────┼─────────╢
║ 8   │ Microwave      │ 93    │ 51      ║
╟─────┼────────────────┼───────┼─────────╢
║ 9   │ Food Processor │ 92    │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 10  │ Toilet Paper   │ 91    │ 24      ║
╚═════╧════════════════╧═══════╧═════════╝
````


### Program Documentation
Main code references for `bamazon` can be accessed [here](https://stevenbowler.github.io/bamazon/docs/index.html).  Global scope variables can be accessed [here](https://stevenbowler.github.io/bamazon/docs/global.html), 