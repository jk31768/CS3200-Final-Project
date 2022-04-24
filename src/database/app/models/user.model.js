const sql = require("./db.js");

const User = function(user) {
  this.username = user.username;
  this.height = user.height;
  this.wieght = user.wieght;
  this.sex = user.sex;
  this.age = user.age;
  this.goal_weight = user.goal_weight;
  this.activity_level = user.activity_level;
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



module.exports = User;