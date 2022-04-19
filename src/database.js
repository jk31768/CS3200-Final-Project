
const {
    createPool
} = require('mysql');

//SENSITIVE CODE PART DONT LOOK HERE
    const pool =  createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database:'nutrition_tracker'
    })


//Example of how to query
// pool.query('select * from food_group', (err,result, fields)=>{
//     if (err){
//         return console.log(err)
//     }
//     //pool.release();
//     return console.log(result)
    
// })


const pool = require('./database.js');
const fav_list = [];
pool.getConnection((err,conn)=>{
    if(err) throw err;
    const qry = 'select * from food_group';
    conn.query(qry,(err,result) => {
        conn.release();
        if(err) throw err;
        else fav_list = JSON.stringify(result);
    })
});


module.exports = fav_list;

console.log(fav_list)
module.exports = pool;
