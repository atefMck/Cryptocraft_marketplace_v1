import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { StyleSheet, css } from 'aphrodite'


const TokenCard = (props) => {
  const { image, name } = props.token
  return (
    <div className={css(styles.card)}>
      <img src={image} alt='Item Preview' className={css(styles.thumbnailMedium)}/>
      <h4>{name}</h4>
      <div>
        <ul>
          <li><p>Creator:</p></li>
          <li><p>Reserve:</p></li>
          <li><p>Total Supply:</p></li>
        </ul>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '270px',
    margin: '30px',
    padding: '.5rem .8rem',
    borderRadius: '15px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, .1)',
    transition: '.3s',
    ':hover': {
      cursor: 'pointer',
      transform: 'scale(1.02)'
    }
  },
  thumbnailMedium: {
    width: '100%',
    height: '240px',
    borderRadius:'15px',
  },
})

export default TokenCard;
