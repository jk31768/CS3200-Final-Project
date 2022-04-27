const { DATETIME2 } = require("mysql/lib/protocol/constants/types");
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


exports.getEatenAllEatenMeals = (req, res) => {
    User.getEatenAllEatenMeals(req.params.id, (err, data) => {
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



  exports.getEatenAllEatenMealsOnDate = (req, res) => {
    User.getEatenAllEatenMealsOnDate(req.params.id, (err, data) => {
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


  exports.getMenuItemsByRestaurant = (req, res) => {
    User.getMenuItemsByRestaurant(req.params.restaurant, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `cannot find any restaurants with given name ${req.body.restaurant}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving restaurant with name " + req.body.restaurant
          });
        }
      } else res.send(data);
    });
  };

  exports.getMenuItemsByItem = (req, res) => {
    User.getMenuItemsByItem(req.params.itemName, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `cannot find any menu item with given name ${req.body.itemName}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving menu item with name " + req.body.itemName
          });
        }
      } else res.send(data);
    });
  }

  
  exports.getRecommendedMenuItems = (req, res) => {
    User.getRecommendedMenuItems(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `cannot find recommended menu items.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving recommended menu items"

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

  exports.insertUserMeal = (req, res) => {
    Date.prototype.yyyymmdd = function() {
      var mm = this.getMonth() + 1; // getMonth() is zero-based
      var dd = this.getDate();
    
      return [this.getFullYear(),
              (mm>9 ? '' : '0') + mm,
              (dd>9 ? '' : '0') + dd
             ].join('-');
    };
    
    var date = new Date();
    date.yyyymmdd();
    
    User.insertUserMeal(req.body.user_id, req.body.menu_item_id, date, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `no found user with id ${req.body.user_id}. or menu item`
          });
        } else {
          res.status(500).send({
            message: "Error inserting user's meal " + req.body.user_id
          });
        }
      } else res.send(data);
    });
  };

  exports.removeUserMeal = (req, res) => {
    User.removeUserMeal(req.body.user_id,req.body.menu_item_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `no found user with id ${req.body.user_id}. or menu item`
          });
        } else {
          res.status(500).send({
            message: "Error removing user's meal " + req.body.user_id
          });
        }
      } else res.send(data);
    });
  };


  exports.getEatenMealsOnDate = (req, res) => {
    User.getEatenMealsOnDate(req.params.id,req.params.date, (err, data) => {
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