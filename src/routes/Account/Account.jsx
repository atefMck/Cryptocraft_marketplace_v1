import React, {useState, useEffect} from 'react';
import { StyleSheet, css } from 'aphrodite'
import CardListH from '../../components/Cards/CardListH';
import ProfileNav from '../../components/Navigation/ProfileNav';
import Activity from '../../components/Activity/Activity';
import defaultCover from '../../assets/img/defaultcover.jpg';
import defaultProfile from '../../assets/img/defaultprofile.jpg';
import axios from 'axios'
import cookie from 'react-cookies'


const Account = (props) => {
  const [user, setUser] = useState({})
  const [filters, setFilters] = useState({
    forSale: false,
    owned: false,
    favorite: false,
    activity: true
  })

  useEffect(() => {
    const token = cookie.load('accessToken');
    const options = {
      data: {
        userId: props.userId
      },
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    axios.get('http://localhost:3005/users/getProfile', options).then(res => {
      setUser(res.data)
    }).catch(err => console.log(err))
  }, []);
  
  const handleFilters = (filters) => setFilters(filters);

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.coverPhoto)} style={{backgroundImage: `url(${user !== null && user.coverPhoto ? user.coverPhoto : defaultCover})`,}}></div>
      <div className={css(styles.profilePhoto)} style={{backgroundImage: `url(${user !== null && user.profilePhoto ? user.profilePhoto : defaultProfile})`,}}></div>
      <h2 style={{marginBottom: '0px'}}>{user !== null && user.username ? user.username : 'Attttouuuf'}</h2>
      <p>{ user !== null && user.wallet ? user.wallet : 'No wallet'}</p>
      <div className={css(styles.browse)}>
        <ProfileNav handleFilters={handleFilters}/>
        { (filters.favorite || filters.forSale || filters.owned) && <CardListH items={user !== null && user.identities && user.identities.tokens ? user.identities.tokens : []}/>}
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
  }
})

export default Account;
