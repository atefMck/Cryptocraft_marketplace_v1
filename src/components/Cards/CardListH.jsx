import React from 'react'
import {StyleSheet, css} from 'aphrodite'


const CardListH = (props) => {
  const { tokens, Card } = props
  const uniqueTokens = tokens.reduce((acc, current) => {
    const x = acc.find(item => item._id === current._id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  return (
    <div className={(tokens !== undefined && (tokens.length > 0)) ? css(styles.horizontalList) : css(styles.emptyList)}>
      { uniqueTokens !== undefined && (uniqueTokens.length > 0) ? uniqueTokens.map((token, index) => <Card key={`${token._id}_${index}`} token={token} />) : (<h1 className={css(styles.noItems)}>No tokens to display</h1>)}
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
