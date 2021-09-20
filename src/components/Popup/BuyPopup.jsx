import React, {useState, useEffect} from 'react'
import { StyleSheet, css } from 'aphrodite'
import axios from 'axios'
import cookie from 'react-cookies'
import Loader from '../Loader/Loader.jsx'

import tickImage from '../../assets/img/tick.png'


const BuyPopup = (props) => {
  const {listing, token} = props
  const [loading, setLoading] = useState(false)
  const [trade, setTrade] = useState({});
  const [content, setContent] = useState('checkout');

  const handlePurchase = () => {
    const token = cookie.load('accessToken');
    const options = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    setContent('loader');
    axios.post(`http://localhost:3005/trade/createTrade/${listing._id}/${listing.seller}`, {}, options).then(res => {
      setTrade(res.data)
      setContent('sign');
    }).catch(err => {
      console.log(err)
    })
  }

  const handleConfirm= () => {
    const token = cookie.load('accessToken');
    const options = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    axios.post(`http://localhost:3005/trade/initiatorConfirm/${trade._id}/`, {}, options).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  const panels = {
      checkout: (
        <div className={css(styles.wrapper)}>
            <h1>Buy now</h1>
            <div className={css(styles.flexRow)}>
                <div style={{textAlign: 'center', borderRight: '1px solid rgb(28,157,230)',}} className={css(styles.flexColumn)}>
                <h2>{token.name}</h2>
                <img src={token.metadata ? token.metadata.image : token.icon} alt="token" className={css(styles.image)}/>
                <p>{listing && listing.description}</p>
                </div>
                <div className={css(styles.flexColumn)}>
                <h2>Total:</h2>
                <ul style={{listStyle: 'none', padding: '0'}}>
                    <li className={css(styles.listItem)}><p>1x {token.name}</p> <p>{listing && listing.price}</p></li>
                    <li className={css(styles.listItem)}><p>10% Royalties</p> <p>{listing && listing.price / 10}</p></li>
                    <li className={css(styles.listItem)}><p>Gas Fee &#8771;</p> <p>{0.000381726}</p></li>
                    <li className={css(styles.listLine)}></li>
                    <li className={css(styles.listItem)}><p><b>Total</b></p> <p><b>{listing && (listing.price + (listing.price / 10) + 0.000381726).toFixed(2)}</b></p></li>
                </ul>
                </div>
            </div>
            <button className={css(styles.submit)} onClick={handlePurchase}>Check Out</button>
        </div>
      ),
      sign: (
          <div className={css(styles.wrapper)}>
              <h1>Trade requested successfully</h1>
              <p>Please proceed in signing the transaction in your Enjin Wallet App, then click on the sign button below.</p>
              <img src={tickImage} className={css(styles.qrCode)} alt="Success"/>
              <button className={css(styles.submit, styles.sign)} onClick={handleConfirm}>Sign</button>
          </div>
      ),
      loader: <Loader />
  }
  
  return (
    <div className={css(styles.container)}>
        {panels[content]}
    </div>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      minWidth: '700px',
      height: '590px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '.3rem 2rem',
      paddingBottom: '2rem',
      flexWrap: 'wrap'
    },
    wrapper: {
        minWidth: '700px',
        height: '590px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '.3rem 2rem',
        paddingBottom: '2rem',
        flexWrap: 'wrap'
      },
    flexRow: {
      margin: '25px 0',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    flexColumn: {
      width: '100%',
      padding: '1rem'
    },
    image: {
      width: '200px',
      borderRadius: '15px'
    },
    listItem: {
      display: 'flex',
      justifyContent: 'space-between',
      opacity: '.8',
      fontSize: '1rem',
    },
    listLine: {
      width: '100%',
      height: '1px',
      backgroundColor: 'rgb(28,157,230)'
    },
    submit: {
      backgroundColor: 'rgb(28,157,230)',
      width: 'fit-content',
      height: '50px',
      border: 'none',
      color: 'white',
      padding: '.7rem 1rem',
      fontWeight: 'bolder',
      fontSize: '1.2rem',
      cursor: 'pointer',
      transition: '.6s',
      borderRadius: '8px',
      ':hover': {
        color: 'rgb(28,157,230)',
        backgroundColor: 'white',
        border: '2px solid rgb(28,157,230)'
      }
    },
    qrCode: {
        width: '200px',
        marginTop: '70px',
    },
    sign: {
        marginTop: '70px'

    }
  })
  
  export default BuyPopup