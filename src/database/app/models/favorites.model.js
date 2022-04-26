const sql = require("./db.js");

const Favorites = function(favorites) {
  this.menu_item_id = favorites.menu_item_id;
  this.user_id = favorites.user_id;
}

Favorites.insert = (newFav, result) => {
  sql.query("INSERT INTO user_fav_menu_item SET ?", newFav, (err,res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("inserted user: ", { id: res.insertId, ...newFav });
    result(null, { id: res.user_id, ...newFav });
  });
}



module.exports = Favorites;