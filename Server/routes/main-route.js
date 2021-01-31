const express = require("express");
const { getCars, getCar, getOrder } = require("../controllers/main-controller");
const addCar = require("../controllers/car-controller");
const {
  rentCar,
  cancelLease,
  amendingTheLease,
} = require("../controllers/renter-controller");
const mainRouter = express.Router();

mainRouter.get("/cars", getCars);
mainRouter.get("/cars/:id", getCar);
mainRouter.get("/mylist", getOrder);
mainRouter.post("/car", addCar);
mainRouter.post("/rented", rentCar);
mainRouter.delete("/rented/car/:car_id", cancelLease);
mainRouter.put("/rerent/:id", amendingTheLease);

module.exports = mainRouter;
