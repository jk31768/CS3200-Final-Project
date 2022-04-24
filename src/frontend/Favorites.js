
import React, {useEffect, useState} from 'react';
import Axios from 'axios';


const Favorites = () => {
    
    //const fav_list = ['Strawberry, Hamburger, Ramen, Gummy Bears'];


    const [fav_list, setItems] = useState([]);


    // const addFavFood = () => {
    //     Axios.post('http://localhost:3000/addFav',{menu_id: menu_id}).then(()=>{
    //         console.log("added favorite")
    //     })  <button onClick={addFavFood}>Submit</button>
    // }

    
    return ( 
        <div>
            <h4>Your Favorites</h4>
            <div className="favorites"></div>
                <div>



                <form method="get" action='/fav'>
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text"  class="menu_id" />
                            
                            <input type="submit" value="Send" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>



                {
                fav_list.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded-pill" role="alert">
                            <i class="fa fa-user mr-2"></i> <i>{item.menu_id}</i>
                        </div>
                    </div>       
                ))
                }





                </div>
            
        </div>

        
     );

}


 
export default Favorites;