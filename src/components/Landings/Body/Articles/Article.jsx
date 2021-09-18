import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import world from '../../../../assets/img/cover.jpg';

const Article = (props) =>{
  const {flexStyle} = props
  const rev = flexStyle ? css(styles.articleContainer, styles.reversed) : css(styles.articleContainer)
  return(
    <div className={rev}>
      <div className={css(styles.text)}>
        <h6>About Cryptocraft</h6>
        <h2 style={{margin: '10px 0', fontSize: '1.7rem'}}>Made for players, by players</h2>
        <p style={{color: 'rgb(217, 217, 217)'}}>Cryptocraft was created with the goal to provide a fun, realistic and dynamic roleplay experience.</p>
        <p style={{color: 'rgb(217, 217, 217)'}}>Our development team is always looking to bring unique features to the server, and thanks to suggestions coming from players - we constantly add new exciting features to the server.</p>
        <button className={css(styles.readMore)}>Read more</button>
      </div>   
      <img src={world} className={css(styles.img)} alt="article"></img> 
    </div>
  )
}
const styles =  StyleSheet.create({
  articleContainer:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    width: '70%',
    marginTop: '120px'
  },
  text:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    height: '400px',
    width: '46%'
  },
  img:{
      width: '670px',
      height: '400px',
      boxShadow: '10px 10px 0px rgba(0, 0, 0, 0.2)'
  },
  reversed:{
      flexDirection:'row-reverse',
  },
  readMore: {
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    border: '3px solid white',
    padding: '.7rem 1.5rem',
    position: 'absolute',
    bottom: '0',
    right: '0',
    transition: '.6s',
    ':hover': {
      backgroundColor: 'white',
      color: 'rgb(54, 144, 235)'
    }
  }
})
export default Article;