CREATE DATABASE MiniProject;
USE MiniProject;

CREATE TABLE CUSTOMER (
  c_id INT PRIMARY KEY AUTO_INCREMENT,
  c_name VARCHAR(40),
  c_address VARCHAR(100),
  c_phone VARCHAR(10),
  c_email VARCHAR(50)
);

CREATE TABLE ORDERS (
    o_id INT PRIMARY KEY,
    o_date DATE,
    o_quantity INT,
    o_amount DECIMAL(10,2),
    c_id INT ,
    FOREIGN KEY(c_id) REFERENCES CUSTOMER(c_id) ON DELETE SET NULL
);

CREATE TABLE PRODUCTS (
    p_id INT PRIMARY KEY,
    p_name VARCHAR(40),
    p_price INT,
    p_stock INT
);

CREATE TABLE VENDOR (
  v_id INT PRIMARY KEY,
  v_name VARCHAR(40),
  v_location VARCHAR(100),
  v_phone VARCHAR(10),
  v_email VARCHAR(50)
);

CREATE TABLE RAW_MATERIALS (
    rm_id INT PRIMARY KEY,
    rm_name VARCHAR(40),
    rm_price INT,
    rm_stock INT,
    v_id INT,
    FOREIGN KEY(v_iD) REFERENCES VENDOR(v_id) ON DELETE SET NULL
); 

CREATE TABLE Departments (
    d_id INT PRIMARY KEY ,
    d_name VARCHAR(100),
    manager_id INT
);

CREATE TABLE Employees (
    e_id INT PRIMARY KEY ,
    name VARCHAR(40),
    d_id INT,
    FOREIGN KEY (d_id) REFERENCES Departments(d_id)
);




INSERT INTO customer (c_name, c_address, c_phone, c_email) VALUES ('Abhishek', 'hyderabad', 9876543210, 'a@gmail.com');
INSERT INTO customer (c_name, c_address, c_phone, c_email) VALUES ('Brajesh', 'delhi', 9877383210, 'b@gmail.com');
INSERT INTO customer (c_name, c_address, c_phone, c_email) VALUES ('Samanth', 'bengaluru', 9810343210, 's@gmail.com');
INSERT INTO customer (c_name, c_address, c_phone, c_email) VALUES ('Prashad', 'chennai', 9876500810, 'p@gmail.com');
INSERT INTO customer (c_name, c_address, c_phone, c_email) VALUES ('Tripathi', 'mumbai', 9876514320, 't@gmail.com');

INSERT INTO orders VALUES (1, '2024-11-01', 5, 500.00, 1);

INSERT INTO products VALUES (1, 'laptop', 1000, 50);
INSERT INTO products VALUES (2, 'tablet', 700, 70);
INSERT INTO products VALUES (3, 'headphone', 250, 80);
INSERT INTO products VALUES (4, 'smartphone', 500, 90);

INSERT INTO vendor  VALUES (1, 'techsales', 'hyderabad', 9812345210, 'ts@gmail.com');
INSERT INTO vendor  VALUES (2, 'ustglobal', 'hyderabad', 9876783640, 'ust@gmail.com');
INSERT INTO vendor  VALUES (3, 'everythingtech', 'bangalore', 9898736210, 'ett@gmail.com');
INSERT INTO vendor  VALUES (4, 'techmaestro', 'delhi', 9876263790, 'tm@gmail.com');
INSERT INTO vendor  VALUES (5, 'globalscreens', 'delhi', 9870000210, 'gs@gmail.com');

INSERT INTO raw_materials  VALUES (1, 'batteries', 50, 200, 1);
INSERT INTO raw_materials  VALUES (2, 'screen', 100, 100, 5);
INSERT INTO raw_materials  VALUES (3, 'camera', 50, 200, 3);
INSERT INTO raw_materials  VALUES (4, 'microchip', 150, 150, 2);
INSERT INTO raw_materials  VALUES (5, 'cooling', 50, 200, 4);

