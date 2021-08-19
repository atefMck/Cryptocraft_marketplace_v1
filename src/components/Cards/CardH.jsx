import React from 'react'
import CardPlaceholder from '../../assets/img/card-placeholder.png'
import './Cards.css'

const CardH = () => {
  return (
    <div className="CardH">
      <img src={CardPlaceholder} alt="Item Preview" />
      <div>
        <h3>NFT Item Placeholder</h3>
      </div>
    </div>
  )
}

export default CardH;
