import React from 'react';
import {StyleSheet, css} from 'aphrodite'

const Register = (props) => {
  const {displayAuth} = props
  return (
    <div className={css(styles.form)}>
      <h1>Sign Up</h1>
      <label className={css(styles.label)}>Username</label>
      <input className={css(styles.input)} name="username" type="text"/>
      <label className={css(styles.label)}>Email</label>
      <input className={css(styles.input)} name="email" type="email"/>
      <label className={css(styles.label)}>Password</label>
      <input className={css(styles.input)} name="password" type="password"/>
      <label className={css(styles.label)}>Confirm Password</label>
      <input className={css(styles.input)} name="confirm" type="password"/>
      <div className={css(styles.row)}>
        <input className={css(styles.submit)} type="submit" value='Register'/>
        <p>Or</p><a onClick={(e) => {e.preventDefault(); displayAuth('login')}} className={css(styles.anchor)}>Sign in</a>
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

export default Register;
