module.exports = app => {
    const user = require("../controllers/nutrition.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/insertUser", user.insert);
    router.get("/selectUser/:id", user.select);
    router.post("/insertUserFavMenuItem", user.insertUserFavMenuItem);
    router.get("/getFavoriteMenuItems/:id", user.getFavoriteMenuItems);
    app.use('/api',router);
  };