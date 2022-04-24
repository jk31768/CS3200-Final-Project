import Axios from 'axios';
import { useState } from 'react';


const CreateUser = () => {

    const [username, setUsername] = useState("");
    const [height,setHeight] = useState("");
    const [weight,setWeight] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [activityLevel,setActivityLevel] = useState("");

    const handleCreateUser = () => {
        console.log("handlecreateuser")
        console.log(username)
        console.log(activityLevel)
            Axios.post('http://localhost:3001/addUser',{
                username:username,
                height:height,
                weight: weight, 
                age:age, 
                gender:gender,
                activityLevel:activityLevel,
                }).then(()=>{
                console.log("added user")
            })
        } 

    return ( 
        <div>
            <h2>Sign Up</h2> <br />
            <div>            
                <form>
                    <label> Username: <input type="text" onChange={(event)=>{
                        setUsername(event.target.value)
                    }} /> </label>
                    <br/> <br />
                    <label> Height: <input type="text" onChange={(event)=>{
                        setHeight(event.target.value)
                    }} /> </label>
                    <br/> <br />
                    <label> Weight: <input type="text" onChange={(event)=>{
                        setWeight(event.target.value)
                    }} /> </label>
                    <br/> <br />
                    <label> Age: <input type="text" onChange={(event)=>{
                        setAge(event.target.value)
                    }} /> </label>
                    <br/> <br />
                    <label> Gender: <input type="text" onChange={(event)=>{
                        setGender(event.target.value)
                    }} /> </label>
                    <br/> <br />
                    <label> Activity Level: <input type="text" onChange={(event)=>{
                        setActivityLevel(event.target.value)
                    }} /> </label>
                    <br/> <br />
                    <button onClick= {handleCreateUser}>Sign Up</button>
                </form>
            </div>
        </div>
        
     );
}
 
export default CreateUser;