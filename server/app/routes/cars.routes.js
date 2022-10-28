module.exports = app => {
  const cars = require("../controllers/controller.js");

  var router = require("express").Router();

  // Retrieve all Cars
  router.get("/", cars.findAll);

  // Retrieve all Specific Cars
  router.get("/:id", cars.findById);

  // Add a new Cars
  router.post("/:id", cars.addNew);

  app.use("/cars", router);
};
