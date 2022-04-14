import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import CreateUser from './CreateUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch> 
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route exact path="/signup"> 
              <CreateUser />
            </Route>
          </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
