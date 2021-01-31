const connection = require("../db");
function getCars(req, res) {
  const query = `SELECT * FROM Cars WHERE is_rented=?`;
  connection.query(query, "NO", (err, result) => {
    if (err) throw err.sqlMessage;
    res.json(result);
    return;
  });
}
function getCar(req, res) {
  const { id } = req.params;
  const query = `SELECT * FROM Cars WHERE id =?`;
  connection.query(query, id, (err, result) => {
    if (err) throw err.sqlMessage;
    res.json(result);
    return;
  });
}
function getOrder(req, res) {
  const query = `SELECT Cars.id, Cars.model, Cars.company, Cars.color, Cars.phone, Rented.rent_date_start,Rented.rent_date_end FROM Cars JOIN Rented On Cars.id = Rented.car_id WHERE is_rented=?`;
  connection.query(query, "YES", (err, result) => {
    if (err) throw err.sqlMessage;
    res.json(result);
    return;
  });
}
module.exports = { getCars, getCar, getOrder };
