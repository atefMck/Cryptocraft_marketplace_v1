import React, {useState, useEffect} from 'react';
import {StyleSheet, css} from 'aphrodite'
import Login from './Login'
import Register from './Register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import registerImg from '../../assets/img/register.png'
import './Auth.css'


const Auth = (props) => {
  const {login, register} = props;
  const { setRegister, setLogin } = props
  const hideAuth = () => {setRegister(false); setLogin(false)}
  const displayAuth = (form) => {
    console.log(form === 'register')
    setRegister(form === 'register');
    setLogin(form === 'login');
  }

  return (
    <div className="AuthContainer">
      <div className={css(styles.container)}>
      <div className={css(styles.imgContainer)}></div>
      <form action="" className={css(styles.form)}>
        <FontAwesomeIcon className={css(styles.close)} icon={faTimes} onClick={hideAuth} />
        { register && <Register displayAuth={displayAuth}/>}
        { login && <Login displayAuth={displayAuth}/>}
      </form>
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
