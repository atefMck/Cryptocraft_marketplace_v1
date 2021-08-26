import React, {useState} from 'react';
import { StyleSheet, css } from 'aphrodite'
import emailPng from '../../assets/img/email.png'
import emailjs from 'emailjs-com';
import {USER_ID, TEMPLATE_ID, SERVICE_ID} from '../../utils/emailkey'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const handleInput = event => {
    const setStateMethod = eval('set' + event.target.name)
    setStateMethod(event.target.value);
  }
  
  const handleSubmit = event => {
    event.preventDefault();
    var templateParams = {
      to_name: 'Cryptocraft',
      from_name: `${firstName} ${lastName}`,
      message: message
  };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }
  
  return (
    <div className={css(styles.contactContainer)}>
      <h1 style={{textTransform: 'uppercase', marginBottom: '50px'}}>Have some questions?</h1>
      <div className={css(styles.row)}>
        <img src={emailPng} alt='email' className={css(styles.image)}/>
        <form onSubmit={handleSubmit} className={css(styles.form)}>
          <input name='FirstName' type="text" placeholder="First Name" className={css(styles.input)} value={firstName} onChange={handleInput}/>
          <input name='LastName' type="text" placeholder="Last Name" className={css(styles.input)} value={lastName} onChange={handleInput}/>
          <input name='Email' type="email" placeholder="Email" className={css(styles.input)} value={email} onChange={handleInput}/>
          <textarea name="Message" id="" cols="40" rows="5" className={css(styles.input, styles.textarea)} value={message} onChange={handleInput}></textarea>
          <input type="submit" value="Send" className={css(styles.submit)}></input>
        </form>
      </div>
    </div>
    );
  }
  
  const styles = StyleSheet.create({
    contactContainer: {
      color: 'black',
      height: '87vh',
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    row: {
      display: 'flex',
      width: 'fit-content',
      justifyContent: 'space-between'
    },
    image: {
      width: '340px',
      height: '340px',
      marginRight: '90px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    input: {
      width: '100%',
      height: '30px',
      borderRadius: '10px',
      boxShadow: 'none',
      border: '1px solid rgba(0, 0, 0, .2)',
      paddingLeft: '25px',
      transition: '.6s',
      
      ':focus': {
        border: '1px solid rgba(0, 0, 0, .7)',
        outline: 'none'
      }
    },
    textarea: {
      height: '90px',
      paddingTop: '10px'
    },
    submit: {
      width: '150px',
      height: '30px',
      border: '1px solid rgba(0, 0, 0, .2)',
      backgroundColor: 'rgb(28,157,230)',
      color: 'white',
    }
  })
  
  export default Contact;
  