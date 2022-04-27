import { useEffect, useState } from "react";
import './Home.css'


const Home = () => {
    const [user_id,setUserId] = useState(1);
    const [calories,setCalories] = useState(2000);
    const [food_eaten, setFoodEaten] = useState([]);
    const [mealToAdd, setMealToAdd] = useState();
    const [menu_item_id,setMenuItemId]= useState();
    const [num_servings,setNumServings]= useState();
    const []= useState();
    var today = new Date();
    var month = (today.getMonth()+1);
    if (month<10){month = '0'+month}else{month = ''+month}
    var today_date = today.getFullYear()+'-'+month+'-'+today.getDate();
    const [date, setDate]= useState(today_date);


    // useEffect(() => {
    //     fetch('http://localhost:8080/api/getEatenMealsOnDate/'+user_id+'/'+date)
    //     .then(res => res.json())
    //     .then((result) => {
    //     setFoodEaten(result)
    //     })
    //   }, [])

    let handleShowUserMealOnDate = () => {
        fetch('http://localhost:8080/api/getEatenMealsOnDate/'+user_id+'/'+date)
        .then(res => res.json())
        .then((result) => {
        if (Array.isArray(result)){
            let sum =0;
            //calculate the calories eaten
            for(let i=0; i<result.length;i++){
                sum+=result[i].calories_per_meal
            }

            if (sum<2000 && sum>=0)
                setCalories(calories-sum);
            else
                setCalories(0);

            setFoodEaten(result);
        }
        else{
            setFoodEaten([{name:"You havent eaten anything on "+date+"!", calories_per_meal:"0 "}])
        }
        })
    }

    let handleAddUserMeal = () => {
        const newMealToAdd = {
            user_id: user_id,
            menu_item_id: menu_item_id,
            date: date,
            num_servings: num_servings,
        }   
        fetch('http://localhost:8080/api/insertUserFavMenuItem', {
            method: 'POST',
            body: JSON.stringify(newMealToAdd),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
        .then(json => console.log(json));
    }



    return ( 
        <div className="home">
            <h2>Homepage</h2> <br/>

            <h2>Calories left to eat:</h2> <br/>
            <h3 className="calories">{calories}</h3> <br/>


            <h2>What you have eaten on {date}:</h2> <br/>

            
            <div align = 'left'>
            <input type="date" id="start" name="trip-start" value={date} min="0000-01-01" max="2025-12-31"
            onChange=  {(event) => {setDate(event.target.value)}}/>

            </div>
            <div align='center'>
                <button onClick= {handleShowUserMealOnDate}>Show Meals Eaten</button>
            </div>
            <br />
            <br />
            <br />
            <div align='center'>             
            {
                food_eaten?.map((item, i) => 
                    <li key={i}>
                        {item.name+'  '} {'   '+item.calories_per_meal+ ' calories'} 
                    </li>) 

            }</div>

        </div>
     );
}
 
export default Home;


{/* <div>
<h2>Add Meal</h2> <br/>
<label> Meal name</label>
    <select  onChange={(event)=>{setMealToAdd(event.target.value)}}>
        <option value="1">food1</option>
        <option value="2">food2</option>
        <option value="3">food3</option>
                
    </select> 
            
            
<br/> <br />


<label> Menu Id <input type="number" onChange={(event)=>{
            setMenuItemId(event.target.value)}} /> </label>
            <br/> <br />
<label> # of servings <input type="number" onChange={(event)=>{
            setNumServings(event.target.value)}} /> </label>
            <br/> <br />

<button onClick= {handleShowUserMeal}>Show Meal</button>
<button onClick= {handleAddUserMeal}>Add Meal</button>
</div>
<br />



            <div align='right'>
                <h5>Pick User</h5>
                    <select  dir="rtl"  onChange={(event)=>{setUserId(event.target.value)}}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                        
                    </select> 
            </div>*/}