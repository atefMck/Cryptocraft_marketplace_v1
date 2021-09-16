import { StyleSheet, css } from 'aphrodite'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import OfferPopup from './OfferPopup'
import BuyPopup from './BuyPopup'
import React from 'react';
import './pop.css'
const Popup = (props) => {
  const {setOfferPopup, setBuyPopup, offerPopup, buyPopup} = props

 

  return (
    <div className={css(styles.container)} style={{backdropFilter: 'blur(5px)'}}>
        <div className={css(styles.pop)}>
          <div className={css(styles.div)}>
            <FontAwesomeIcon icon={faTimes} className={css(styles.fa)}  onClick={()=>{setBuyPopup(false); setOfferPopup(false)}}/> 
          </div>
          { offerPopup && <OfferPopup /> }
          { buyPopup && <BuyPopup /> }
        </div>  
    </div>
  );
}

const styles = StyleSheet.create({
  pop:{
    marginTop:'5%',
    
    position:'fixed',
    width:'900px',
    height:'auto',
    borderRadius:'10px',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    
   
    
  },
  container: {
    display:'flex',
    justifyContent:'center',
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100vw',
    height: '100vh',
    top: '0',
    left: '0',
    zIndex: '200',
    
  },
  div:{
    alignSelf:'flex-end',
    position:'relative',
    top:'30px',
    right:'20px'
    
    
    
  },
  popcontainer:{
    position:'fixed',
    width:'900px',
    height:'auto',
    backgroundColor:'rgba(0,0,0,.6)',
    borderRadius:'10px',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
  },
  fa:{
    marginTop:'15px',
    cursor:'pointer',
    
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

export default Popup;
