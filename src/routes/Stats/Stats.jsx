import React, { useState } from 'react';
import {StyleSheet, css} from 'aphrodite'
import Tables from '../../components/Table/Table';
import datas from '../../components/Table/MOCK_DATA.json'
import Drops from './Drops'

const Stats = () => {
  const [filters, setFilters] = useState({
    category: '',
    blockchains: '',
    date:''
  })
  const handleFilters = (filters) => setFilters(filters)
  //const columns = datas[0] && Object.keys(datas[0])
  return (

    <div className={css(styles.mainContainer)}>
      <div className={css(styles.top)}>
        <p className={css(styles.topp)}> Top NFTs</p>
        <p className={css(styles.toop)}>The top NFTs on OpenSea, ranked by volume, floor price and other statistics.</p>
        
        <Drops handleFilters = {handleFilters}/>
      </div>

        { Object.keys(datas).length === 0 ? (
          <p>no items</p>
        ):(
          <table className={css(styles.tb)}>
          <thead >
              <tr >
                <th className={css(styles.tt)}>Id</th>
                <th className={css(styles.tt)}>Collection</th>
                <th className={css(styles.tt)}>Volume</th>
                <th className={css(styles.tt)}>24h%</th>
                <th className={css(styles.tt)}>7d%</th>
                <th className={css(styles.tt)}>Floor Price</th>
                <th className={css(styles.tt)}>Owners</th>
                <th className={css(styles.tt)}>Assets</th>
                {/*datas[0] && columns.map(heading => <th>{heading}</th>)*/}
                  </tr>
          </thead>
            <Tables filters = {filters}/>
          </table>
        )}
    </div>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: '1rem',
  },
  tb:{
    
    maxHeight: '300px',
    overflowY: 'auto',
    width:'90%',
    textAlign:'center',
    margin:'auto',
    padding:'auto'
  },
  tt:{
   
    height: '80px'
    
  },
  top:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
  },
  topp:{
      color:'black',
      fontSize:'40px',
      marginBottom:'0'
  },
  toop:{
    color:'grey',
    marginTop:'0'
  }
})

export default Stats;