import { StyleSheet, css } from 'aphrodite'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import OfferPopup from './OfferPopup'
import BuyPopup from './BuyPopup'

import React from 'react';
import './pop.css'

const Popup = (props) => {
  const {setOfferPopup, setBuyPopup, offerPopup, buyPopup, token , listing} = props
  

  return (
    <div className={css(styles.container)} style={{backdropFilter: 'blur(5px)'}}>
        <div className={css(styles.popupContainer)}>
          <FontAwesomeIcon icon={faTimes} className={css(styles.close)}  onClick={()=>{setBuyPopup(false); setOfferPopup(false)}}/> 
          { offerPopup && <OfferPopup listing={listing}/> }
          { buyPopup && <BuyPopup token={token} listing={listing}/> }
        </div>  
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: '100',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '.6s',
  },
  popupContainer: {
    backgroundColor: 'white',
    borderRadius: '15px',
    position: 'relative',
  },
  close: {
    position: 'absolute',
    right: '16px',
    top: '16px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    transition: '.6s',
    ':hover': {
      transform: 'scale(1.2)',
      color: 'rgb(224,53,75)'
    }
  }
})

export default Popup;
