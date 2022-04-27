module.exports = app => {
    const user = require("../controllers/nutrition.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/insertUser", user.insert);
    router.get("/selectUser/:id", user.select);
    router.post("/insertUserFavMenuItem", user.insertUserFavMenuItem);
    router.post("/removeUserFavMenuItem", user.removeUserFavMenuItem);
    router.get("/getFavoriteMenuItems/:id", user.getFavoriteMenuItems);
    router.get("/getMenuItems", user.getMenuItems);
    router.get("/getRecommendedMenuItems/:id", user.getRecommendedMenuItems);
    router.get("/getMenuItemsByRestaurant", user.getMenuItemsByRestaurant);
    router.get("/getIngredientsByID/:id", user.getIngredientsByID);
    app.use('/api',router);
  };
  