import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className={css(styles.container)}>
      <ul className={css(styles.socialIcons)}>
        <li className={css(styles.circle)}><a href="https://www.facebook.com/AtefMckF"><FontAwesomeIcon icon={faFacebookF} /></a></li>
        <li className={css(styles.circle)}><a href="https://www.instagram.com/atefsama666/"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li className={css(styles.circle)}><a href="https://discord.gg/beTMykWXwn"><FontAwesomeIcon icon={faDiscord} /></a></li>
        <li className={css(styles.circle)}><a href="https://twitter.com/xFreak666"><FontAwesomeIcon icon={faTwitter} /></a></li>
      </ul>
      <form onSubmit={e => e.preventDefault()} className={css(styles.form)}>
        <h1>Stay in the loop</h1>
        <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and <br></br>tricks for navigating OpenSea.</p>
        <div>
          <input type="email" placeholder="Type your email" className={css(styles.input)}/>
          <input type="submit" value="Subscribe" className={css(styles.checkButton)}/>
        </div>
      </form>
      <p>© 2018 - 2021 BigBrain Tech, Inc</p>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color: 'white',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    bottom: '0px'
  },
  socialIcons: {
    display: 'flex',
    fontSize: '1.2rem',
    width: '240px',
    justifyContent: 'space-evenly',
    padding: '0',
  },
  circle: {
    borderRadius: '100%',
    backgroundColor: 'white',
    color: 'black',
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '.2s',
    ':hover': {
      transform: 'scale(1.1)',
      backgroundColor: 'rgb(28,157,230)',
      color: 'white'
    }
  },
  form: {
    margin: '30px 0',
    borderTop: '2px solid white',
    borderBottom: '2px solid white'
  },
  input: {
    width: '200px',
    height: '30px',
    borderRadius: '10px',
    boxShadow: 'none',
    border: '1px solid rgba(0, 0, 0, .2)',
    paddingLeft: '10px',
    transition: '.6s',
    marginBottom: '25px',
    ':focus': {
      border: '1px solid rgba(0, 0, 0, .7)',
      outline: 'none',
    }
  },
  checkButton: {
    width: '100px',
    height: '35px',
    borderRadius: '10px',
    backgroundColor: 'rgb(28,157,230)',
    color: 'white',
    marginLeft: '20px',
    transition: '.3s',
    border: 'none',
    cursor: 'pointer'
  },
})

export default Footer;
