import React, {useState, useEffect} from 'react';
import axios from 'axios'
import cookie from 'react-cookies'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Market from './routes/Market/Market';
import Landing from './routes/Landing/Landing';
import Contact from './routes/Contact/Contact';
import Account from './routes/Account/Account';
import Token from './routes/Token/Token';
import Stats from './routes/Stats/Stats';

import HeaderNav from './components/Navigation/HeaderNav';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';

import './App.css';


const App = () => {
  const [register, setRegisterState] = useState(false)
  const setRegister = (state) => setRegisterState(state)
  const [login, setLoginState] = useState(false)
  const setLogin = (state) => setLoginState(state)

  const [isLogged, setIsLogged] = useState(false)
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('');

  const logOut = () => {
    cookie.remove('accessToken')
    setUserId('')
    setIsLogged(false); 
  }

  useEffect(() => {
    const token = cookie.load('accessToken');
    if (token === undefined) {
      setIsLogged(false)
    } else {
      axios.get('http://localhost:3005/auth/getUserId', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res => {
        setIsLogged(true);
        setUserId(res.data.userId)
      }).catch(err => console.log(err))
    }
  }, [isLogged, register, login]);


  return (
    <Router>
      <HeaderNav setRegister={setRegister} setLogin={setLogin} isLogged={isLogged} logOut={logOut} username={username}/>
      <div className='App'>
        
        <Switch>
          <Route path='/marketplace'>
            <Market />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/stats'>
            <Stats />
          </Route>
          <Route path='/user/:username'>
            <Account currentUserId={userId}/>
          </Route>
          <Route path='/token/:tokenId'>
            <Token />
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
        <Footer />
        { (login || register) && <Auth login={login} register={register} setRegister={setRegister} setLogin={setLogin} setUsername={setUsername}/> }
      </div>
    </Router>
  );
}

export default App;
