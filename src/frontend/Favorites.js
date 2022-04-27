import { useState, useEffect } from "react";


const Favorites = () => {
    const [fav_list, setFavList] = useState([]);
    //const fav_list = ['Strawberry, Hamburger, Ramen, Gummy Bears'];
    const [user_id,setUserId] = useState(1);




    useEffect(() => {
        fetch("http://localhost:8080/api/getFavoriteMenuItems/"+ user_id)
          .then(res => res.json())
          .then(
            (result) => {
                setFavList(result);
            },
   
            (error) => {
            }
          )
      }, [])


    return ( 
        <div className="favorites" align ='center'>
            
            <h3>Favorite Menu Items</h3>
            <h4>User {' '+user_id}</h4>
            <div>
            {
                fav_list?.map((item, i) => 
                    <li key={i}>
                        {item.name+'  '}
                    </li>) 

            }
            </div>
        </div>
     );

}


 
export default Favorites;