const db = require("../models");
const Cars = db.cars;

// Create and Save a new Cars
exports.addNew = (req, res) => {
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

  // Save Cars in the database
  cars
    .save(cars)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Cars."
      });
    });
};

// Retrieve all Carss from the database.
exports.findAll = (req, res) => {
  Cars.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving carss."
      });
    });
};

// Find a single Cars with an id
exports.findById = (req, res) => {
  const id = req.params.id;

  Cars.find({id})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Cars with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Cars with id=" + id });
    });
};