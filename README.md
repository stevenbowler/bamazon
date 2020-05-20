# bamazon



### Overview
This is an execution of the Shopping Cart function using Command Line Interface (CLI) only and an interface to MySQL.  The project has afforded this programmer the opportunity to develop skills using the follwing NPM packages: [Table](https://www.npmjs.com/package/table), [Inquirer](https://www.npmjs.com/package/inquirer), [MySQL](https://www.npmjs.com/package/mysql) and [JSDoc](https://www.npmjs.com/package/jsdoc).


### User Documentation
First, to interact with the bamazon database as a customer, watch this video: _*[bamazonCustomer](https://drive.google.com/file/d/14n_v6nVk4phDeK0Vzy6z3lEmtbhKBdk6/view)*_ or read the section below titled `bamazonCustomer module User Documentation`.

Next, to interact with the bamazon database as a manager, watch this video: _*[bamazonManager](https://drive.google.com/file/d/1REl8AMISx-nLwIWfQWmK-4_ixC6zLrh4/view)*_ or read the section below titled `bamazonManager module User Documentation`.

Finally, to interact with the bamazaon database as a supervisor, watch this video: _*[bamazonSupervisor](https://drive.google.com/file/d/1EjiZzdNnaVC5bYFpNKrEU1NKVVDiKiBD/view)*_ or read the section below titled `bamazonSupervisor module User Documentation`.


#### bamazonCustomer module User Documentation
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
║ 9   │ Food Processor │ 92    │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 10  │ Toilet Paper   │ 91    │ 24      ║
╚═════╧════════════════╧═══════╧═════════╝

? What SKU do you want to purchase?  2     
? How many items do you want to purchase?  1
order placed for 1 TV at a total cost of $99
<ctrl>C to break out of input mode
Removed 1 items of SKU# 2 inventory
╔═════╤════════════════╤═══════╤═════════╗
║ SKU │ Description    │ Price │ On Hand ║
╟─────┼────────────────┼───────┼─────────╢
║ 1   │ Hamburger      │ 100   │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 2   │ TV             │ 99    │ 98      ║
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
║ 9   │ Food Processor │ 92    │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 10  │ Toilet Paper   │ 91    │ 24      ║
╚═════╧════════════════╧═══════╧═════════╝
````

#### bamazonManager module User Documentation
From the console terminal prompt:
1. Enter `node bamazonManager`
2. Will display contents of inventory.
3. Select one of 5 option shown: `View Products for Sale, View Low Inventory, Update Stock Quantity, Add SKU, EXIT`
4. Follow the prompts and provide input as requested.
6. See clips below for examples.


Enter `node bamazonManager`
````
? Which would you like to do choose? 
> View Products for Sale 
  View Low Inventory 
  Update Stock Quantity 
  Add SKU 
  EXIT 
````

Follow the prompts
````

? Which would you like to do choose? View Products for Sale
╔═════╤════════════════╤═══════╤═════════╗
║ SKU │ Description    │ Price │ On Hand ║
╟─────┼────────────────┼───────┼─────────╢
║ 1   │ Hamburger      │ 100   │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 2   │ TV             │ 99    │ 98      ║
╟─────┼────────────────┼───────┼─────────╢
║ 10  │ Toilet Paper   │ 91    │ 22      ║
╟─────┼────────────────┼───────┼─────────╢
║ 13  │ tester3        │ 234   │ 6       ║
╟─────┼────────────────┼───────┼─────────╢
║ 14  │ tester4        │ 23    │ 4       ║
╚═════╧════════════════╧═══════╧═════════╝

? Which would you like to do choose? View Low Inventory
╔═════╤═════════════╤═══════╤═════════╗
║ SKU │ Description │ Price │ On Hand ║
╟─────┼─────────────┼───────┼─────────╢
║ 14  │ tester4     │ 23    │ 4       ║
╚═════╧═════════════╧═══════╧═════════╝

? Which would you like to do choose? Update Stock Quantity
addInventory
? Enter SKU/item_id to be modified:  14
? Enter updated stock quantity:  6
Updated stock_quantity for inventory item_id: 1
╔═════╤════════════════╤═══════╤═════════╗
║ SKU │ Description    │ Price │ On Hand ║
╟─────┼────────────────┼───────┼─────────╢
║ 1   │ Hamburger      │ 100   │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 2   │ TV             │ 99    │ 98      ║
╟─────┼────────────────┼───────┼─────────╢
║ 10  │ Toilet Paper   │ 91    │ 22      ║
╟─────┼────────────────┼───────┼─────────╢
║ 13  │ tester3        │ 234   │ 6       ║
╟─────┼────────────────┼───────┼─────────╢
║ 14  │ tester4        │ 23    │ 6       ║
╚═════╧════════════════╧═══════╧═════════╝

? Which would you like to do choose? View Low Inventory
╔═════╤═════════════╤═══════╤═════════╗
║ SKU │ Description │ Price │ On Hand ║
╚═════╧═════════════╧═══════╧═════════╝

? Which would you like to do choose? Add SKU
addSKU
? Enter product name of item:  tester5
? Enter department name of item:  tester5
? Enter price of item:  34
? Enter starting stock quantity of item:  4
Added to inventory item_id: 15
╔═════╤════════════════╤═══════╤═════════╗
║ SKU │ Description    │ Price │ On Hand ║
╟─────┼────────────────┼───────┼─────────╢
║ 1   │ Hamburger      │ 100   │ 74      ║
╟─────┼────────────────┼───────┼─────────╢
║ 2   │ TV             │ 99    │ 98      ║
╟─────┼────────────────┼───────┼─────────╢
║ 10  │ Toilet Paper   │ 91    │ 22      ║
╟─────┼────────────────┼───────┼─────────╢
║ 13  │ tester3        │ 234   │ 6       ║
╟─────┼────────────────┼───────┼─────────╢
║ 14  │ tester4        │ 23    │ 6       ║
╟─────┼────────────────┼───────┼─────────╢
║ 15  │ tester5        │ 34    │ 4       ║
╚═════╧════════════════╧═══════╧═════════╝

? Which would you like to do choose? View Low Inventory
╔═════╤═════════════╤═══════╤═════════╗
║ SKU │ Description │ Price │ On Hand ║
╟─────┼─────────────┼───────┼─────────╢
║ 15  │ tester5     │ 34    │ 4       ║
╚═════╧═════════════╧═══════╧═════════╝

? Which would you like to do choose? EXIT

sb@DESKTOP-P48C40B MINGW64 ~/OneDrive/Documents/BowlerConsulting/UTbootcamp/homework/bamazon (master)
$ 

````

#### bamazonSupervisor module User Documentation
From the console terminal prompt:
1. Enter `node bamazonSupervisor`
2. Will display contents of inventory.
3. Select one of 4 option shown: `View Products for Sale, View Product Sales By Department, Add Department, EXIT`
4. Follow the prompts and provide input as requested.
6. See clips below for examples.


Enter `node bamazonSupervisor`
````
? Which would you like to do choose? (Use arrow keys)
> View Products for Sale
  View Product Sales by Department
  Add Department
  EXIT
````

Follow the prompts

````
$ node bamazonSupervisor
Connected!

? Which would you like to do choose? View Products for Sale
╔═════╤════════════════╤═══════╤═════════╗
║ SKU │ Description    │ Price │ On Hand ║
╟─────┼────────────────┼───────┼─────────╢
║ 1   │ Hamburger      │ 100   │ 77      ║
╟─────┼────────────────┼───────┼─────────╢
║ 2   │ TV             │ 99    │ 99      ║
╟─────┼────────────────┼───────┼─────────╢
║ 9   │ Food Processor │ 92    │ 97      ║
╟─────┼────────────────┼───────┼─────────╢
║ 10  │ Toilet Paper   │ 91    │ 90      ║
╟─────┼────────────────┼───────┼─────────╢
║ 11  │ tester         │ 45    │ 300     ║
╚═════╧════════════════╧═══════╧═════════╝

? Which would you like to do choose? View Product Sales by Department
╔═══════════════╤═════════════════╤═══════╤══════════╤════════╗
║ Department ID │ Department Name │ Sales │ Overhead │ Profit ║
╟───────────────┼─────────────────┼───────┼──────────┼────────╢
║ 1             │ Bathroom        │ 10000 │ 1000     │ 9000   ║
╟───────────────┼─────────────────┼───────┼──────────┼────────╢
║ 2             │ Electronics     │ 20000 │ 2000     │ 18000  ║
╟───────────────┼─────────────────┼───────┼──────────┼────────╢
║ 9             │ tester2         │ 0     │ 3434     │ -3434  ║
╚═══════════════╧═════════════════╧═══════╧══════════╧════════╝

? Which would you like to do choose? Add Department
addSKU
? Enter name of Department:  tester3
? Enter department overhead:  2323
Added to department database, department_id: 10
? Which would you like to do choose? View Product Sales by Department
╔═══════════════╤═════════════════╤═══════╤══════════╤════════╗
║ Department ID │ Department Name │ Sales │ Overhead │ Profit ║
╟───────────────┼─────────────────┼───────┼──────────┼────────╢
║ 1             │ Bathroom        │ 10000 │ 1000     │ 9000   ║
╟───────────────┼─────────────────┼───────┼──────────┼────────╢
║ 2             │ Electronics     │ 20000 │ 2000     │ 18000  ║
╟───────────────┼─────────────────┼───────┼──────────┼────────╢
║ 9             │ tester2         │ 0     │ 3434     │ -3434  ║
╟───────────────┼─────────────────┼───────┼──────────┼────────╢
║ 10            │ tester3         │ 0     │ 2323     │ -2323  ║
╚═══════════════╧═════════════════╧═══════╧══════════╧════════╝

? Which would you like to do choose? EXIT

sb@DESKTOP-P48C40B MINGW64 ~/OneDrive/Documents/BowlerConsulting/UTbootcamp/homework/bamazon (master)
$ 
````


### Program Documentation
Main code references for `bamazon` can be accessed [here](https://stevenbowler.github.io/bamazon/docs/index.html).  Global scope variables can be accessed [here](https://stevenbowler.github.io/bamazon/docs/global.html), 