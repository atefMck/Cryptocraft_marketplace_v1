import React, {useState} from 'react'
import { StyleSheet, css } from 'aphrodite'
import Select from 'react-select'
import axios from 'axios'
import cookie from 'react-cookies'

const coinOptions = [
  { value: 'eth', label: 'ETH' },
  { value: 'weth', label: 'WETH' },
  { value: 'usdc', label: 'USDC' },
]

const expirationOptions = [
  { value: 7, label: '7 Days' },
  { value: 14, label: '14 Days' },
  { value: 30, label: '30 Days' },
]

const offerPopup = (props) => {
  const {listing} = props
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [coin, setCoin] = useState('WETH');
  const [expiration, setExpiration] = useState(7);
  const [time, setTime] = useState('05:30 PM');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    const token = cookie.load('accessToken');
    e.preventDefault()
    const body = {
      quantity,
      price,
      coin,
      expiration,
      listingId: listing._id
    }
    const options = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    axios.post('http://localhost:3005/offer/create', body, options).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  
  return (
    <div className={css(styles.container)}>
      <h1>Make an offer</h1>
      <form className={css(styles.form)} onSubmit={handleSubmit}>
        <label style={{marginBottom: '5px'}}>Quanitity</label>
        <input type="text"  className={css(styles.input)} value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        <label style={{marginBottom: '5px'}}>Price per item</label>
        <div className={css(styles.flexRow)}>
          <Select options={coinOptions} styles={customStyles} setValue={coin} onChange={(option) => setCoin(option.value)}/>
          <input type="text" style={{width: '65%'}} className={css(styles.input)} value={price} onChange={(e) => setPrice(e.target.value)}/>
          <p style={{width: '15%'}} className={css(styles.price)}>$15,234</p>
        </div>
        <legend style={{marginBottom: '30px'}}>Total amount offered: 246 WETH ($869,115.54)</legend>
        <label style={{marginBottom: '5px'}}>Offer expiration</label>
        <div className={css(styles.flexRow)} style={{justifyContent: 'space-between'}}>
          <Select options={expirationOptions} styles={customStyles} setValue={expiration} onChange={(option) => setExpiration(option.value)}/>
          <input type="text" className={css(styles.input)} style={{width: '76%'}} value={time} onChange={(e) => setTime(e.target.value)}/>
        </div>
        <div className={css(styles.flexRow)}>
          <input type="checkbox" name="" id="" checked={agree} onChange={(e) => setAgree(e.target.checked)}/>
          <p style={{margin: '0'}}>By checking this box, I agree to Cryptocraft's Terms of Service</p>
        </div>
        <input type="submit" value="Make Offer" className={css(styles.submit)}/>
      </form>
    </div>
    )
  }

  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      width: '20%',
      height: '37px',
    }),
  }
  
  const styles = StyleSheet.create({
    container: {
      minWidth: '700px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '.3rem 2rem',
      paddingBottom: '2rem'
    },
    form: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    flexRow: {
      display: 'flex',
      height: '37px',
      marginBottom: '30px'
    },
    input: {
      paddingLeft: '5px',
      height: '34px',
      marginBottom: '30px',
      border: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, .2)',
      transition: '.6s',
      ':focus': {
        outline: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, .7)',
      },
      ':hover': {
        outline: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, .7)',
      }
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
    price: {
      display: 'flex',
      height: '37px',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0',
      color: 'white',
      backgroundColor: 'rgb(28,157,230)'
    }
  })
  
  export default offerPopup