const sql = require("./db.js");

const UserMeal = function(userMeal) {
    this.user_id = userMeal.user_id
    this.menu_item_id = userMeal.menu_item_id
    this.date = userMeal.date
    this.num_servings = userMeal.num_servings 
}

UserMeal.insert = (newUserMeal, result) => {
  sql.query("INSERT INTO user_meal SET ?", newUserMeal, (err,res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("inserted user: ", { id: res.insertId, ...newUserMeal });
    result(null, { id: res.user_id, ...newUserMeal });
  });
}

UserMeal.get = (user_id, result) => {
    sql.query("select name from user_meal join menu_id using(menu_id) where user_id = ?", user_id,(err,res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      else {
          result(res);
      }
      console.log("inserted user: ", { id: res.insertId, ...newUserMeal });
      result(null, { id: res.user_id, ...newUserMeal });
    });
}



module.exports = UserMeal;