import React from 'react';
import headerVideo from '../../../assets/videos/intro.mp4'
import { StyleSheet, css } from 'aphrodite'
import { ReactSVG } from 'react-svg'
import cubeSvg from '../../../assets/img/cube.svg'

const Header = () =>{
  return(
    <div className={css(styles.container)}>
      <div className={css(styles.videoOverlay)}></div>
      <video src={headerVideo} autoPlay loop muted className={css(styles.video)}></video>
      
      <ReactSVG src={cubeSvg} className={css(styles.cubeSvg)}/>
      <h1 className={css(styles.logoName)}>Cryptocraft</h1>
      <p className={css(styles.slogan)}>Mine, Craft, Trade, Invest</p>
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
    color: 'white',
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
    opacity:'0.3',
    zIndex:'-1',
  },
  cubeSvg: {
    width: '130px',
    height: '130px'
  },
  logoName: {
    margin: '0',
    fontSize: '4rem',
    fontWeight: 'bolder',
    borderBottom: '2px solid white',
    fontFamily: 'Lato, sans-serif'
  },
  slogan: {
    margin: '7px',
    fontSize: '1.5rem',
    fontFamily: 'Lato, sans-serif'
  }
})

export default Header;