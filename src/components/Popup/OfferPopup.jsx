import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import TextField from '@material-ui/core/TextField';

const offerPopup = (props) => {

    return (
        <div className={css(styles.popcontainer)}>
            <div className={css(styles.div1)}>
            <h4 className={css(styles.text)}>Make an offer</h4>
          </div>
          <form className={css(styles.div2)}>
                <div>
                    <h3>Quantity</h3>
                    <input type='text'  name='' placeholder='0.0' className={css(styles.input)} />
                </div>
                <div>
                    <h3>Price per item</h3>
                    <div className={css(styles.price)}>
                        <select  name='crypto' className={css(styles.priceselect)}>
                            <option  value='WETH' >  WETH</option>
                            <option value='BTC'> BTC </option>
                            
                        </select>
                        <input type='text'  name='Amount' placeholder='Amount' className={css(styles.priceinput)}/>
                        <label className={css(styles.pricelabel)} for=''><span className={css(styles.labelspan)}>$0.00</span></label>
                        
                    </div>
                </div>
                <div>
                    <h3>Offer Expiration</h3>
                    <div className={css(styles.price)}>
                        
                        <select  name='7days' className={css(styles.dateselect)}>
                        <option value='15days'>15days</option>
                        <option value='30days'>30days</option>
                        <option value='2months'>2months</option>
                        </select>
                        <TextField 
                            id="time"
                            type="time"
                            defaultValue="07:30"
                            className={css(styles.TextField)}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        />
                    
                    </div>
                </div>
            </form>
          
          <div className={css(styles.div5)}>
          <label class='container'>
            <span className={css(styles.terms)}>By checking this box, I agree to Crypto's</span> <span className={css(styles.terms2)}>Terms of Service</span>
            <input type='checkbox' />
            <span class='checkmark'></span>
          </label>
          </div>
          <div className={css(styles.div6)}>
            <button className={css(styles.button1)} disabled>Checkout</button>
            <button className={css(styles.button2)}>Add Funds</button>
          </div>
        </div>
    )
}

const styles = StyleSheet.create({
    
    
    
    popcontainer:{
      width:'900px',
      height:'auto',
      backgroundColor:'white',
      borderRadius:'10px',
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center'
    },
    
    div1:{
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      textAlign:'center',
      width:'100%',
      height:'80px',
      borderBottom:'solid 1px grey',
    },
    text:{
      fontSize:'25px'
    },
    
    div2:{
      paddingTop:'10px',
      width:'90%',
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
    },
    input:{
        width:'100%',
        height:'40px',
        borderRadius: '5px',
        border:'1px grey solid',
        
        ':before':{
            border:' 1px solid red',
        },
        ':hover':{
            boxShadow: '2px 5px 12.09px 0.91px rgb(0 0 0 / 10%)',
            border:'none'
        },
        ':focus':{
            outline:'none',
            
        },
        ':after':{
            border:'none'
        }
        
    },
    price:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'40px',
        // border:'1px grey solid',
        borderRadius:'5px',
        textAlign:'center'
    },
    priceselect:{
        height:'100%',
        width:'21%',
        fontWeight:'bold',
        borderLeft:'1px grey solid',
        borderRight:'1px grey solid',
        borderTop: '1px grey solid',
        borderBottom: '1px grey solid',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
        ':focus' : {
            outline: 'none'
        },
        backgroundColor:'white',
        cursor:'pointer',
    },
    pricelabel:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:'94%',
        width:'10%',
        textAlign:'center',
        backgroundColor:'#f7f7f7', 
        borderTop: '1px grey solid',
        borderBottom: '1px grey solid',
        borderRight:'1px grey solid',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
    },
    labelspan:{
        textAlign:'center',
    },
    priceinput:{
        height:'90%',
        width:'70%',
        border: 'none',
        borderTop: '1px grey solid',
        borderBottom: '1px grey solid',
        paddingLeft: '10px',
        
        
        
        ':before':{
            border:' 1px solid red',
        },
        ':focus':{
            outline:'none',
            border: 'none',
            boxShadow: '2px 5px 12.09px 0.91px rgb(0 0 0 / 10%)',

            
        },
        ':after':{
            border:'none'
        }
    },
    TextField:{
        outline:'none',
        marginLeft: '10px',
        marginRight: '1px',
        width: '50%',
        /* borderTop:'1px grey solid',
        borderLeft:'1px grey solid',
        borderRight:'1px grey solid',
        borderRadius: '5px', */
        height:'100%'
    },

    dateselect:{
        height:'100%',
        width:'21%',
        fontWeight:'bold',
        border:'1px grey solid',
        
        borderRadius: '5px',
        ':focus' : {
            outline: 'none'
        },
        backgroundColor:'white',
        cursor:'pointer',
        
    },
    
    div5:{
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
      marginTop:'20px',
      marginBottom:'20px',
      borderBottom:'grey 1px solid',
      width:'90%',
      height:'80px'
      
    },
    terms:{
      color:'grey',
      fontSize:'15px'
    },
    terms2:{
      color:'rgb(28, 157, 230)',
      fontSize:'15px'
    },
    button1:{
      backgroundColor:'rgb(28, 157, 230)',
      border:'none',
      color: 'white',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      cursor: 'pointer',
      borderRadius: '4px',
    },
    button2:{
      backgroundColor:'white',
      border:'1px solid rgb(28, 157, 230)',
      color: 'rgb(28, 157, 230)',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      cursor: 'pointer',
      borderRadius: '4px',
    }
    
    
  })

export default offerPopup