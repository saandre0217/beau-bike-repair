USE bbrdatabase
CREATE TABLE IF NOT EXISTS customers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    first_name VARCHAR(150),
    last_name VARCHAR(150),
    phone_number VARCHAR(150),
    email_address VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS work_orders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    progress VARCHAR(150),
    tune_up BOOLEAN,
    front_break BOOLEAN,
    rear_break BOOLEAN,
    front_shift BOOLEAN,
    rear_shift BOOLEAN,
    chain BOOLEAN,
    bartape BOOLEAN,
    headset BOOLEAN,
    bottom_bracket BOOLEAN,
    wheel_barring BOOLEAN,
    flat_fix BOOLEAN,
    replace_tire BOOLEAN,
    tubeless BOOLEAN,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE IF NOT EXISTS bikes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(150),
    model VARCHAR(150),
    bike_year VARCHAR(150),
    customer_id INT,
    workorder_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (workorder_id) REFERENCES work_orders(id)
);

CREATE TABLE IF NOT EXISTS photoWorkOrders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    photo_path VARCHAR(250),
    workorder_id INT,
    FOREIGN KEY (workorder_id) REFERENCES work_orders(id)
);