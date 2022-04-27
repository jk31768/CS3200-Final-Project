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

  exports.select = (req, res) => {
    User.select(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving user with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  exports.insertUserFavMenuItem = (req, res) => {
    User.insertUserFavMenuItem(req.body.user_id,req.body.menu_item_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `no found user with id ${req.body.user_id}. or menu item`
          });
        } else {
          res.status(500).send({
            message: "Error inserting user's fav menu item " + req.body.user_id
          });
        }
      } else res.send(data);
    });
  };

  exports.removeUserFavMenuItem = (req, res) => {
    User.removeUserFavMenuItem(req.body.user_id,req.body.menu_item_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `no found user with id ${req.body.user_id}. or menu item`
          });
        } else {
          res.status(500).send({
            message: "Error inserting user's fav menu item " + req.body.user_id
          });
        }
      } else res.send(data);
    });
  };

  exports.getFavoriteMenuItems = (req, res) => {
    User.getFavoriteMenuItems(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `cannot find fav menu items ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving user with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

  exports.getMenuItems = (req, res) => {
    User.getMenuItems( (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `cannot find menu items.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving menu items"
          });
        }
      } else res.send(data);
    });
  };

  exports.getIngredientsByID = (req, res) => {
    User.getIngredientsByID( req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `cannot find menu items.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving menu items"
          });
        }
      } else res.send(data);
    });
  };

  
  