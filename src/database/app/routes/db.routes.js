module.exports = app => {
    const user = require("../controllers/nutrition.controller.js");
    const favorites = require("../models/favorites.model.js");
    const usermeal = require('../models/user_meal.model.js')
    var router = require("express").Router();
    // Create a routes
    router.post("/insertUser", user.insert);
    router.post('/insertFav', favorites.insert);
    router.post('/insertUserMeal',usermeal.insert );
    router.post('/getUserMeal',usermeal.get);
    //router.post();
    app.use('/api',router)
  };