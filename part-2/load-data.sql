COPY items(name, price, section)
FROM '/Users/zezemanolo/Desktop/learnersguild/phase-challenges/phase3/phase-3-challenge/part-2/data/grocery.csv' DELIMITER ',' CSV HEADER;

COPY shoppers(first_name, last_name)
FROM '/Users/zezemanolo/Desktop/learnersguild/phase-challenges/phase3/phase-3-challenge/part-2/data/shoppers.csv' DELIMITER ',' CSV HEADER;

COPY orders(shopper_id, order_date) FROM '/Users/zezemanolo/Desktop/learnersguild/phase-challenges/phase3/phase-3-challenge/part-2/data/orders.csv' DELIMITER ',' CSV HEADER;

COPY order_items(order_id, item_id) FROM '/Users/zezemanolo/Desktop/learnersguild/phase-challenges/phase3/phase-3-challenge/part-2/data/order_items.csv' DELIMITER ',' CSV HEADER;
