import React, {useState, useEffect} from 'react';
import {StyleSheet, css} from 'aphrodite'

const Login = (props) => {
  const {displayAuth} = props
  return (
    <div className={css(styles.form)}>
      <h1>Sign In</h1>
      <label className={css(styles.label)}>Username</label>
      <input className={css(styles.input)} name="username" type="text"/>
      <label className={css(styles.label)}>Password</label>
      <input className={css(styles.input)} name="password" type="password"/>
      <div className={css(styles.row)}>
        <input className={css(styles.submit)} type="submit" value='Login'/>
        <p>Or</p><a onClick={(e) => {e.preventDefault(); displayAuth('register')}} className={css(styles.anchor)}>Sign up</a>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    width: '350px',
    // textTransform: 'uppercase'
  },
  input: {
    width: '350px',
    marginBottom: '20px',
    border: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    transition: '.6s',
    ':focus': {
      outline: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, .7)',
    }
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  submit: {
    width: '130px',
    height: '40px',
    border: '1px solid rgba(0, 0, 0, .3)',
    marginLeft: '10px',
    transition: '.3s',
    backgroundColor: 'white',
    cursor: 'pointer',
    marginRight: '5px',
    ':hover': {
      border: '1px solid rgb(28,157,230)',
      color: 'rgb(28,157,230)'
    }
  },
  anchor: {
    textDecoration: 'none',
    color: 'rgb(28,157,230)',
    transition: '.6s',
    width: '60px',
    marginLeft: '5px',
    cursor: 'pointer',
    ':hover': {
      fontWeight: 'bold'
    }
  }
})

export default Login;
