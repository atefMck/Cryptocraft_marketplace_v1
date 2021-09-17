import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {StyleSheet, css} from 'aphrodite'

import CardListH from '../../components/Cards/CardListH';
import Filter from '../../components/Filter/Filter';
import ListingCard from '../../components/Cards/ListingCard'

const Market = () => {
  const [tokens, setTokens] = useState([])
  const [sorting, setSorting] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    sorting: '',
    original: true,
    listing: false,
    buy: true,
    auction: false
  })
  const handleFilters = (filters) => setFilters(filters)
  
  useEffect(() => {
    axios.get('http://localhost:3005/listings').then(res=> {
      setTokens(res.data)
    })
    
  }, []);

  useEffect(() => {
    let sortedItems = [...tokens]
    if (sorting !== '') {
      sortedItems = [...tokens.sort((firstItem, secondItem) => {
        if (sorting === 'price') return (firstItem.price < secondItem.price ? 1 : -1)
        if (sorting === 'views') return (firstItem.views < secondItem.views ? 1 : -1)
        if (sorting === 'likes') return (firstItem.likes < secondItem.likes ? 1 : -1)
        return true
      })]
      setTokens(sortedItems);
    }
  }, [sorting]);
  
  return (
    <div className={css(styles.mainContainer)}>
    <Filter handleFilters={handleFilters} setSorting={setSorting} listingCount={tokens.length}/>
    <CardListH tokens={tokens} Card={ListingCard}/>
    </div>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      padding: '1rem',
    }
  })
  
  export default Market;
  
  