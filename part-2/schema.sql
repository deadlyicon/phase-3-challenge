CREATE TABLE items(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  section VARCHAR(100)
);

CREATE TABLE shoppers(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100)
);

CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  shopper_id SERIAL REFERENCES shoppers(id),
  order_date DATE
);

CREATE TABLE order_items(
  order_id SERIAL REFERENCES orders(id),
  item_id SERIAL REFERENCES items(id)
);
