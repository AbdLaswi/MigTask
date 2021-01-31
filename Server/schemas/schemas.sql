-- -----------------------------------------------------
-- DATABASE CarRental
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS CarRental;
-- -----------------------------------------------------
-- USE DATABASE
-- -----------------------------------------------------
USE CarRental;
-- -----------------------------------------------------
-- Table Cars
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Cars (
    id INT UNIQUE NOT NULL AUTO_INCREMENT,
    model VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    is_rented VARCHAR(255) NOT NULL DEFAULT "NO",
    PRIMARY KEY (id)
);
-- -----------------------------------------------------
-- Table rented
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Rented (
    id INT NOT NULL AUTO_INCREMENT,
    renter VARCHAR(255) NOT NULL,
    rent_date_start VARCHAR(255) NOT NULL,
    rent_date_end VARCHAR(255) NOT NULL,
    car_id INT UNIQUE NOT NULL,
    PRIMARY KEY (id, car_id),
    UNIQUE INDEX id_UNIQUE (id ASC),
    INDEX fk_rented_Cars1_idx (car_id ASC),
    CONSTRAINT fk_rented_Cars1 FOREIGN KEY (car_id) REFERENCES Cars (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);
-- -----------------------------------------------------
-- Some Static Data
-- -----------------------------------------------------
INSERT INTO CarRental.Cars (id, model, company, color, phone)
VALUES (
        '1',
        'Fusion 2017',
        'Ford',
        'Black ',
        '+962 788174310'
    );
INSERT INTO CarRental.Cars (id, model, company, color, phone)
VALUES (
        '2',
        'Fusion 2017',
        'Ford',
        'Blue',
        '+962 788174310'
    );
INSERT INTO CarRental.Cars (id, model, company, color, phone)
VALUES (
        '3',
        'Fusion 2017',
        'Ford',
        'Red',
        '+962 788174310'
    );
INSERT INTO CarRental.Cars (id, model, company, color, phone)
VALUES (
        '4',
        'Bolt ev 2017',
        'Chevorlot',
        'White',
        '+962 788174310'
    );
INSERT INTO CarRental.Cars (id, model, company, color, phone)
VALUES (
        '5',
        'Volt ev 2019',
        'Chevorlet',
        'Red',
        '+962 788174310'
    );
INSERT INTO CarRental.Cars (id, model, company, color, phone)
VALUES (
        '6',
        'Focus 2016',
        'Ford',
        'White',
        '+962 788174310'
    );
INSERT INTO CarRental.Cars (id, model, company, color, phone)
VALUES (
        '7',
        'Focus 2017',
        'Ford',
        'Blue',
        '+962 788174310'
    );
INSERT INTO CarRental.Cars (id, model, company, color, phone)
VALUES (
        '8',
        'Focus 2020',
        'Ford',
        'Black',
        '+962 788174310'
    );
INSERT INTO CarRental.Cars (id, model, company, color, phone)
VALUES (
        '9',
        'Fusion 2018',
        'Ford',
        'Purple',
        '+962 788174310'
    );
INSERT INTO CarRental.Cars (id, model, company, color, phone)
VALUES (
        '10',
        'Sephia 2018',
        'Kia',
        'Yellow',
        '+962 788174310'
    );
INSERT INTO CarRental.Cars (id, model, company, color, phone)
VALUES (
        '11',
        'Niro 2019',
        'Kia',
        'Gold',
        '+962 788174310'
    );
INSERT INTO CarRental.Cars (id, model, company, color, phone)
VALUES (
        '12',
        'Model x',
        'Tesla',
        'Silver',
        '+962 788174310'
    );
