import React, { useState, useEffect } from 'react';
import {StyleSheet, css} from 'aphrodite'
import validator from 'validator'
import axios from 'axios'

const Register = (props) => {
  const {displayAuth, displayLoader, displaySuccess} = props
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  
  const [validUsername, setValidUsername] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [validConfirm, setValidConfirm] = useState(false)

  const handleInput = (e) => {
    const state = e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)
    const setValue = eval(`set${state}`)
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    displayLoader(true)
    const body = {
      username,
      email,
      password
    }
    axios.post('http://localhost:3005/users/register', body).then(res => {
      console.log(res);
      displayLoader(false);
      displaySuccess(true, username, email);
    })
  }

  useEffect(() => {
    setValidEmail(validator.isEmail(email))
    setValidUsername(validator.isAlphanumeric(username) && validator.isLength(username, {min: 3, max: 20}))
    setValidPassword(validator.isStrongPassword(password, {minLnegth: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}))
    setValidConfirm(password === confirm && validPassword)
  }, [username, email, password, confirm])

  return (
    <form className={css(styles.form)} onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label className={css(styles.label)}>Username</label>
      <input className={validUsername ? css(styles.input, styles.inputValid) : css(styles.input, styles.inputError)} name="username" type="text" value={username} onChange={handleInput}/>
      <label className={css(styles.label)}>Email</label>
      <input className={validEmail ? css(styles.input, styles.inputValid) : css(styles.input, styles.inputError)} name="email" type="email" value={email} onChange={handleInput}/>
      <label className={css(styles.label)}>Password</label>
      <label className={css(styles.label, styles.legend)}>Password must containt at least 1 uppercase, 1 number and 1 symbol.</label>
      <input className={validPassword ? css(styles.input, styles.inputValid) : css(styles.input, styles.inputError)} name="password" type="password" value={password} onChange={handleInput}/>
      <label className={css(styles.label)}>Confirm Password</label>
      <input className={validConfirm ? css(styles.input, styles.inputValid) : css(styles.input, styles.inputError)} name="confirm" type="password" value={confirm} onChange={handleInput}/>
      <div className={css(styles.row)}>
        <input className={css(styles.submit)} type="submit" value='Register'/>
        <p>Or</p><a onClick={(e) => {e.preventDefault(); displayAuth('login')}} className={css(styles.anchor)}>Sign in</a>
      </div>
    </form>
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
  inputError: {
    borderBottom: '1px solid rgba(224, 53, 75, .7)',
    ':focus': {
      borderBottom: '1px solid rgba(224, 53, 75, 1)',
    }
  },
  inputValid: {
    borderBottom: '1px solid rgba(109, 169, 29, .7)',
    ':focus': {
      borderBottom: '1px solid rgba(109, 169, 29, 1)',
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
  },
  legend: {
    fontSize: '.6rem'
  }
})

export default Register;
