const CreateUser = () => {
    const handleCreateUser = () => {
        console.log("Creating new user logic")
    }
    return ( 
        <div>
            <h2>Sign Up</h2> <br />
            <div>            
                <form>
                    <label> First Name: <input type="text" name="name" /> </label>
                    <br/> <br />
                    <label> Last Name: <input type="text" name="name" /> </label>
                    <br/> <br />
                    <label> Last Name: <input type="text" name="name" /> </label>
                    <br/> <br />
                    <label> Height: <input type="text" name="name" /> </label>
                    <br/> <br />
                    <label> Weight: <input type="text" name="name" /> </label>
                    <br/> <br />
                    <label> Age: <input type="text" name="name" /> </label>
                    <br/> <br />
                    <label> Gender: <input type="text" name="name" /> </label>
                    <br/> <br />
                    <label> Activity Level: <input type="text" name="name" /> </label>
                    <br/> <br />
                    <button onclick= {handleCreateUser}>Sign Up</button>
                </form>
            </div>
        </div>
        
     );
}
 
export default CreateUser;