import React from 'react';
import Header from '../../components/Landings/Header/Header';
import Article from '../../components/Landings/Body/Articles/Article';
import TokensShowcase from '../../components/Landings/Body/TokensShowcase/TokensShowcase';

import {StyleSheet, css} from 'aphrodite';

const Landing = () => {
  return (
    <div >
    <Header/>
    <section className={css(styles.articles)}>
    <h1 className={css(styles.articlesTitle)}>Latest News</h1>
    <Article/>
    <Article flexStyle={true}/>
    <Article/>
    </section>
    <section className={css(styles.tokensShowcase)}>
    <h1 className={css(styles.articlesTitle)}>Recent Tokens</h1>
    <TokensShowcase />
    </section>
    </div>
    );
  }
  
const styles = StyleSheet.create({
  articles: {
    backgroundColor: 'rgba(54, 144, 235, .6)',
    padding: '120px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  articlesTitle: {
    fontSize: '2.7rem',
    fontStyle: 'italic',
    margin: '0px',
    color: 'white',
    fontWeight: 'bolder',
    borderTop: '2px solid white',
    borderBottom: '2px solid white'
  },
  tokensShowcase: {
    padding: '120px 0px',
    backgroundColor: 'rgb(0, 35, 92)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
})

  export default Landing;