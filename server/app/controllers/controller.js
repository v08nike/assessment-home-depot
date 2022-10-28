const db = require("../models");
const Cars = db.cars;

// Create and Save a new Cars
exports.addNew = (req, res) => {
  console.log("------------ Add New Car -------------");
  // Create a Cars
  const cars = new Cars({
    make: req.body.make,
    model: req.body.model,
    package: req.body.package,
    color: req.body.color,
    year: req.body.year,
    category: req.body.category,
    mileage: req.body.mileage,
    price: req.body.price,
    id : req.params.id
  });

  console.log("Info: Accept car info");
  console.log({cars})
  // Save Cars in the database
  cars
    .save(cars)
    .then(data => {
      res.send(data);
      console.log("Info: Saved successfully!");
      console.log(data);
      console.log("--------------------------------------------");
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Cars."
      });
      console.log("Error: Some error occurred while creating the Cars.");
      console.log("--------------------------------------------");
    });
  };

// Retrieve all Carss from the database.
exports.findAll = (req, res) => {
  console.log("------------ Get All Data -------------");
  Cars.find()
    .then(data => {
      res.send(data);
      console.log(data);
      console.log("Info: Returned Data");
      console.log("-------------------------------------------");
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving carss."
      });
      console.log("Error: Some error occurred while retrieving carss.");
      console.log("-------------------------------------------");
    });
  };

// Find a single Cars with an id
exports.findById = (req, res) => {
  const id = req.params.id;
  console.log("------------ Find By Id -------------");

  console.log("id: " + id);
  Cars.find({id: id})
    .then(data => {
      if (!data){
        res.status(404).send({ message: "Not found Cars with id " + id });
        console.log("message: Not found Cars with id " + id);
      }
      else {
        res.send(data[0]);
        console.log(data[0]);
        console.log("Info: Returend Data");
        console.log("------------------------------------");
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Cars with id=" + id });
        console.log("Error: Error retrieving Cars with id=" + id);
        console.log("------------------------------------");
      });
};