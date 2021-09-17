import React from 'react';
import TokenCard from '../../../../components/Cards/TokenCard'
import TokenCardLarge from '../../../../components/Cards/TokenCardLarge'
import { StyleSheet, css } from 'aphrodite'

const tokenPh = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  icon: 'https://kovan.cloud.enjin.io/img/default-item-icon.png',
  name: 'Nissan sivic Gold',
  creatorAddress: '0xeDeD14718401885a8Fd774B3382513579535215f',
  reserve: 0,
  circulatingSupply: 5,
  views: 15,
  likes: 8,
  _id: '3880000000000997',
  metadata: {
    name: "Nissan sivic Gold",
    image: "https://cdn.enjin.io/cloud-kovan/images/tokens/4594GuOx2fOdkcQfZMmxrG0IJd3EW6PDlLveib8P.jpg"
  }
}

const tokensLarge = [tokenPh, tokenPh]
const tokens = [tokenPh, tokenPh, tokenPh]


const TokensShowcase = () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.flexRow)}>
        {tokensLarge.map(token => (<TokenCardLarge key={token._id} token={token} dark={true}></TokenCardLarge>))}
      </div>
      <div className={css(styles.flexRow)}>
        {tokens.map(token => (<TokenCard key={token._id} token={token} dark={true}></TokenCard>))}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
})

export default TokensShowcase;
