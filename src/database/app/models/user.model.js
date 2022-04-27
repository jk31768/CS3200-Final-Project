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
  sql.query(`SELECT 
  username,
  height,
  weight,
  sex,
  age,
  goal_weight,
  
  IF(sex = 1,
      (66 + (6.3 * goal_weight) + (12.9 * height) - (6.8 * age)),
      (655 + (4.3 * goal_weight) + (4.7 * height) - (4.7 * age))) as rec_calories
  FROM
  user 
  WHERE 
  user_id = ${user_id}`, 
  (err, res) => {
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

  sql.query("INSERT INTO user_fav_menu_item VALUES (?)",[[meal_id,user_id]], (err,res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("inserted user fav meal: ", { id: res.insertId, ...user_id });
    result(null, { id: res.user_id, ...meal_id });
  });

}
User.removeUserFavMenuItem = (user_id, meal_id, result) => {

  sql.query('DELETE FROM user_fav_menu_item WHERE user_id = ? and menu_item_id = ?', [user_id,meal_id], (err,res) => {
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
      console.log("found users menu items: ", res);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });

}

User.insertEatenMeal = (user_id, meal_id, result) => {

}

User.getEatenAllEatenMeals = (user_id, result) => {

}

User.getEatenMealsOnDate = (user_id, date, result) => {
  
}

User.getRecommendedMeal = (user_id, result) =>{

}

User.searchByMeal = (item, result) =>{

}

User.searchByResaturant =(name, result) => {

}

User.getAllRestaurant = (result) => {

}

User.getMenuItems = (result) =>{

  sql.query(`

  SELECT 
    Menu_item.name, SUM(calories_per_menu_item) AS calories, Menu_item.menu_item_id
FROM
    menu_item
        JOIN
    (SELECT 
        menu_item_id,
            ROUND(SUM(calories_per_serving * num_of_servings), 0) AS calories_per_menu_item
    FROM
        Menu_Item_Ingredients
    JOIN Ingredient ON Menu_Item_Ingredients.ingredient_id = Ingredient.ingredient_id
    GROUP BY menu_item_id) AS t ON t.menu_item_id = menu_item.menu_item_id
GROUP BY Menu_item.name, Menu_item.menu_item_id;
  
  `, 
  (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      // console.log("got menu items: ", res);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });

}

User.getMenuItemsByRestaurant = (restaurant, result) =>{

  sql.query(`

  SELECT 
    Menu_item.name, SUM(calories_per_menu_item) AS calories, Menu_item.menu_item_id
FROM
    menu_item
        JOIN
    (SELECT 
        menu_item_id,
            ROUND(SUM(calories_per_serving * num_of_servings), 0) AS calories_per_menu_item
    FROM
        Menu_Item_Ingredients
    JOIN Ingredient ON Menu_Item_Ingredients.ingredient_id = Ingredient.ingredient_id
    GROUP BY menu_item_id) AS t ON t.menu_item_id = menu_item.menu_item_id
    JOIN Restaurant ON  Menu_item.restaurant_id = restaurant.restaurant_id
    WHERE restaurant.name like ?
GROUP BY Menu_item.name, Menu_item.menu_item_id;
  
  `, [restaurant + '%'],
  (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      // console.log("got menu items: ", res);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  });

}

User.getIngredientsByID = (menu_item_id, result) =>{
  sql.query(`
  SELECT 
    i.name, num_of_servings, serving_size, calories_per_serving
  FROM
    menu_item_ingredients
        JOIN
    ingredient AS i USING (ingredient_id)
  WHERE
    menu_item_id = 1
  
  `, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found item ingredients: ", res);
      result(null, res);
      return;
    }
    result({ kind: "not_found" }, null);
  }); 

}


// query restaurants
// display meals
// quey meals by calories
// 



module.exports = User;