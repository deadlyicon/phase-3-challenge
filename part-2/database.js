var pgp = require('pg-promise')();
var connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${'grocery_store'}`;
var db = pgp(connectionString);

function allItems() {
  return db.any('SELECT * FROM items');
}

function itemsInSection(section) {
  return db.many('SELECT id, name FROM items WHERE section = $1', [section]);
}

function cheapItems() {
  return db.any('SELECT id, name, price FROM items WHERE price < 10 ORDER BY price ASC');
}
function countItemsInSection(section) {
  return db.any('SELECT COUNT(id) FROM items WHERE section = $1', [section]);
}
function mostRecentOrders() {
  return db.any('SELECT id, order_date FROM orders ORDER BY order_date DESC LIMIT 10');
}
function lastShopperName() {
  return db.any('SELECT first_name, last_name FROM shoppers JOIN orders ON orders.shopper_id=shoppers.id ORDER BY order_date DESC LIMIT 1');
}

function orderTotal(id) {
  return db.any('SELECT SUM(price) FROM orders JOIN order_items ON order_id = orders.id JOIN items ON items.id = item_id WHERE orders.id = $1', [id]);
}

module.exports = {
  allItems,
  itemsInSection,
  cheapItems,
  countItemsInSection,
  mostRecentOrders,
  lastShopperName,
  orderTotal
};
