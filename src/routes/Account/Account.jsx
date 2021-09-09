import React, {useState, useEffect} from 'react';
import { StyleSheet, css } from 'aphrodite'
import CardListH from '../../components/Cards/CardListH';
import ProfileNav from '../../components/Navigation/ProfileNav';
import Activity from '../../components/Activity/Activity';
import WalletLinker from '../../components/WalletLinker/WalletLinker.jsx'
import defaultCover from '../../assets/img/defaultcover.jpg';
import defaultProfile from '../../assets/img/defaultprofile.jpg';
import axios from 'axios'
import cookie from 'react-cookies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH, faShareAlt, faExclamation, faPlus } from '@fortawesome/free-solid-svg-icons'


const Account = (props) => {
  const [user, setUser] = useState({})
  const [linkPanel, setLinkPanel] = useState({})
  const [filters, setFilters] = useState({
    forSale: false,
    owned: false,
    favorite: false,
    activity: true
  })
  const [isCurrentUser, setIsCurrentUser] = useState(true)

  const userId = props.userId

  useEffect(() => {
    const token = cookie.load('accessToken');
    const options = {
      data: {
        userId,
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    axios.get('http://localhost:3005/users/getProfile', options).then(res => {
      setUser(res.data)
      if (user._id === userId) setIsCurrentUser(true);
    }).catch(err => console.log(err))
  }, []);

  useEffect(() => {
    if (user._id === userId) setIsCurrentUser(true);
  }, [user])
  
  const handleFilters = (filters) => setFilters(filters);

  return (
    <div className={css(styles.container)}>
      {/* <WalletLinker 
        linkingCode={user !== null && user.identities && user.identities[0].linkingCode ? user.identities[0].linkingCode : ''}
        linkingCodeQr={user !== null && user.identities && user.identities[0].linkingCodeQr ? user.identities[0].linkingCodeQr : ''}
        /> */}
      <div className={css(styles.coverPhoto)} style={{backgroundImage: `url(${user !== null && user.coverPhoto ? user.coverPhoto : defaultCover})`,}}></div>
      <div className={css(styles.profilePhoto)} style={{backgroundImage: `url(${user !== null && user.profilePhoto ? user.profilePhoto : defaultProfile})`,}}></div>
      <h2 style={{marginBottom: '0px'}}>{user !== null && user.username ? user.username : 'Attttouuuf'}</h2>
      <p style={{marginBottom: '0px'}}>{ user !== null && user.wallet ? user.wallet : 'No wallet'}</p>
      {(isCurrentUser && !user.wallet) && <button className={css(styles.linkWallet)}> <FontAwesomeIcon icon={faPlus} style={{marginRight: '2px'}}/> Link Wallet</button>}
      {isCurrentUser ? (
        <ul className={css(styles.accountButtons)}>
          <li className={css(styles.liButton)} style={{borderTopLeftRadius: '7px', borderBottomLeftRadius: '7px'}}> <FontAwesomeIcon icon={faSlidersH} /> </li>
          <li className={css(styles.liButton, styles.middleButton)}> <FontAwesomeIcon icon={faShareAlt} /> </li>
          <li className={css(styles.liButton)} style={{borderTopRightRadius: '7px', borderBottomRightRadius: '7px'}}> <FontAwesomeIcon icon={faExclamation} /> </li>
        </ul>
      ): (
        <ul className={css(styles.accountButtons)}>
          <li className={css(styles.liButton)} style={{borderRadius: '7px'}}> <FontAwesomeIcon icon={faExclamation} /> </li>
        </ul>
      )}
      <div className={css(styles.browse)}>
        <ProfileNav handleFilters={handleFilters}/>
        { filters.owned && <CardListH tokens={user !== null && user.identities && user.identities[0].tokens ? user.identities[0].tokens : []}/>}
        { filters.activity && <Activity />}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  coverPhoto: {
    width: '100%',
    height: '250px',
    backgroundPosition: 'left',
    backgroundSize: 'cover'
  },
  profilePhoto: {
    width: '200px',
    height: '200px',
    backgroundSize: 'contain',
    borderRadius: '100%',
    marginTop: '-100px'
  },
  browse: {
    height: 'fit-content',
    width: '90%',
    marginTop: '50px',
    marginBottom: '50px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, .3)',
  },
  accountButtons: {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
  },
  liButton: {
    width: '35px',
    height: '35px',
    fontSize: '1.2rem',
    border: '1px solid rgba(0, 0, 0, .2)',
    color: 'rgba(0, 0, 0, .2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '.3s',
    ':hover': {
      borderColor: 'rgba(0, 0, 0, 1)',
      color: 'black'
    }
  },
  middleButton: {
    borderRight: '1px solid white', 
    borderLeft: '1px solid white',
    ':hover': {
      borderRight: '1px solid black',
      borderLeft: '1px solid black'
    }
  },
  linkWallet: {
    backgroundColor: 'rgba(109, 169, 29, .7)',
    color: 'white',
    padding: '.3rem .7rem',
    fontWeight: 'bold',
    transition: '.3s',
    ':hover': {
      transform: 'scale(1.05)'
    }
  }
})

export default Account;
