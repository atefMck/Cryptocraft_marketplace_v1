import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { StyleSheet, css } from 'aphrodite'

const CardH = ({name, price, seller, description, views, likes, image}) => {
  return (
    <div className={css(styles.card)}>
      <div className={css(styles.flexRow)} style={{justifyContent: 'flex-end'}}>
        <FontAwesomeIcon icon={faEye} className={css(styles.textSmall)} />
        <p className={css(styles.textSmall)} >&nbsp;{views}</p>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faHeart} className={css(styles.textSmall)} />
        <p className={css(styles.textSmall)} >&nbsp;{likes}</p>
      </div>
      <img src={image} alt='Item Preview' className={css(styles.thumbnailMedium)}/>
      <div className={css(styles.flexRow)} style={{justifyContent: 'space-between'}}>
        <h4>{name}</h4>
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
    boxShadow: '0px 0px 20px rgba(0, 0, 0, .1)',
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
