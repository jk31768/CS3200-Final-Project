import { response } from "express";
import { useEffect, useState } from "react";

const Home = () => {
    const [user_id,setUserId] = useState(1);
    const [calories,setCalories] = useState(2000);
    const [food_eaten, setFoodEaten] = useState(fetch('http://localhost:8080/api/getUserMeal', {body:JSON.stringify(user_id)})
                                                    .then(response =>{
                                                    setFoodEaten(response.data)
                                                    }));
    const [mealToAdd, setMealToAdd] = useState();
    const [menu_item_id,setMenuItemId]= useState();
    const [date, setDate]= useState('NOW()');
    const [num_servings,setNumServings]= useState();
    const []= useState();

    let handleShowUserMeal = () => {
        fetch('http://localhost:8080/api/getUserMeal', {body:JSON.stringify(user_id)})
        .then(response =>{
           setFoodEaten(response.data)
           //
        })
    }

    let handleAddUserMeal = () => {
        const newMealToAdd = {
            user_id: user_id,
            menu_item_id: menu_item_id,
            date: date,
            num_servings: num_servings,
        }   
        fetch('http://localhost:8080/api/insertUser', {
            method: 'POST',
            body: JSON.stringify(newMealToAdd),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
        .then(json => console.log(json));
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2> <br/>

            <h2>Calories left for today:</h2> <br/>
            <h4>{calories}</h4> <br/>


            <h3>What you have eaten today:</h3> <br/>
            {
                food_eaten.map((val,key) => {
                    return <div className="foodName">{val.name}</div>
                })
            }

            <label> Add Meal <input type="text" onChange={(event)=>{
                        setMealToAdd(event.target.value)}} /> </label>
             <label> Menu Id <input type="number" onChange={(event)=>{
                        setMenuItemId(event.target.value)}} /> </label>
             <label> # of servings <input type="number" onChange={(event)=>{
                        setNumServings(event.target.value)}} /> </label>

            <button onClick= {handleShowUserMeal}>Show Meal</button>
            <button onClick= {handleAddUserMeal}>Add Meal</button>
            <br />

        </div>
     );
}
 
export default Home;