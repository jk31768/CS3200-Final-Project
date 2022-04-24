const express = require('express');
const app = express();
const mysql = require("mysql");
const dbConfig = require('../config/db.config');
//const pool =  require('../config/db.config.js');
const cors = require("cors");

app.use(cors())
app.use(express.json)


const pool = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });

pool.connect(error => {
if (error) throw error;
console.log("Successfully connected to the database.");
});

// app.get('/fav', async (req, res) => {
//     pool.getConnection( (err, conn) => {
//         if (err) throw err;

//         try {
//             const qry = 'SELECT * FROM user_fav_menu_item;';
//             conn.query(qry, (err, result) => {
//                 conn.release();
//                 if (err) throw err;
//                 res.send(JSON.stringify(result));
//                 console.log(res);
//             });
//         } catch (err) {
//             console.log(err);
//             res.redirect("/favorites")
//             res.end();
//         }
//         res.redirect("/favorites")
//     });
// });

app.post('/addUser', (req, res) => {
    console.log("adding user");
    const username = req.body.username;
    const height = req.body.height;
    const weight = req.body.weight;
    const age = req.body.age;
    const gender = req.body.gender;
    const activityLevel = req.body.activityLevel;
    const goal_weight = -1;


    const qry = 'INSERT INTO user (username,height,weight,sex,age,goal_weight,activity_level_id) VALUES(?,?,?,?,?,?,?)';
    pool.query(qry, [username,height,weight,gender,age,goal_weight,activityLevel], (err, result) => {
        if (err) throw err;
        else{
            res.send("Values Inserted");
        }
        console.log('New favorite food added!');
    });

        //res.redirect('/favorites');
        //res.end();
});


app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });


//module.exports = app;