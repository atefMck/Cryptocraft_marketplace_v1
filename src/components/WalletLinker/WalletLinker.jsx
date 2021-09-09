import React, {useState} from 'react';
import axios from 'axios';
import cookie from 'react-cookies'
import {StyleSheet, css} from 'aphrodite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import enjinLogo from '../../assets/img/enjinlogo.png'

const checkLink = () => {
  const token = cookie.load('accessToken');
  const options = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
  axios.get('http://localhost:3005/identity/checkLinking', options).then(res => {
    
  }).catch(err => console.log(err))
}

const WalletLinker = (props) => {
  const [step, setStep] = useState(0)
  const [error, setError] = useState('')
  const { linkingCode, linkingCodeQr } = props || ''
  const steps = [
    (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h2 style={{marginBottom: '50px'}}>Step 1: Installing Enjin Crypto Wallet</h2>
        <p>In order to get full access of our services, you need to install the enjin app create or import an existing wallet, then link it to our website.</p>
        <img src={enjinLogo} alt="Enjin" className={css(styles.enjinLogo)}/>
        <a href="https://enjin.io/software/wallet"><button className={css(styles.enjinButton)} >Enjin Blockchain Wallet</button></a>
      </div>
    ),
    (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h2 style={{marginBottom: '50px'}}>Step 2: Linking the wallet</h2>
        <p>{error}</p>
        <p>You can either link your wallet by typing your linking code, or scanning the QR code provided below using the app.</p>
        <p><b>Linking Code:</b> {linkingCode}</p>
        <img src={linkingCodeQr} className={css(styles.qrCode)} alt="Qr linking code"/>
      </div>
    ),
  ]


  return (
    <div className={css(styles.container)} style={{backdropFilter: 'blur(8px)'}}>
      <div className={css(styles.linkContainer)}>
        <FontAwesomeIcon className={css(styles.close)} icon={faTimes} onClick={() => setStep(0)}/>
          {steps[step]}
        <button className={css(styles.nextButton)} onClick={() => setStep(step % 4 + 1)}>Next <FontAwesomeIcon className={css()} icon={faChevronRight} /></button>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    background: 'rgba(0, 0, 0, 0.2)',
    top: '0',
    left: '0',
    zIndex: '200',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
  },
  linkContainer: {
    backgroundColor: 'white',
    width: '600px',
    height: '500px',
    zIndex: '400',
    position: 'relative',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '2rem'
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
  },
  enjinLogo: {
    width: '100px',
    margin: '0 auto',
  },
  enjinButton: {
    margin: '0 auto',
    marginTop: '20px',
    padding: '.7rem .9rem',
    width: 'fit-content',
    backgroundColor: 'rgb(120,102,213)',
    color: 'white',
    transition: '.3s',
    ':hover': {
      transform: 'scale(1.05)'
    }
  },
  nextButton: {
    position: 'absolute',
    bottom: '16px',
    right: '16px',
    padding: '.7rem .9rem',
    backgroundColor: 'rgba(109, 169, 29, .7)',
    color: 'white',
    transition: '.3s',
    ':hover': {
      transform: 'scale(1.05)'
    }
  },
  qrCode: {
    width: '200px',
    margin: '0 auto'
  }
})

export default WalletLinker;
