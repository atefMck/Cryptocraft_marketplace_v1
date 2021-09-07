import React, {useState, useEffect} from 'react';
import {StyleSheet, css} from 'aphrodite'
import Login from './Login'
import Register from './Register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import registerImg from '../../assets/img/register.png'
import Loader from '../Loader/Loader.jsx'
import RegistrationSuccess from './RegistrationSuccess'
import './Auth.css'


const Auth = (props) => {
  const {login, register} = props;
  const { setRegister, setLogin } = props
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState({
    display: false,
    username: '',
    email: ''
  })

  const hideAuth = () => {setRegister(false); setLogin(false)}
  const displayAuth = (form) => {
    console.log(form === 'register')
    setRegister(form === 'register');
    setLogin(form === 'login');
  }

  const displayLoader = (state) => {setLoading(state)}

  const displaySuccess = (display, username, email) => {setSuccess({display, username, email})}

  return (
    <div className="AuthContainer">
      <div className={css(styles.container)}>
        <div className={css(styles.imgContainer)}></div>
        <div action="" className={css(styles.form)}>
          {!loading && <FontAwesomeIcon className={css(styles.close)} icon={faTimes} onClick={hideAuth} />}
          { (!loading && register && !success.display) && <Register displayAuth={displayAuth} displayLoader={displayLoader} displaySuccess={displaySuccess}/>}
          { (!loading && login && !success.display) && <Login displayAuth={displayAuth} displayLoader={displayLoader}/>}
          {(loading && !success.display) && <Loader />}
          {success.display && <RegistrationSuccess username={success.username} email={success.email} />}
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  imgContainer: {
    width: '250px',
    height: '400px',
    backgroundImage: `url(${registerImg})`,
    borderTopLeftRadius: '15px',
    borderBottomLeftRadius: '15px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  form: {
    position: 'relative',
    width: '480px',
    height: '480px',
    backgroundColor: 'white',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  close: {
    position: 'absolute',
    right: '16px',
    top: '16px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    transition: '.6s',
    ':hover': {
      transform: 'scale(1.2)',
      color: 'rgb(224,53,75)'
    }
  },
})

export default Auth;
