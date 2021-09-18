import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {StyleSheet, css} from 'aphrodite'
import axios from 'axios'
import cookie from 'react-cookies'

const Login = (props) => {
  const {displayLoader, setLogin, hideAuth, setError} = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  const handleInput = (e) => {
    const statesMethods = {
      username: setUsername,
      password: setPassword,
    }
    const setValue = statesMethods[e.target.name]
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    displayLoader(true)
    const body = {
      username,
      password
    }
    axios.post('http://localhost:3005/users/login', body).then(res => {
      cookie.save('accessToken', res.data.token)
      displayLoader(false);
      setLogin(true)
      hideAuth()
      history.push('/')
    }).catch(err => {
      displayLoader(false)
      setError(err.response.data.message)
    })
  }

  const {displayAuth} = props
  return (
    <form className={css(styles.form)} onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <label className={css(styles.label)}>Username</label>
      <input className={css(styles.input)} name="username" type="text" value={username} onChange={handleInput}/>
      <label className={css(styles.label)}>Password</label>
      <input className={css(styles.input)} name="password" type="password" value={password} onChange={handleInput}/>
      <div className={css(styles.row)}>
        <input className={css(styles.submit)} type="submit" value='Login'/>
        <p>Or</p><a onClick={(e) => {e.preventDefault(); displayAuth('register')}} className={css(styles.anchor)}>Sign up</a>
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
