import { useState } from "react";

const Home = () => {
    const calories = 2000
    const food_eaten = ['hotdog','hamburger']
    return ( 
        <div className="home">
            <h2>Homepage</h2> <br/>
            <h2>Calories left for today:</h2> <br/>
            <h4>{calories}</h4> <br/>
            <h3>What you have eaten today:</h3> <br/>
            <ul>
                        <li>Strawberry</li>
                        <li>Hamburger</li>
                        <li>Ramen</li>
                        <li>Gummy Bears</li>
            </ul><br/>
            <h4>Your Favorites</h4>
                <div className="favorites">
                <div>
                    <ul>
                        <li>Strawberry</li>
                        <li>Hamburger</li>
                        <li>Ramen</li>
                        <li>Gummy Bears</li>
                    </ul>
                </div>
        </div>

        </div>
     );
}
 
export default Home;