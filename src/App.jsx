import React, {useState, useEffect} from 'react';
import Market from './routes/Market/Market';
import Landing from './routes/Landing/Landing';
import Contact from './routes/Contact/Contact';
import HeaderNav from './components/Navigation/HeaderNav';
import Footer from './components/Footer/Footer';
import Account from './routes/Account/Account';
import Auth from './components/Auth/Auth';
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


const App = () => {
  const [register, setRegisterState] = useState(false)
  const setRegister = (state) => setRegisterState(state)
  const [login, setLoginState] = useState(false)
  const setLogin = (state) => setLoginState(state)

  return (
    <Router>
      <HeaderNav setRegister={setRegister} setLogin={setLogin} />
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
        { (login || register) && <Auth login={login} register={register} setRegister={setRegister} setLogin={setLogin}/> }
      </div>
    </Router>
  );
}

export default App;
