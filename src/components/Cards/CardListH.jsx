import React from 'react'
import {StyleSheet, css} from 'aphrodite'


const CardListH = (props) => {
  const { tokens, Card } = props
  return (
    <div className={(tokens !== undefined && (tokens.length > 0)) ? css(styles.horizontalList) : css(styles.emptyList)}>
      { tokens !== undefined && (tokens.length > 0) ? tokens.map(token => <Card key={token._id} token={token} />) : (<h1 className={css(styles.noItems)}>No tokens to display</h1>)}
    </div>
  )
}

const styles = StyleSheet.create({
  horizontalList: {
    display: 'flex',
    margin: '50px 0px',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    borderTop: '1px solid rgba(0, 0, 0, .2)',
    minHeight: '300px'
  },
  emptyList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid rgba(0, 0, 0, .2)',
    minHeight: '300px'
  },
  noItems: {
    margin: 'auto'
  }
})

export default CardListH;
