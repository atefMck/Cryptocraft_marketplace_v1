import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

const Activity = () => {
  return (
    <div className={css(styles.container)}>
      <table className={css(styles.table)}>
        <thead>
          <tr>
            <th>Event</th>
            <th>Item</th>
            <th>Unit Price</th>
            <th>Quanitity</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><FontAwesomeIcon icon={faStore} />List</td>
            <td style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}><img 
              src="https://lh3.googleusercontent.com/aR2uRLH_bL3HTU1iOd2au-uwfUWlZdILFivJSBe8VW_NfGor4LTqUNP4i6dIIFjSzT80BvhLc6VYCGZ7bQJnG8GDbPiiQyFIQoei=s0" 
              alt="" className={css(styles.img)}/><p>Rickstro Bull 4025</p></td>
            <td><FontAwesomeIcon icon={faEthereum} style={{marginRight: '10px'}}/>0.099</td>
            <td>1</td>
            <td style={{color: 'rgb(28,157,230)'}}>SpaceBrain</td>
            <td style={{color: 'rgb(28,157,230)'}}>BouncyOnion44</td>
            <td>an hour ago<FontAwesomeIcon icon={faExternalLinkAlt} style={{marginLeft: '10px'}}/></td>
          </tr>

          <tr>
            <td><FontAwesomeIcon icon={faStore} />List</td>
            <td style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}><img 
              src="https://lh3.googleusercontent.com/aR2uRLH_bL3HTU1iOd2au-uwfUWlZdILFivJSBe8VW_NfGor4LTqUNP4i6dIIFjSzT80BvhLc6VYCGZ7bQJnG8GDbPiiQyFIQoei=s0" 
              alt="" className={css(styles.img)}/><p>Rickstro Bull 4025</p></td>
            <td><FontAwesomeIcon icon={faEthereum} style={{marginRight: '10px'}}/>0.099</td>
            <td>1</td>
            <td style={{color: 'rgb(28,157,230)'}}>SpaceBrain</td>
            <td style={{color: 'rgb(28,157,230)'}}>BouncyOnion44</td>
            <td>an hour ago<FontAwesomeIcon icon={faExternalLinkAlt} style={{marginLeft: '10px'}}/></td>
          </tr>

          <tr>
            <td><FontAwesomeIcon icon={faStore} />List</td>
            <td style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}><img 
              src="https://lh3.googleusercontent.com/aR2uRLH_bL3HTU1iOd2au-uwfUWlZdILFivJSBe8VW_NfGor4LTqUNP4i6dIIFjSzT80BvhLc6VYCGZ7bQJnG8GDbPiiQyFIQoei=s0" 
              alt="" className={css(styles.img)}/><p>Rickstro Bull 4025</p></td>
            <td><FontAwesomeIcon icon={faEthereum} style={{marginRight: '10px'}}/>0.099</td>
            <td>1</td>
            <td style={{color: 'rgb(28,157,230)'}}>SpaceBrain</td>
            <td style={{color: 'rgb(28,157,230)'}}>BouncyOnion44</td>
            <td>an hour ago<FontAwesomeIcon icon={faExternalLinkAlt} style={{marginLeft: '10px'}}/></td>
          </tr>

          <tr>
            <td><FontAwesomeIcon icon={faStore} />List</td>
            <td style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}><img 
              src="https://lh3.googleusercontent.com/aR2uRLH_bL3HTU1iOd2au-uwfUWlZdILFivJSBe8VW_NfGor4LTqUNP4i6dIIFjSzT80BvhLc6VYCGZ7bQJnG8GDbPiiQyFIQoei=s0" 
              alt="" className={css(styles.img)}/><p>Rickstro Bull 4025</p></td>
            <td><FontAwesomeIcon icon={faEthereum} style={{marginRight: '10px'}}/>0.099</td>
            <td>1</td>
            <td style={{color: 'rgb(28,157,230)'}}>SpaceBrain</td>
            <td style={{color: 'rgb(28,157,230)'}}>BouncyOnion44</td>
            <td>an hour ago<FontAwesomeIcon icon={faExternalLinkAlt} style={{marginLeft: '10px'}}/></td>
          </tr>

          <tr>
            <td><FontAwesomeIcon icon={faStore} />List</td>
            <td style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}><img 
              src="https://lh3.googleusercontent.com/aR2uRLH_bL3HTU1iOd2au-uwfUWlZdILFivJSBe8VW_NfGor4LTqUNP4i6dIIFjSzT80BvhLc6VYCGZ7bQJnG8GDbPiiQyFIQoei=s0" 
              alt="" className={css(styles.img)}/><p>Rickstro Bull 4025</p></td>
            <td><FontAwesomeIcon icon={faEthereum} style={{marginRight: '10px'}}/>0.099</td>
            <td>1</td>
            <td style={{color: 'rgb(28,157,230)'}}>SpaceBrain</td>
            <td style={{color: 'rgb(28,157,230)'}}>BouncyOnion44</td>
            <td>an hour ago<FontAwesomeIcon icon={faExternalLinkAlt} style={{marginLeft: '10px'}}/></td>
          </tr>

          <tr>
            <td><FontAwesomeIcon icon={faStore} />List</td>
            <td style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}><img 
              src="https://lh3.googleusercontent.com/aR2uRLH_bL3HTU1iOd2au-uwfUWlZdILFivJSBe8VW_NfGor4LTqUNP4i6dIIFjSzT80BvhLc6VYCGZ7bQJnG8GDbPiiQyFIQoei=s0" 
              alt="" className={css(styles.img)}/><p>Rickstro Bull 4025</p></td>
            <td><FontAwesomeIcon icon={faEthereum} style={{marginRight: '10px'}}/>0.099</td>
            <td>1</td>
            <td style={{color: 'rgb(28,157,230)'}}>SpaceBrain</td>
            <td style={{color: 'rgb(28,157,230)'}}>BouncyOnion44</td>
            <td>an hour ago<FontAwesomeIcon icon={faExternalLinkAlt} style={{marginLeft: '10px'}}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '80px 37px'
  },
  table: {
    width: '100%',
    textAlign: 'center'
  },
  img: {
    width: '50px',
    height: '50px',
    borderRadius: '15px',
    marginRight: '10px'
  }
})

export default Activity;
