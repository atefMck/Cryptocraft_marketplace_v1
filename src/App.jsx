import * as React from 'react';
import Market from './routes/Market/Market';
import Landing from './routes/Landing/Landing';
import Contact from './routes/Contact/Contact';
import HeaderNav from './components/Navigation/HeaderNav';
import Footer from './components/Footer/Footer';
import Account from './routes/Account/Account';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import coverPhoto from './assets/img/cover.jpg'
import profilePhoto from './assets/img/profile.jpg'
import assets from './placeholders/placeholders'
const user = {
  username: 'xFreak666',
  profilePhoto,
  coverPhoto,
  address: '0xeDeD14718401885a8Fd774B3382513579535215f',
  assets,
}


class App extends React.Component {
  render() {
    return (
      <Router>
        <HeaderNav />
        <div className='App'>
          
          <Switch>
            <Route path='/marketplace'>
              <Market />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/account'>
              <Account {...user}/>
            </Route>
            <Route path='/'>
              <Landing />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
