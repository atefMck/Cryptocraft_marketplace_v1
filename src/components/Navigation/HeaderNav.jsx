import React from 'react';
import { useHistory } from 'react-router-dom';
import MinecraftLogo from '../../assets/img/logo.png';
import SearchBar from '../Misc/SearchBar';
import {StyleSheet, css} from 'aphrodite'


const HeaderNav = () => {
  const history = useHistory();
  return (
    <div className={css(styles.headerNav)}>
      <img src={MinecraftLogo} className={css(styles.logoStyle)} alt='' />
      <SearchBar />
      <ul className={css(styles.navLink)}>
        <li onClick={() => history.push('/')}>Home</li>
        <li onClick={() => history.push('/marketplace')}>Marketplace</li>
        <li>Stats</li>
        <li>Contact Us</li>
      </ul>
      <ul className={css(styles.navLink)}>
        <li>Profile</li>
        <li>Wallet</li>
      </ul>
    </div>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    width: '135px',
    height: '40px',
  },
  headerNav: {
    display: 'flex',
    backgroundColor: 'white',
    height: '60px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '.2rem 1rem',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, .3)',
    ':nth-child(1n) > ul': {
      display: 'flex',
      listStyle: 'none',
      justifyContent: 'space-between',
      width: '130px',
      fontWeight: '600',
    },
    ':nth-child(1n) > ul:first-of-type': {
      width: '350px'
    },
  },
  navLink: {
    ':nth-child(1n) > li': {
      cursor: 'pointer',
      transition: '.3s'
    },
    ':nth-child(1n) > li:hover': {
      transform: 'scale(1.1)'
    },
  }
})

export default HeaderNav;
