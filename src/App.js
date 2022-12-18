import React from 'react'
import ActualBot from './pages/actualbot';
import NavBar from './components/NavBar';
import About from './pages/about';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
function App() {
  return (
      <>
        <Router>
          <Switch>
            <Route path="/try">
              <ActualBot />
            </Route>
            <Route path="/">
              <NavBar/>
              <About/>
            </Route>
          </Switch>
        </Router>
      </>
    );
}
export default App;
