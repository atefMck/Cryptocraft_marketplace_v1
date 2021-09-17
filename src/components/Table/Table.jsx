import React from 'react';
import {css, StyleSheet} from 'aphrodite'
import datas from './MOCK_DATA.json'

const Tables = (props) => {
  const {filters}= props
  //const columns = datas[0] && Object.keys(datas[0])
  console.log(filters)
  
  return (
    <tbody>
    {
      datas.filter(data=>{
        
        const categ = filters.category === data.categories ||  filters.category === ''
        const date = filters.date === data.date ||  filters.date === ''
        const blockchains = filters.blockchains === data.chaines ||  filters.blockchains === ''
        console.log(date, blockchains, categ)
        return(categ && date && blockchains)
      })
      .map((post, id)=>(
        <tr key={id} className={css(style.try)} >
        
        <td className={css(style.tt)}> {post.id}</td>    
        <td className={css(style.tt, style.tts)}>
        <img className={css(style.mg)} src= {post.img} alt="post"/> 
        {post.name}
        </td>   
        <td className={css(style.tt)}>{post.volume}</td>
        <td className={css(style.tt)}>{post.hours}%</td>
        <td className={css(style.tt)}>{post.days}%</td>
        <td className={css(style.tt)}>{post.price}</td>
        <td className={css(style.tt)}>{post.owners}K</td>
        <td className={css(style.tt)}>{post.assets}K</td>
        </tr>
        )
        )
      }
      </tbody> 
      )
    }
    
const style = StyleSheet.create({
  try:{
    
    height:'80px',
    ':hover':{
      boxShadow: '1px 2px 4px #888, 1px -2px 4px #888',
    },
    '::after':{
      display: 'block',
      content: '',
      width: '100%',
      height: '10px',
      backgroundColor: 'black'
    }
  },
  mg:{
    height:'50px',
    width:'50px',
    borderRadius: '50%',
    marginRight:'20px'
  },
  tt:{
    
    height: '80px'
    
  },
  tts:{
    width:'50%',
    display:'flex',
    alignItems:'center',
    margin:'auto'
  },
  ttd:{
    height:'1px',
    width:'100%',
    borderBottom:'1px solid',
  }
  
})

export default Tables