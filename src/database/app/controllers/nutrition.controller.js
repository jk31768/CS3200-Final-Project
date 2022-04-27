const User = require("../models/user.model.js");
// Create and Save a new Tutorial
exports.insert = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const user = new User({
      username: req.body.username,
      height: req.body.height,
      weight: req.body.weight,
      sex: req.body.sex,
      age: req.body.age,
      goal_weight: req.body.goal_weight,
      activity_level_fk: req.body.activity_level_fk
    });
    // Save user in the database
    User.insert(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while inserting the user."
        });
      else res.send(data);
    });
  };

  

