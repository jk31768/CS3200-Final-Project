const express = require('express');
const bodyParser = require('body-parser');
var connection  = require('express-myconnection'); 
var mysql = require('mysql');

const app = express(); 
app.use(bodyParser.json());

app.use(

    connection(mysql,{

        host: 'localhost', //'localhost',
        user: 'userEHX',
        password : 'hMmx56FN4GHpMXOl',
        port : 3306, //port mysql
        database:'sampledb'

    },'pool')); //or single

   app.post('/insert_user',(req,res)=>{

    let {username,height, weight, sex, age, goal_weight, act_lvl} = req.body;
    // todo add checks to ensure nothing is null

    var data={username:username,
              height:height,
              weight:weight,
              sex:sex,
              age:age,
              goal_weight:goal_weight,
              act_lvl:act_lvl
            };


    connection.query("INSERT INTO User (height,weight,sex,age, goal_weight, activity_level) set ? ",data,function(err, rows) {

      if (err){
        //If error
          res.status(400).json('Sorry!!Unable To Add');
          console.log("Error inserting : %s ",err );
         }
     else
      //If success
      res.status(200).json('Book Added Successfully!!')

    });


    });

    app.get('/get_user',(req,res)=>{

        let {username} = req.body;
        // todo add checks to ensure nothing is null
    
        var data={username:username};
    
    
        connection.query("SELECT * FROM User WHERE username = ? ",data,function(err, rows) {
    
          if (err){
            //If error
              res.status(400).json('Sorry!!Unable To Add');
              console.log("Error inserting : %s ",err );
             }
         else
          //If success
          res.status(200).json('Book Added Successfully!!')
    
        });
    
    
        });


     app.listen(3000, ()=> {
  console.log(`app   is runnning on port 3000`);
});
