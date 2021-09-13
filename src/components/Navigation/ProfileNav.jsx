import React, {useState,useEffect} from 'react';
import { StyleSheet, css } from 'aphrodite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const ProfileNav = (props) => {

  const [tabs, setTabs] = useState({
    forSale: true,
    owned: false,
    favorite: false,
    activity: false
  })
  const { handleFilters, isCurrentUser, showCreatePanel } = props

  const handleTabs = event => {
    const newTabs = tabs
    Object.keys(tabs).forEach(key => {
      newTabs[key] = event.target.name === key
    })
    setTabs({...newTabs});
  }

  useEffect(() => {
    handleFilters(tabs)
  }, [tabs]);

  return (
    <div className={css(styles.navBar)}>
      <button name='forSale' onClick={(e) => handleTabs(e)} className={tabs.forSale ? css(styles.tab, styles.tabSelected) : css(styles.tab)}>For Sale</button>
      <button name='owned' onClick={(e) => handleTabs(e)} className={tabs.owned ? css(styles.tab, styles.tabSelected) : css(styles.tab)}>Owned</button>
      <button name='favorite' onClick={(e) => handleTabs(e)} className={tabs.favorite ? css(styles.tab, styles.tabSelected) : css(styles.tab)}>Favorited</button>
      <button name='activity' onClick={(e) => handleTabs(e)} className={tabs.activity ? css(styles.tab, styles.tabSelected) : css(styles.tab)}>Activity</button>
      { isCurrentUser && <button name='activity'className={css(styles.createButton)} onClick={showCreatePanel}> <FontAwesomeIcon icon={faPlus} style={{marginRight: '4px'}}/>Create</button>}
    </div>
  );
}

const styles = StyleSheet.create({
  navBar: {
    marginTop: '40px',
    marginBottom: '20px',
    padding: '0 2rem',
    position: 'relative'
  },
  tab: {
    marginLeft: '50px',
    fontSize: '1.2rem',
    paddingBottom: '10px',
    borderRadius: '0px',
    transition: '.2s',
    ':first-of-type': {
      marginLeft: '0',
    },
    ':after': {
      content: '""',
      display: 'block',
      marginTop: '5px',
      width: '0',
      height: '2px',
      background: 'rgb(28,157,230)',
      transition: 'width .3s',
    }
  },
  tabSelected: {
    outlineBottom: '4px solid rgb(28,157,230)',
    ':after': {
      width: '100%'
    }
  },
  createButton: {
    position: 'absolute',
    bottom: '16px',
    right: '16px',
    padding: '.7rem .9rem',
    backgroundColor: 'rgba(109, 169, 29, .7)',
    color: 'white',
    transition: '.3s',
    ':hover': {
      transform: 'scale(1.05)'
    }
  }
})

export default ProfileNav;
