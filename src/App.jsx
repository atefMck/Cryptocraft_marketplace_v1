import * as React from 'react';
import Market from './routes/Market/Market';
import Landing from './routes/Landing/Landing';
import HeaderNav from './components/Navigation/HeaderNav';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <HeaderNav />
          <Switch>
            <Route path='/marketplace'>
              <Market />
            </Route>
            <Route path='/'>
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
