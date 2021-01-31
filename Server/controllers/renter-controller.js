const connection = require("../db");
function rentCar(req, res) {
  const car = req.body;
  const data = [
    null,
    car.renter,
    car.rent_date_start,
    car.rent_date_end,
    car.car_id,
  ];
  const rentedCar = `UPDATE Cars SET is_rented = "YES" WHERE id=?`;
  const query = `INSERT INTO Rented (id, renter, rent_date_start,rent_date_end, car_id) VALUES (?,?,?,?,?) `;
  connection.query(query, data, (err, result) => {
    if (err) throw err.sqlMessage;
    connection.query(rentedCar, data[4], (err, results) => {
      if (err) throw err.sqlMessage;
    });
    res.json("Car has been rented successfully");
    return;
  });
}
function cancelLease(req, res) {
  const { car_id } = req.params;
  const query = `DELETE FROM Rented WHERE car_id =?`;
  const rentedCar = `UPDATE Cars SET is_rented = "NO" WHERE id=?`;
  connection.query(query, car_id, (err, result) => {
    if (err) throw err.sqlMessage;
    connection.query(rentedCar, car_id, (err, results) => {
      if (err) throw err.sqlMessage;
    });
    res.json("The Lease has been canceled");
    return;
  });
}
function amendingTheLease(req, res) {
  const newRent = req.body;
  const data = [newRent.rent_date_start, newRent.rent_date_end, req.params.id];
  const query = `UPDATE Rented SET rent_date_start =?, rent_date_end=? WHERE car_id =?`;
  connection.query(query, data, (err, results) => {
    if (err) throw err.sqlMessage;
    res.json("The Lease Contract has been amended successfully");
    return;
  });
}
module.exports = { rentCar, cancelLease, amendingTheLease };
