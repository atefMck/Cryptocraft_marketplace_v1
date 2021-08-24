import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Misc.css';

const SearchBar = () => {

  return (
    <div className='SearchBar'>
      <input type='text' name='search' id='search' />
      <FontAwesomeIcon icon={faSearch} id='SearchIcon' />
    </div>
  );
}

export default SearchBar;
