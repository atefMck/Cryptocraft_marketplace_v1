import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import {shortenAddress} from '../../utils/StringUtils';


const TokenCard = (props) => {
  const { icon, name, creatorAddress, reserve, circulatingSupply, views, likes, _id } = props.token
  const history = useHistory()
  const redirect = () => {
    history.push(`/token/${_id}`)
  }
  return (
    <div className={css(styles.card)} onClick={redirect}>
      <div className={css(styles.flexRow)} style={{justifyContent: 'flex-end'}}>
        <FontAwesomeIcon icon={faEye} className={css(styles.textSmall)} />
        <p className={css(styles.textSmall)} >&nbsp;{views}</p>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faHeart} className={css(styles.textSmall)} />
        <p className={css(styles.textSmall)} >&nbsp;{likes}</p>
      </div>
      <img src={icon} alt='Item Preview' className={css(styles.thumbnailMedium)}/>
      <h3 style={{textAlign: 'center'}}>{name}</h3>
      <ul className={css(styles.tokenInfo)}>
        <li className={css(styles.listItem)}><p className={css(styles.descText)}>Creator:</p><p className={css(styles.descText)}>{shortenAddress(creatorAddress)}</p></li>
        <li className={css(styles.listItem)}><p className={css(styles.descText)}>Reserve:</p><p className={css(styles.descText)}>{reserve}</p></li>
        <li className={css(styles.listItem)}><p className={css(styles.descText)}>Total Supply:</p><p className={css(styles.descText)}>{circulatingSupply}</p></li>
      </ul>
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
  tokenInfo: {
    listStyle: 'none',
    backgroundColor: 'rgba(0, 0, 0, .05)',
    borderRadius: '15px',
    padding: '.5rem .2rem',
    color: 'rgba(0, 0, 0, .8)',
    fontSize: '.8rem'
  },
  descText: {
    margin: '0'
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between'
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
})

export default TokenCard;
