import React, {useState, useEffect} from 'react';
import {StyleSheet, css} from 'aphrodite'
import Select from 'react-select'

const categoryOptions = [
  { value: '', label: 'All' },
  { value: 'land', label: 'Land' },
  { value: 'weapons', label: 'Weapons' },
  { value: 'pets', label: 'Pets' },
  { value: 'accesories', label: 'Accesories' },
]

const sortOptions = [
  { value: '', label: 'Nothing' },
  { value: 'price', label: 'Price' },
  { value: 'views', label: 'Most Viewed' },
  { value: 'likes', label: 'Most Liked' },
]


const Filter = (props) => {
  const [buy, setBuy] = useState(true)  
  const [original, setOriginal] = useState(true)
  const [auction, setAuction] = useState(false)
  const [listing, setListing] = useState(false)
  const [category, setCategory] = useState('')  
  const [sort, setSort] = useState('')  
  const { handleFilters } = props;

  const handleCategory = (option) => {
    setCategory(option.value);
  }

  const handleSort = (option) => {
    setSort(option.value);
  }

  useEffect(() => {
    const filters = {
      buy,
      original,
      auction,
      listing,
      category,
      sort
    }
    handleFilters(filters);
  }, [buy, original, auction, listing, category, sort])

  return (
    <div className={css(styles.filterContianer)}>
      <div className={css(styles.checkBox)}>
        <div>
          <h5>Category</h5>
          <Select options={categoryOptions} styles={customStyles} onChange={handleCategory} name='category' setValue={category}/>
        </div>
        <div>
          <h5>Sort By</h5>
          <Select options={sortOptions} styles={customStyles} onChange={handleSort} name='sort' setValue={sort}/>
        </div>
      </div>
      <h3>58,378 listings</h3>
      <div>
        <h5>Status</h5>
        <button className={!original ? css(styles.checkButton) : css(styles.checkButton, styles.checkedButton)} 
          onClick={() => { setOriginal(!original); setListing(false)}}>
        Original</button>
        <button className={!listing ? css(styles.checkButton) : css(styles.checkButton, styles.checkedButton)} 
          onClick={() => {setListing(!listing); setOriginal(false)}}>
        Listings</button>
        <button className={!buy ? css(styles.checkButton) : css(styles.checkButton, styles.checkedButton)} 
          onClick={() => { setBuy(!buy); setAuction(false)}}>
        Buy Now</button>
        <button className={!auction ? css(styles.checkButton) : css(styles.checkButton, styles.checkedButton)} 
          onClick={() => { setAuction(!auction); setBuy(false)}}>
        On Auction</button>
      </div>
    </div>
  );
}

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    
  }),
  container: (provided, state) => ({
    ...provided,
    width: '200px',
  }),
}

const styles = StyleSheet.create({
  filterContianer: {
    padding: '0 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  checkBox: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '25%'
  },
  checkButton: {
    width: '130px',
    height: '40px',
    border: '1px solid rgba(0, 0, 0, .3)',
    color: 'rgba(0, 0, 0, .3)',
    marginLeft: '10px',
    transition: '.3s',
    ':nth-child(2)': {
      marginLeft: 0
    }
  },
  checkedButton: {
    border: '2px solid rgb(28,157,230)',
    fontWeight: 'bold',
    color: 'rgb(28,157,230)'
  }
})

export default Filter;