INSERT INTO departments  VALUES (1, 'Sales', 1);
INSERT INTO departments  VALUES (2, 'Purchase', 3);
INSERT INTO departments  VALUES (3, 'Production', 7);
INSERT INTO departments  VALUES (4, 'Accounts', 8);
INSERT INTO departments  VALUES (5, 'HR', 2);

INSERT INTO employees  VALUES (1, 'Abhyuday', 1);
INSERT INTO employees  VALUES (2, 'Ramesh', 5);
INSERT INTO employees  VALUES (3, 'Ajesh', 2);
INSERT INTO employees  VALUES (4, 'Bittu', 1);
INSERT INTO employees  VALUES (5, 'Balwant', 3);
INSERT INTO employees  VALUES (6, 'Dhinchak', 1);
INSERT INTO employees  VALUES (7, 'Aslam', 3);
INSERT INTO employees  VALUES (8, 'Atif', 4);
INSERT INTO employees  VALUES (9, 'Zayn', 1);
INSERT INTO employees  VALUES (10, 'Sujeet', 4);
INSERT INTO employees  VALUES (11, 'Kailash', 2);



-- ---------------------------------------------------------------------------------------------------

create table current_orders(
	o_id int primary key,
    c_id int,
    FOREIGN KEY(c_id) REFERENCES CUSTOMER(c_id) ON DELETE SET NULL,
    p_id int,
    FOREIGN KEY(p_id) REFERENCES PRODUCTS(p_id) ON DELETE SET NULL,
    p_quantity int,
    total_value int
);

insert into current_orders (o_id, c_id, p_id, p_quantity) values (1, 3, 2, 2);
insert into current_orders (o_id, c_id, p_id, p_quantity) values (2, 4, 4, 1);
insert into current_orders (o_id, c_id, p_id, p_quantity) values (3, 1, 3, 1);
insert into current_orders (o_id, c_id, p_id, p_quantity) values (4, 5, 3, 3);
insert into current_orders (o_id, c_id, p_id, p_quantity) values (5, 2, 1, 2);

create table production(
	p_id int,
    rm_id int,
    FOREIGN KEY(rm_id) REFERENCES RAW_MATERIALS(rm_id) ON DELETE SET NULL,
    rm_quantity int
);


insert into production values (1, 1, 1);
insert into production values (1, 2, 1);
insert into production values (1, 3, 1);
insert into production values (1, 4, 5);
insert into production values (1, 5, 3);
insert into production values (2, 1, 1);
insert into production values (2, 2, 1);
insert into production values (2, 3, 2);
insert into production values (2, 4, 1);
insert into production values (3, 1, 1);
insert into production values (3, 4, 1);
insert into production values (4, 1, 1);
insert into production values (4, 2, 1);
insert into production values (4, 3, 2);
insert into production values (4, 4, 2);

DELIMITER $$

CREATE PROCEDURE MultiplyAndInsert()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE a_val INT;
    DECLARE b_val INT;
    DECLARE result INT;

    -- Declare a cursor to retrieve values from Table A and Table B
    DECLARE cur CURSOR FOR 
    SELECT p.p_price, co.p_quantity
    FROM products as p, current_orders as co
    WHERE p.p_id = co.p_id; -- Ensure appropriate join condition

    -- Declare a handler for the end of the cursor
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    -- Open the cursor
    OPEN cur;

    fetch_loop: LOOP
        -- Fetch values into variables
        FETCH cur INTO a_val, b_val;
        
        -- Exit loop if no more rows
        IF done THEN
            LEAVE fetch_loop;
        END IF;

        -- Multiply values
        SET result = a_val * b_val;

        -- Insert result into Table C
        INSERT INTO current_orders (total_value) VALUES (result);
    END LOOP;

    -- Close the cursor
    CLOSE cur;
END$$

DELIMITER ;

