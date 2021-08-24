import React, { useState, useEffect } from 'react';
import CardListH from '../../components/Cards/CardListH';
import Filter from '../../components/Filter/Filter';
import {StyleSheet, css} from 'aphrodite'
import assets from '../../placeholders/placeholders'

const Market = () => {
  const [items, setItems] = useState([])
  const [filters, setFilters] = useState({
    category: '',
    sort: '',
    original: true,
    listing: false,
    buy: true,
    auction: false
  })
  const handleFilters = (filters) => setFilters(filters)
  
  useEffect(() => {
    const filteredItems = assets.filter(asset => {
      let verify = true;
      if (filters.category !== '') verify = verify && (asset.category === filters.category);
      if (filters.original) verify = verify && (asset.listing.type === 'original');
      if (filters.listing) verify = verify && (asset.listing.type === 'listing');
      if (filters.buy) verify = verify && (asset.listing.sell === 'buyout');
      if (filters.auction) verify = verify && (asset.listing.sell === 'auction');
      return verify;
    })
    if (filters.sort !== '') {
      filteredItems.sort((firstItem, secondItem) => {
        if (filters.sort === 'price') return (firstItem.price < secondItem.price ? 1 : -1)
        if (filters.sort === 'views') return (firstItem.views < secondItem.views ? 1 : -1)
        if (filters.sort === 'likes') return (firstItem.likes < secondItem.likes ? 1 : -1)
      })
    }
    setItems(filteredItems);
  }, [filters]);
  
  return (
    <div className={css(styles.mainContainer)}>
    <Filter handleFilters={handleFilters}/>
    <CardListH items={items}/>
    </div>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      padding: '1rem',
    }
  })
  
  export default Market;
  
  