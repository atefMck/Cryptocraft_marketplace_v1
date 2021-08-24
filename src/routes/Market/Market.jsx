import React, { useState } from 'react';
import CardListH from '../../components/Cards/CardListH';
import Filter from '../../components/Filter/Filter';
import {StyleSheet, css} from 'aphrodite'

const Market = () => {
  const [filters, setFilters] = useState({
    category: '',
    sort: '',
    original: true,
    listing: false,
    buy: true,
    auction: false
  })
  const handleFilters = (filters) => setFilters(filters)
  return (
    <div className={css(styles.mainContainer)}>
        <Filter handleFilters={handleFilters}/>
        <CardListH filters={filters}/>
    </div>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: '1rem',
  }
})

export default Market;
