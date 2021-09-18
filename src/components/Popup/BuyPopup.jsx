import React, {useState} from 'react'
import { StyleSheet, css } from 'aphrodite'
import axios from 'axios'
import cookie from 'react-cookies'

const BuyPopup = (props) => {
  const {listing, token} = props

  const handlePurchase = () => {
    const token = cookie.load('accessToken');
    const options = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    axios.post(`http://localhost:3005/transaction/sendTokenNFT/${listing._id}/${listing.seller}`, {}, options).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  
  return (
    <div className={css(styles.container)}>
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
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      minWidth: '700px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
      margin: 'auto',
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
  })
  
  export default BuyPopup