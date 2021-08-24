import React from 'react';
import { StyleSheet, css } from 'aphrodite'

const Landing = () => {
  return (
    <div>
      <img src="https://i.ibb.co/2N5y9Q9/traminecraftblock.png" 
      className={css(styles.backgroundImage)}></img>
      <div className={css(styles.mainContainer)}>
        <h1>Hello bitch</h1>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'fixed',
    top: '0',
    left: '-10px',
    width: '110vw',
    filter: 'blur(5px)',
    opacity: '.8',
    zIndex: '-1',
  },
  mainContainer: {
    color: 'white',
    height: '88vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Landing;
