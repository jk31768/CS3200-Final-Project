module.exports = app => {
    const user = require("../controllers/nutrition.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", user.insert);
    
  };