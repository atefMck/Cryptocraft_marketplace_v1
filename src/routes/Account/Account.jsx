import React, {useState, useEffect} from 'react';
import { StyleSheet, css } from 'aphrodite'
import CardListH from '../../components/Cards/CardListH';
import ProfileNav from '../../components/Navigation/ProfileNav';
import Activity from '../../components/Activity/Activity';

const Account = ({username, profilePhoto, coverPhoto, address, assets, listings}) => {
  const [items, setItems] = useState(assets)
  const [filters, setFilters] = useState({
    forSale: false,
    owned: false,
    favorite: false,
    activity: true
  })
  
  const handleFilters = (filters) => setFilters(filters);

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.coverPhoto)} style={{backgroundImage: `url(${coverPhoto})`,}}></div>
      <div className={css(styles.profilePhoto)} style={{backgroundImage: `url(${profilePhoto})`,}}></div>
      <h2 style={{marginBottom: '0px'}}>{username}</h2>
      <p>{address}</p>
      <div className={css(styles.browse)}>
        <ProfileNav handleFilters={handleFilters}/>
        { (filters.favorite || filters.forSale || filters.owned) && <CardListH items={items}/>}
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
