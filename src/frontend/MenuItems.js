import { UnorderedList} from '@chakra-ui/react';
import { useState,useEffect } from "react";
import MenuItem from "./components/MenuItem"
//import axios from 'axios';


const MenuItems = () => {
    const [menu_list, setMenuList] = useState([]);
    const [search_bar, setSearchBar] = useState("");



    useEffect(() => {
        fetch("http://localhost:8080/api/getMenuItems")
          .then(res => res.json())
          .then(
            (result) => {
                setMenuList(result);
            },
   
            (error) => {
            }
          )
      }, [])
        
     function handleRestaurantSearch () {
        fetch('http://localhost:8080/api/getMenuItemsByRestaurant/' + search_bar, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res =>  res.json()).then(body =>  {
            console.log(body); 
            setMenuList(body);
        })
    }

    function handleItemSearch () {
        fetch('http://localhost:8080/api/getMenuItemsByItem/' + search_bar, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res =>  res.json()).then(body =>  {
            console.log(body); 
            setMenuList(body);
        })
    }

    if(menu_list){

        // return (


        //     <div className="menuitems">
        //     <div>
        //     <label> Search: <input type="text" onChange={(event)=>{
        //                 setSearchBar(event.target.value)}} /> </label>
        //     <button onClick= {handleRestaurantSearch}>Search By Restaurant</button>
        //     <button onClick= {handleItemSearch}>Search By Item</button>
        //     <UnorderedList spacing={5}>
        //          {menu_list.map((item, i) =>  <li key={i}><MenuItem name={item.name} calories= {item.calories} menu_item_id={item.menu_item_id} rname={item.rname} /></li>)}
        //     </UnorderedList>
        //     </div>
        // </div>
        // );
    
    }

    return ( 
        <div className="menuitems">
            <div>
                <ul>
                    <li>what</li>
                    <li>is</li>
                    <li>wrong</li>
                    <li>Gummy Bears</li>
                </ul>
            </div>
        </div>
     );

}


 
export default MenuItems;