import Axios from 'axios';
import { useState } from 'react';



const CreateUser = () => {

    const [username, setUsername] = useState("");
    const [height,setHeight] = useState("");
    const [goal_weight,setGoalWeight] = useState(0);
    const [weight,setWeight] = useState("");
    const [age,setAge] = useState("");
    const [gender,setGender] = useState("");
    const [activityLevel,setActivityLevel] = useState("");


    let handleCreateUser = () => {
        console.log("handlecreateuser")
        console.log(username)
        console.log(activityLevel)

        const newUser = {
            username:username,
            height:height,
            weight: weight,
            goal_weight: goal_weight, 
            age:age, 
            sex:gender,
            activity_level_fk: 1,
        }   
        fetch('http://localhost:8080/api/insert', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
        .then(json => console.log(json));

    }

    return ( 
        <div>
            <h2>Sign Up</h2> <br />
            <div>            
                    <label> Username: <input type="text" onChange={(event)=>{
                        setUsername(event.target.value)}} /> </label>
                    <br/> <br />
                    <label> Height: <input type="number" onChange={(event)=>{
                        setHeight(event.target.value)}} /> </label>
                    <br/> <br />
                    <label> Weight: <input type="number" onChange={(event)=>{
                        setWeight(event.target.value)}} /> </label>
                    <br/> <br />
                    <label> Goal Weight: <input type="number" onChange={(event)=>{
                        setGoalWeight(event.target.value)}} /> </label>
                    <br/> <br />
                    <label> Age: <input type="number" onChange={(event)=>{
                        setAge(event.target.value)}} /> </label>
                    <br/> <br />
                    <label> Gender: <input type="text" onChange={(event)=>{
                        setGender(event.target.value)}} /> </label>
                    <br/> <br />
                    <label> Activity Level: <input type="number" onChange={(event)=>{
                        setActivityLevel(event.target.value)}} /> </label>
                    <br/> <br />
                    <button onClick= {handleCreateUser}>Sign Up</button>
            </div>
        </div>
        
     );
}
 
export default CreateUser;