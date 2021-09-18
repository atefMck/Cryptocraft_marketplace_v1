import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies'

import { StyleSheet, css } from 'aphrodite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'

const CreatePanel = (props) => {
  const {hideCreatePanel, tokens, balances} = props
  const [tokenId, setToken] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [tokenIndexSelect, setTokenIndexSelect] = useState(false);
  const [tokenIndex, setTokenIndex] = useState('');
  const [selectIndexes, setSelectIndexes] = useState([])
  const history = useHistory();

  const selectToken = []
  tokens.forEach(token => {
    const option = {
      value: token.id,
      label: token.name
    }
    if (selectToken.filter(tokenOption => tokenOption.value === option.value).length === 0) {
      selectToken.push(option)      
    }
  })

  const handleToken = (option) => {
    setTokenIndexSelect(true)
    setTokenIndex('')
    setToken(option.value)
  };
  const handleTokenIndex = (option) => setTokenIndex(option.value)
  const handleDescription = (e) => setDescription(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault()
    const token = cookie.load('accessToken');
    const dbTokenId = tokens.filter(token => token.id === tokenId)[0]._id
    const data = {
      description,
      price,
      quantity: 1,
      tokenId: dbTokenId,
      tokenIndex
    }
    const options = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    axios.post('http://localhost:3005/listings/create', data, options).then(res => {
      const tokenId = res.data.tokenId
      history.push(`/token/${tokenId}`)
    }).catch(err => {
      console.log(err)
      hideCreatePanel()
    })
  }

  useEffect(() => {
    const options = []
    balances.filter(balance => (balance.tokenId === tokenId) && (balance.value > 0)).forEach(balance => options.push({value: balance.tokenIndex, label: balance.tokenIndex.replaceAll('0', '')}))
    setSelectIndexes([...options.sort()])
  }, [tokenId]);


  return (
    <div className={css(styles.container)} style={{backdropFilter: 'blur(8px)'}}>
      <div className={css(styles.createContainer)}>
        <FontAwesomeIcon className={css(styles.close)} icon={faTimes} onClick={hideCreatePanel}/>
        <h1 style={{textAlign: 'center'}}>Create listing</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt voluptatibus esse sint quaerat ad quam et quis iusto reiciendis, officiis natus quo totam nostrum fugit vitae. Quae, blanditiis modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem odio sequi dicta ipsum dignissimos qui, animi nihil aliquam ab earum consequatur voluptate maiores quisquam quas debitis modi natus quam nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel ratione beatae consequatur voluptate iusto atque quod, accusantium voluptatum, error tempore eaque voluptatibus praesentium debitis unde ab sequi vero molestiae?</p>
        <form className={css(styles.form)} onSubmit={handleSubmit}>
          <div className={css(styles.formRow)}>
            <label className={css(styles.label)}>Select Token:</label>
            <Select options={selectToken} styles={customStyles} name='token' onChange={handleToken} setValue={tokenId}/>
            { tokenIndexSelect && <label className={css(styles.label)} style={{marginLeft: '60px'}}>Select Index:</label>}
            { tokenIndexSelect && <Select options={selectIndexes} styles={customStyles} name='token' onChange={handleTokenIndex} setValue={tokenIndex}/>}
          </div>
          <div className={css(styles.formRow)}>                                            
            <label className={css(styles.label)}>Token description:</label>
            <textarea className={css(styles.input, styles.textarea)} style={{resize: 'none'}} name="description" cols="70" rows="8" value={description} onChange={handleDescription}></textarea>
          </div>
          <div className={css(styles.formRow)}>              
            <label className={css(styles.label)}>Price in ENJ:</label>
            <input className={css(styles.input)} type="text" value={price} onChange={handlePrice}/>
          </div>    
          <button className={css(styles.submit)}>Create</button>
        </form>  
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    background: 'rgba(0, 0, 0, 0.2)',
    top: '0',
    left: '0',
    zIndex: '200',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  createContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: '80%',
    zIndex: '400',
    position: 'relative',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    padding: '2rem'
  },
  close: {
    position: 'absolute',
    right: '16px',
    top: '16px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    transition: '.6s',
    ':hover': {
      transform: 'scale(1.2)',
      color: 'rgb(224,53,75)'
    }
  },
  form: {
    marginTop: '60px'
  },
  formRow: {
    display: 'flex',
    width: 'fit-content',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '40px'
  },
  label: {
    width: '200px',
    fontWeight: 'bold'
  },
  input: {
    width: '350px',
    marginBottom: '20px',
    border: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, .2)',
    transition: '.6s',
    ':focus': {
      outline: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, .7)',
    }
  },
  submit: {
    padding: '.7rem .9rem',
    backgroundColor: 'rgba(109, 169, 29, .7)',
    color: 'white',
    transition: '.3s',
    ':hover': {
      transform: 'scale(1.05)'
    }
  },
  textarea: {
    border: '1px solid rgba(0, 0, 0, .2)',
    ':focus': {
      border: '1px solid rgba(0, 0, 0, .7)',
    }
  }
})

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    
  }),
  container: (provided, state) => ({
    ...provided,
    width: '200px',
  }),
}

export default CreatePanel;
