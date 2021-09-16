import React from 'react';
import headerVideo from '../../../assets/videos/intro.mp4'
import { StyleSheet, css } from 'aphrodite'

const Header = () =>{
  return(
    <div className={css(styles.container)}>
      <div className={css(styles.videoOverlay)}></div>
      <video src={headerVideo} autoPlay loop muted className={css(styles.video)}></video>
      
      <h1>IT'S TIME TO MINE</h1>
      <p>what are you waiting for </p>
    </div>
    
    )
  }

const styles = StyleSheet.create({
  container: {
    height:'100vh',
    width:'100vw',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  video:{
    objectFit:'cover',
    width:'100vw',
    height:'100vh',
    position:'fixed',
    zIndex:'-2'
  },
  videoOverlay:{
    backgroundColor:'black',
    position:'fixed',
    width:'100%',
    height:'100vh',
    opacity:'0.4',
    zIndex:'-1'
  }
})

export default Header;