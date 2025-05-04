CREATE DATABASE IF NOT EXISTS customers_db;
USE customers_db;

CREATE TABLE IF NOT EXISTS customers (
    customerid VARCHAR(10) PRIMARY KEY,
    companyname VARCHAR(255) NOT NULL,
    contactname VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    city VARCHAR(255),
    postalcode VARCHAR(50),
    country VARCHAR(100)
);

INSERT INTO customers (CustomerID, CompanyName, ContactName, Address, City, PostalCode, Country)
VALUES 
('ALFKI', 'Alfreds Futterkiste', 'Maria Anders', 'Obere Str. 57', 'Berlin', '12209', 'Germany'),
('NORTS', 'North/South', 'Simon Crowther', 'South House 300 Queensbridge', 'London', 'SW7 1RZ', 'UK'),
('WOLZA', 'Wolski Zajazd', 'Zbyszek Piestrzeniewicz', 'ul. Filtrowa 68', 'Warszawa', '01-012', 'Poland');

