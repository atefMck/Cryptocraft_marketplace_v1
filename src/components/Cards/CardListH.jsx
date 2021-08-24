import React from 'react'
import CardH from './CardH'
import {StyleSheet, css} from 'aphrodite'


const CardListH = (props) => {
  const { items } = props
  return (
    <div className={css(styles.horizontalList)}>
      {items.map(item => <CardH key={item.idx} {...item} />)}
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
