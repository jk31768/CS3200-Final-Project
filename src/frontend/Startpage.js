import './Home.css'

const Startpage = () => {

    let handleUsernameInput = () => {

    }
    // <button className = 'su' href="/signup" style={{
    //     color:"white",
    //     backgroundColor: "#35ccfa",
    //     borderRadius: "8px"

    // }}>Sign Up</button>


    return ( 
        <div className="Startpage" align='center'>
        <h2>Welcome to Nutrition Tracker</h2>
        <h4></h4>
        <h3>For you to live a healthier version of yourself</h3>
        <br />
        <br />
        <br />
        <label>Username</label>
        <input type="text" className='start' onChange={handleUsernameInput}/> <br /><br /><br />
        <div align='center'>
            <button className = 'cta' href="/home" style={{
                        color:"white",
                        backgroundColor: "#35ccfa",
                        borderRadius: "8px"

                    }}>Let's Get Started</button>
            
            </div>

        </div>

     );
}
 
export default Startpage;