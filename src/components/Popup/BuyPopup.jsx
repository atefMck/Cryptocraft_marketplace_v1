import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { faEthereum,  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import profile from '../../assets/img/profile.jpg'

const BuyPopup = (props) => {
  const {token, listing} = props

  return (
      <div className={css(styles.popcontainer)}>
          <div className={css(styles.div1)}>
          <h4 className={css(styles.text)}>Complete checkout</h4>
        </div>
        <div className={css(styles.div2)}>
          <h2 >Item</h2>
          <h2>Subtotal</h2>
        </div>
        <div className={css(styles.div3)}>
          <div className={css(styles.div3left1)}>
            <img src={token.metadata !== undefined ? token.metadata.image : token.icon} className={css(styles.img)} alt="token"/>
            <div className={css(styles.div3left)}>
              <p className={css(styles.p)}>{token.name}</p>
              <p className={css(styles.p)}>Royalities: 10% @</p>
            </div>
          </div>
        <div className={css(styles.div3left2)}>
            <p className={css(styles.ppp)}> <FontAwesomeIcon icon={faEthereum}/>{listing.price}</p>
            <p className={css(styles.pp)}>(${listing.price * 3978})</p>
          </div>
        </div>
        <div className={css(styles.div3)}>
          <p className={css(styles.pp)}>Total</p>
          <div className={css(styles.div3left2)}>
            <p className={css(styles.ppp)}> <FontAwesomeIcon icon={faEthereum}/>{listing.price}</p>
            <p className={css(styles.pp)}>(${listing.price * 3978})</p>
          </div>
        </div>
        <div className={css(styles.div5)}>
        <label className='container'>
          <span className={css(styles.terms)}>By checking this box, I agree to Crypto's</span> <span className={css(styles.terms2)}>Terms of Service</span>
          <input type='checkbox' />
          <span className='checkmark'></span>
        </label>
        </div>
        <div className={css(styles.div6)}>
          <button className={css(styles.button1)} disabled>Checkout</button>
          <button className={css(styles.button2)}>Add Funds</button>
        </div>
      </div>
  )
}

const styles = StyleSheet.create({
    pop:{
      marginTop:'5%',
      border:'5px solid red',
      position:'fixed',
      width:'900px',
      height:'500px',
      borderRadius:'10px',
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center'
     
      
    },
    container: {
      display:'flex',
      justifyContent:'center',
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      top: '0',
      left: '0',
      zIndex: '200',
      
    },
    div:{
      paddingTop:'20px',
      
      alignSelf:'flex-end',
      marginRight:'20px'
    },
    popcontainer:{
     
      width:'900px',
      height:'auto',
      backgroundColor:'white',
      borderRadius:'10px',
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center'
    },
    fa:{
      
      cursor:'pointer',
      backgroundColor:'red',
      alignSelf:'center'
      
    },
    div1:{
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      
      textAlign:'center',
      width:'100%',
      height:'80px',
      borderBottom:'solid 1px grey',
    },
    text:{
      fontSize:'25px'
    },
    
    div2:{
      paddingTop:'10px',
      width:'90%',
      borderBottom:'1px solid grey',
      display:'flex',
      justifyContent:'space-between',
      height:'80px'
    },
    img:{
      height:'90px',
      width:'90px'
    },
    div3:{
      marginTop:'20px',
      width:'90%',
      borderBottom:'1px solid grey',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      paddingBottom:'10px',
      
    },
    div3left1:{
      width:'47%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      
      lineHeight:'normal',
      
      
    },
    div3left:{
      paddingTop:'10px'
      
    },
    p:{
      margin:'0',
      fontWeight:'bold',
      ':nth-child(1)':{
        color:'rgb(28, 157, 230)',
      },
      ':nth-child(2)':{
        color:'black',
      },
      ':nth-child(3)':{
        color:'grey',
        fontSize:'15px',
      },
    },
    div3left2:{
      display:'flex',
      flexDirection:'column'
    },
    pp:{
      margin:'0',
      fontWeight:'bold',
    },
    ppp:{
      alignSelf:'flex-end',
      margin:'0',
      fontWeight:'bold',
    },
    div5:{
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
      marginTop:'20px',
      marginBottom:'20px',
      borderBottom:'grey 1px solid',
      width:'90%',
      height:'80px'
      
    },
    terms:{
      color:'grey'
    },
    terms2:{
      color:'rgb(28, 157, 230)'
    },
    button1:{
      backgroundColor:'rgb(28, 157, 230)',
      border:'none',
      color: 'white',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      cursor: 'pointer',
      borderRadius: '4px',
    },
    button2:{
      backgroundColor:'white',
      border:'1px solid rgb(28, 157, 230)',
      color: 'rgb(28, 157, 230)',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      cursor: 'pointer',
      borderRadius: '4px',
    }
    
    
  })

export default BuyPopup