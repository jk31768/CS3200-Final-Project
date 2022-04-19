import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import CreateUser from './CreateUser';
import Favorites from './Favorites';
import Startpage from './Startpage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch> 
            <Route exact path="/"> 
              <Startpage />
            </Route>
            <Route exact path="/home"> 
              <Home />
            </Route>
            <Route exact path="/signup"> 
              <CreateUser />
            </Route>
            <Route exact path="/favorites"> 
              <Favorites />
            </Route>
          </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
