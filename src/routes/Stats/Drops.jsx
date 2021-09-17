import React, {useState, useEffect} from 'react';
import {StyleSheet, css} from 'aphrodite'
import Select from 'react-select'

const categoryOptions = [
    { value: '', label: 'All Categories' },
    { value: 'New', label: 'New' },
    { value: 'Art', label: 'Art' },
    { value: 'Music', label: 'Music' },
    { value: 'Domain Names', label: 'Domain Names' },
    { value: 'Virtual Worlds', label: 'Virtual Worlds' },
    { value: 'Trading Cards', label: 'Trading Cards' },
    { value: 'Collectibles', label: 'Collectibles' },
    { value: 'Sports', label: 'Sports' },
    { value: 'BMW', label: 'BMW' },
  ]
  const hours = [
    { value: '24', label: 'Last 24 hours' },
    { value: '7', label: 'Last 7 days' },
    { value: '30', label: 'Last 30 days' },
    { value: '', label: 'All time' },
  ]
  const blockchainss = [
    { value: 'ethereum', label: 'ethereum' },
    { value: 'polygon', label: 'polygon' },
    { value: 'klaytn', label: 'klaytn' },
    { value: '', label: 'all chains' },
  ]
  
const drops = (props) =>{
    const [category, setCategory] = useState('')  
    const [date, setdate] = useState('') 
    const [blockchains, setblockchains] = useState('')
    const { handleFilters } = props; 

    const handleCategory = (option) => {
        setCategory(option.value);
      }
    
      const handleDate = (option) => {
        setdate(option.value);
      }
      const handleblock = (option) => {
        setblockchains(option.value);
      }
      useEffect(() => {
        const filters = {
          blockchains,
          category,
          date
        }
        handleFilters(filters);
        
      }, [blockchains, category, date])
    return (
        <div className={css(styles.big)}>
            
        <div className={css(styles.checkBox)}>
          <h5>Date</h5>
          <Select options={hours} name='date' styles={customStyles} onChange={handleDate}/>
        </div>
         <div className={css(styles.checkBox)} styles={customStyles}>
          <h5>Category</h5>
          <Select options={categoryOptions} name='category' styles={customStyles} onChange={handleCategory}/>
        </div>
        <div className={css(styles.checkBox)}>
          <h5>blockchains</h5>
          <Select name='blockchains' options={blockchainss} styles={customStyles} onChange={handleblock}/>
        </div> 
      </div>

    );


}
const customStyles = {
    container: (provided, state) => ({
      ...provided,
      //height:'200px',
      ':hover':{
        boxShadow: '1px 2px 4px #888, 1px -2px 4px #888'
    },
    
    }),
    option: (provided, state) => ({
      ...provided,
      width: '200px',
      borderTop:'1px solid lightgrey',
      height:'50px'
    }),
    groupHeading:() =>({
        height:'200px',
        width:'60px',
        color:'red'
        
    })
    
  }
const styles = StyleSheet.create({
    big:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        border: '20px black',
        width:'60%'
    },
    checkBox:{
        marginLeft:'30px',
        width:'20%'
    },
    sel:{
        border:'none',
        color:'red',
        
        
    }
})
export default drops