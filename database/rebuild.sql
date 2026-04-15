CREATE TABLE classification (
  classification_id SERIAL PRIMARY KEY,
  classification_name VARCHAR(50) NOT NULL
);

CREATE TABLE inventory (
  inv_id SERIAL PRIMARY KEY,
  inv_make VARCHAR(50),
  inv_model VARCHAR(50),
  inv_description TEXT,
  inv_image VARCHAR(100),
  inv_thumbnail VARCHAR(100),
  classification_id INT REFERENCES classification(classification_id)
);

CREATE TABLE account (
  account_id SERIAL PRIMARY KEY,
  account_firstname VARCHAR(50),
  account_lastname VARCHAR(50),
  account_email VARCHAR(100),
  account_password VARCHAR(100),
  account_type VARCHAR(20) DEFAULT 'Client'
);

INSERT INTO classification (classification_name)
VALUES ('Sport'), ('SUV'), ('Truck');

INSERT INTO inventory (
  inv_make,
  inv_model,
  inv_description,
  inv_image,
  inv_thumbnail,
  classification_id
)
VALUES
('GM','Hummer','small interiors','/images/hummer.jpg','/images/hummer-tn.jpg',1),
('Ford','Mustang','fast car','/images/mustang.jpg','/images/mustang-tn.jpg',1);

-- Query 4
UPDATE inventory
SET inv_description =
REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM'
AND inv_model = 'Hummer';

-- Query 6
UPDATE inventory
SET inv_image =
REPLACE(inv_image, '/images/', '/images/vehicles/'),
inv_thumbnail =
REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');