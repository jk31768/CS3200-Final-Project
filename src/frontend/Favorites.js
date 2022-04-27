import { useState } from "react";


const Favorites = () => {
    const [fav_list, setFavList] = useState("");
    //const fav_list = ['Strawberry, Hamburger, Ramen, Gummy Bears'];


    return ( 
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
     );

}


 
export default Favorites;