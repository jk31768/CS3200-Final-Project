import { useState } from "react";


const Home = () => {
    let calories = 2000
    let [food_eaten, setFoodEaten] = useState([]);
    let [errorMessage, setErrorMessage] = useState('');
    let food = "food"

    

    const items = food_eaten.map((food_eaten, idx) => {
        return <li key={idx}>{food_eaten}</li>;
    });

    const handleAddFood = () => {
        if (food == null){
            setErrorMessage('Please choose a food item.');
        }
        else{
            setErrorMessage("");
            setFoodEaten(food_eaten => [...food_eaten, food]);
            console.log(food_eaten)
        }
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2> <br/>
            <h2>Calories left for today:</h2> <br/>
            <h4>{calories}</h4> <br/>
            <h3>What you have eaten today:</h3> <br/>
            
            <ul> 
                {food_eaten.map((food_eaten, idx) => {return <li key={idx}>{food_eaten}</li>;})}
            </ul>

            <button onClick={handleAddFood}>Add Food</button>
            {errorMessage && (<p className="error"> {errorMessage} </p>)}

        </div>
     );
}
 
export default Home;