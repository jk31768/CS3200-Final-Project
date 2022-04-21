const Tutorial = require("../models/user.model.js");
// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Tutorial
    const tutorial = new Tutorial({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published || false
    });
    // Save Tutorial in the database
    Tutorial.create(tutorial, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      else res.send(data);
    });
  };
// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  
};
// Find a single Tutorial with a id
exports.findOne = (req, res) => {
  
};
// find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};