import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

import Popup from '../../components/Popup/Popup'


const Token = (props) => {
  const {tokenId} = useParams()
  const [token, setToken] = useState({});
  const [listings, setListings] = useState([]);
  const [offerPopup, setOfferPopup] = useState(false);
  const [buyPopup, setBuyPopup] = useState(true);
  const history = useHistory()

  const mainListing = listings[0]

  const redirectUser = (username) => {
    history.push(`/user/${username}`)
  }

  useEffect(() => {
    axios.get(`http://localhost:3005/token/${tokenId}`).then(resToken => {
      axios.get(`http://localhost:3005/listings/token/${tokenId}`).then(resListings => {
        const sortedListings = [...resListings.data.sort((a, b) => {return a.price > b.price ? 1 : -1})]
        setListings(sortedListings)
      })
      setToken(resToken.data)
    })
  }, [])

  return (
    <div className={css(styles.container)}>

      {(offerPopup || buyPopup) && <Popup setBuyPopup={setBuyPopup} buyPopup={buyPopup} setOfferPopup={setOfferPopup} offerPopup={offerPopup} token={token} listing={listings[0]}/>}

      <div style={{width: '40%'}}>
        <div className={css(styles.tokenImageContainer, styles.flexContainer)}>
          <div className={css(styles.flexRow)} style={{justifyContent: 'flex-end'}}>
            <FontAwesomeIcon icon={faEye} className={css(styles.textSmall)} />
            <p className={css(styles.textSmall)} >&nbsp;{token.views}</p>&nbsp;&nbsp;
            <FontAwesomeIcon icon={faHeart} className={css(styles.textSmall)} />
            <p className={css(styles.textSmall)} >&nbsp;{token.likes}</p>
          </div>
          <img src={token.metadata !== undefined ? token.metadata.image : token.icon} alt="" className={css(styles.tokenImage)}/>
        </div>
        <div className={css(styles.tableContainer)}>
          <h2>Description</h2>
          <p>{mainListing && mainListing.description}</p>
        </div>
      </div>
      
      <div style={{width: '50%'}}>
        <div className={css(styles.infoContainer)}>
          <h1>{token.name}</h1>
          <p>Seller: {(listings !== undefined && listings[0] !== undefined) ? <a onClick={() => redirectUser(listings[0].seller)}>{listings[0].seller}</a> : ''}</p>
          {listings !== undefined && listings[0] !== undefined ? (
            <div>
              <p>Cheapest price</p>
              <p><FontAwesomeIcon icon={faEthereum} />{listings[0].price} (${listings[0].price * 3200})</p>
            </div>
            ) :
             ''
          }
          <div>
            <button className={css(styles.button)} onClick={() => setBuyPopup(true)}>Buy Now</button>
            <button className={css(styles.button)} style={{marginLeft: '10px'}} onClick={() => setOfferPopup(true)}>Make Offer</button>
          </div>
        </div>

        <div className={css(styles.tableContainer)}>
          <h2>Listings</h2>
          <table style={{width: '100%'}}>
            <thead>
              <tr style={{textAlign: 'left'}}>
                <th>Price</th>
                <th>USD Price</th>
                <th>Expiration</th>
                <th>From</th>
              </tr>
            </thead>
            <tbody>
            {listings.length > 0 ? listings.map(listing => (
              <tr key={listing._id}>
                <td>{listing.price} ETH</td>
                <td>${listing.price * 3200}</td>
                <td>--</td>
                <td><a onClick={() => redirectUser(listing.seller)}>{listing.seller}</a></td>
                <td><button className={css(styles.listingBuy)}>Buy</button></td>
              </tr>
            )) : <tr><th colSpan="4"><h3>No listings yet</h3></th></tr>}
            </tbody>
          </table>
          
        </div>
        <div className={css(styles.tableContainer)}>
          <h2>Offers</h2>
          <table style={{width: '100%'}}>
            <thead>
              <tr style={{textAlign: 'left'}}>
                <th>Price</th>
                <th>USD Price</th>
                <th>Expiration</th>
                <th>From</th>
              </tr>
            </thead>
            <tbody>
            {(listings[0] && listings[0].offers !== undefined && listings[0].offers.length > 0) ? listings[0].offers.map(offer => (
              <tr key={offer && offer._id}>
                <td>{offer && offer.price} ETH</td>
                <td>${offer && offer.price * 3200}</td>
                <td>--</td>
                <td><a onClick={() => redirectUser(offer && offer.from && offer.from.username)}>{offer && offer.from && offer.from.username}</a></td>
                <td><button className={css(styles.listingBuy)}>Buy</button></td>
              </tr>
            )): <tr><th colSpan="4"><h3>No offers yet</h3></th></tr>}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: '3rem 18%'
  },
  flexContainer: {
    marginRight: '30px',
    marginBottom: '30px',
  },
  tokenImageContainer: {
    width: '95%',
    border: '1px solid rgba(0, 0, 0, .1)',
    borderRadius: '15px'
  },
  tokenImage: {
   width: '100%' 
  },
  textSmall: {
    opacity: '.5',
    fontSize: '.8rem',
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    height: '20px',
    padding: '.9rem 1rem'
  },
  infoContainer: {
    width: '50%'
  },
  button: {
    backgroundColor: 'rgba(109, 169, 29, .7)',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '.8rem 1rem',
    transition: '.3s',
    ':hover': {
      transform: 'scale(1.05)'
    }
  },
  tableContainer: {
    padding: '0rem 1.5rem',
    paddingBottom: '1rem',
    marginTop: '50px',
    width: '100%',
    border: '1px solid rgba(0, 0, 0, .1)',
    borderRadius: '15px'

  },
  listingBuy: {
    backgroundColor: 'rgba(109, 169, 29, .7)',
    color: 'white',
    fontWeight: 'bold',
    padding: '.2rem .5rem',
    transition: '.3s',
    ':hover': {
      transform: 'scale(1.05)'
    }
  }
})

export default Token;
