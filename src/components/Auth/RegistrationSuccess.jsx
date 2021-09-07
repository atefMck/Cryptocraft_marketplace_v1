import React from 'react';
import {StyleSheet, css} from 'aphrodite'

const RegistrationSuccess = (props) => {
  const {username, email} = props

  return (
    <div className={css(styles.form)}>
      <h2>Welcome to the community, <span style={{color: 'rgb(109, 169, 29)'}}>{username}</span>!</h2>
      <p>A verification email has been sent to <span style={{color: 'rgb(109, 169, 29)'}}>{email}</span>, 
      follow the steps to get verified and enjoy access for all of our services.</p>
      <p>What are you waiting for go ahead and start your journey!</p>
    </div>
  );
}

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
})

export default RegistrationSuccess;
