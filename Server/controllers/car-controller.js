const connection = require("../db");
function addCar(req, res) {
  const car = req.body;
  const data = [null, car.model, car.company, car.color, car.phone];
  const query = `INSERT INTO Cars (id,model, company, color, phone) VALUES (?,?,?,?,?)`;
  connection.query(query, data, (err, result) => {
    if (err) throw err.sqlMessage;
    res.json("Car has been added successfully");
  });
}
module.exports = addCar;
