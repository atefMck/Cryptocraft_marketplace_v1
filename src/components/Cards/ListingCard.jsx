import React from 'react'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { StyleSheet, css } from 'aphrodite'

const CardH = (props) => {
  const {description, price, seller, token} = props.token
  const history = useHistory()
  const redirectToken = () => {
    history.push(`/token/${token._id}`)
  }
  return (
    <div className={css(styles.card)} onClick={redirectToken}>
      <img src={token !== undefined && token.metadata !== undefined ? token.metadata.image : token.icon} alt='Item Preview' className={css(styles.thumbnailMedium)}/>
      <div className={css(styles.flexRow)} style={{justifyContent: 'space-between'}}>
        <h4>{token !== undefined && token.name}</h4>
        <p className={css(styles.textSmall)} >Price</p>
      </div>
      <div className={css(styles.flexRow)} style={{justifyContent: 'flex-end', height: '10px !important'}}>
        <FontAwesomeIcon icon={faEthereum} className={css(styles.textSmall)} />&nbsp;
        <p className={css(styles.textSmall)} style={{margin: '0'}} >{price}</p>
      </div>
      <div className={css(styles.flexRow)}>
        <p className={css(styles.textSmall)} >Seller: {seller}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '270px',
    margin: '30px',
    // border: '.5px solid rgba(0, 0, 0, .1)',
    padding: '.5rem .8rem',
    borderRadius: '15px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, .3)',
    transition: '.3s',
    ':hover': {
      cursor: 'pointer',
      transform: 'scale(1.02)'
    }
  },
  textSmall: {
    opacity: '.5',
    fontSize: '.8rem',
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    height: '20px',
  },
  alignRight: {justifyContent: 'space-between'},
  thumbnailMedium: {
    width: '100%',
    height: '240px',
    borderRadius:'15px',
  },
  cardButton: {
    width: '100%',
    height: 30,
  }
})

export default CardH;
