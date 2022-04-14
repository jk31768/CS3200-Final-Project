//import {Link} from 'react-router-dom'

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1>Nutrition Tracker</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/signup" style={{
                    color:"white",
                    backgroundColor: "#35ccfa",
                    borderRadius: "8px"

                }}>Sign Up</a>
            </div>
        </nav>
     );
}
 
export default Navbar;