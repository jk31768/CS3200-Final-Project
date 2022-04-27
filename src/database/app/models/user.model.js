const sql = require("./db.js");

const User = function(user) {
  this.username = user.username;
  this.height = user.height;
  this.weight = user.weight;
  this.sex = user.sex;
  this.age = user.age;
  this.goal_weight = user.goal_weight;
  this.activity_level_fk = user.activity_level_fk;
}

User.insert = (newUser, result) => {
  sql.query("INSERT INTO USER SET ?", newUser, (err,res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("inserted user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.user_id, ...newUser });
  });
}

User.select = (user_id, result) => {
  sql.query(`SELECT * FROM user WHERE user_id = ${user_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });

 
}

User.insertUserFavMenuItem = (user_id, meal_id, result) => {
  sql.query("INSERT INTO user_fav_menu_item VALUES (?)",[[user_id,meal_id]], (err,res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("inserted user fav meal: ", { id: res.insertId, ...user_id });
    result(null, { id: res.user_id, ...meal_id });
  });

}

User.getFavoriteMenuItems = (user_id, result) => {
  sql.query(`SELECT * FROM user_fav_menu_item join menu_item using(menu_item_id) WHERE user_id = ${user_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found users menu items: ", res[0]);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });

}

User.insertEatenMeal = (user_id, meal_id, result) => {

}

User.getEatenAllEatenMeals = (user_id, date, result) => {
  sql.query(`SELECT Menu_item.name, sum(num_servings * calories_per_menu_item) as calories_per_meal from User_Meal
              JOIN (SELECT menu_item_id, ROUND(SUM(calories_per_serving * num_of_servings), 0) as calories_per_menu_item FROM Menu_Item_Ingredients
              JOIN Ingredient ON Menu_Item_Ingredients.ingredient_id = Ingredient.ingredient_id
              GROUP BY menu_item_id) as t ON t.menu_item_id = User_Meal.menu_item_id
              JOIN Menu_item ON Menu_item.menu_item_id = User_Meal.menu_item_id
              WHERE user_id =  ${user_id}
              AND date =  ${date}
              GROUP BY Menu_item.name;`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found users menu items: ", res[0]);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });
}

User.getEatenMealsOnDate = (user_id, date, result) => {
  sql.query(`SELECT * FROM user_meal join menu_item using(menu_item_id) WHERE user_id = ${user_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found users menu items: ", res[0]);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });
}

User.getRecommendedMeal = (user_id, result) =>{

}

User.searchByMeal = (item, result) =>{

}

User.searchByResaturant =(name, result) => {

}

User.getAllRestaurant = (result) => {

}



// query restaurants
// display meals
// quey meals by calories
// 



module.exports = User;