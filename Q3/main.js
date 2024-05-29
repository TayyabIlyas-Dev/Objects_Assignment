var inventory = [];
var product1 = {
    name: 'Earphones',
    model: 'z13',
    cost: 2000,
    quantity: 20
};
var product2 = {
    name: 'Mobiles',
    model: 'Note50',
    cost: 20000,
    quantity: 20
};
var product3 = {
    name: 'Laptop',
    model: 'M3',
    cost: 100000,
    quantity: 20
};
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);
var product4 = {
    name: 'Chair',
    model: 'qz2',
    cost: 10000,
    quantity: 2
};
inventory.push(product4);
// console.log(`newly added item name is '${inventory[3].name}' `);
// console.log(`newly added item price is '${inventory[3].cost}' `);
// console.log(`newly added item Quantity is '${inventory[3].quantity}' `);
console.log("Full inventory are:", inventory);
