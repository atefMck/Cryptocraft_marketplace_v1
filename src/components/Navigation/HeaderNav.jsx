import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import MinecraftLogo from '../../assets/img/logo.png';
import './Navigation.css';


const LogoStyle = {
  width: '135px',
  height: '40px',
};

const HeaderNav = () => {
  return (
    <div className='HeaderNav'>
      <img src={MinecraftLogo} style={LogoStyle} alt='' />
      <div>
        <FontAwesomeIcon icon={faSearch} id='SearchIcon'/>
        <input type='text' name='search' id='search' />
      </div>
      <ul>
        <li>Marketplace</li>
        <li>Stats</li>
        <li>Resources</li>
        <li>Create</li>
      </ul>
      <ul>
        <li>Profile</li>
        <li>Wallet</li>
      </ul>
    </div>
  );
};

export default HeaderNav;
