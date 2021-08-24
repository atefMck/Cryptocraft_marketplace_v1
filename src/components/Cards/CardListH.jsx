import React from 'react'
import CardH from './CardH'
import {StyleSheet, css} from 'aphrodite'

const nftPH = {
  name: 'Axolyte Cute Shiba',
  price: 0.012,
  seller: 'JhonWick',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  views: 234,
  likes: 38,
}

const CardListH = (props) => {
  const {filters} = props
  return (
    <div className={css(styles.horizontalList)}>
      <CardH {...nftPH}/>
      <CardH {...nftPH}/>
      <CardH {...nftPH}/>
      <CardH {...nftPH}/>
      <CardH {...nftPH}/>
      <CardH {...nftPH}/>
      <CardH {...nftPH}/>
      <CardH {...nftPH}/>
      <CardH {...nftPH}/>
      <CardH {...nftPH}/>
    </div>
  )
}

const styles = StyleSheet.create({
  horizontalList: {
    display: 'flex',
    margin: '50px 0px',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})

export default CardListH;
