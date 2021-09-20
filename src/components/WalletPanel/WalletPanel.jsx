import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios'
import cookie from 'react-cookies'
import gsap from 'gsap'
import { StyleSheet, css } from 'aphrodite'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const WalletPanel = (props) => {
    const {username} = props
    const bar = useRef();
    const containerPanel = useRef()
    const [panelDisplay, setPanelDisplay] = useState(false);
    const [wallet, setWallet] = useState({});
    const [small, setSmall] = useState(true);
    const [CCCBalance, setCCCBalance] = useState(0);

    const handleBarExpand = () => {
        gsap.to(bar.current, {x: -60, duration: .2, ease: 'back'})
        setSmall(false)
    }

    const handleBarShrink = () => {
        if (!panelDisplay) {
            gsap.to(bar.current, {x: 0, duration: .2, ease: 'back'})
            setSmall(true)
        }
    }

    const handlePanelExpand = () => {
        gsap.to(containerPanel.current, {x: -400, duration: 1, ease: 'power2'})
        setPanelDisplay(true);
    }

    const handlePanelShrink = () => {
        gsap.to(containerPanel.current, {x: 0, duration: 1, ease: 'power2'})
        gsap.to(bar.current, {x: 0, duration: .2, ease: 'back'})
        setPanelDisplay(false);
        setSmall(true)
    }

    const getCCCBalance = (wallet) => {
        const CCCBalances = wallet.balances.filter(balance => balance.tokenId === '30000000000010c6')
        if (CCCBalances.length > 1)
        return CCCBalances.reduce((prev, current) => prev.value + current.value);
        else
        return CCCBalances[0].value
    }

    useEffect(() => {
        const token = cookie.load('accessToken');
        axios.get('http://localhost:3005/wallet/getWallet', {
            headers: {
            Authorization: 'Bearer ' + token
            }
        }).then(res => {
            setWallet(res.data)
            setCCCBalance(getCCCBalance(res.data))
        }).catch(err => console.log(err))
    }, [])


    return (
        <div className={css(styles.container)} ref={containerPanel}>
            <div className={css(styles.buttonContainer)} onMouseEnter={handleBarExpand} onMouseLeave={handleBarShrink} onClick={handlePanelExpand} ref={bar}>
                <FontAwesomeIcon icon={faWallet} style={{marginRight: '10px'}}/>
                <p>Wallet</p>
            </div>
            <div className={css(styles.walletPanel)}>
                <div className={css(styles.header)}>
                    <h3>Welcome {username}!</h3>
                    <FontAwesomeIcon icon={faChevronRight} className={css(styles.chevron)} onClick={handlePanelShrink}/>
                </div>
                <img src="https://picsum.photos/150/150" alt="wallet" style={{marginTop: '70px'}} className={css(styles.image)}/>
                <h3>{username}</h3>
                <div className={css(styles.info)}>
                    <div className={css(styles.flexRow)}>
                        <p style={{padding: '0', margin: '0'}}><b>CCC Balance:</b></p>
                        <p>{CCCBalance}</p>
                    </div>
                    <div className={css(styles.flexRow)}>
                        <p style={{padding: '0', margin: '0'}}><b>ENJ Balance:</b></p>
                        <p>{wallet.enjBalance && wallet.enjBalance.toFixed(2)}</p>
                    </div>
                    <div className={css(styles.flexRow)}>
                        <p style={{padding: '0', margin: '0'}}><b>ETH Balance:</b></p>
                        <p>{wallet.ethBalance && wallet.ethBalance.toFixed(2)}</p>
                    </div>
                    <p style={{padding: '0', margin: '0'}}><b>Address:</b></p>
                    <p style={{fontSize: '.8rem'}}>{wallet.ethAddress}</p>
                </div>
                <button className={css(styles.addFunds)}>Add Funds</button>
            </div>
            <div className={css(styles.footer)}>

            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '400px',
        height: '100vh',
        position: 'fixed',
        right: '-400px',
        zIndex: '200',
    },
    walletPanel: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        color: 'black',
        borderLeft: '1px solid rgba(28,157,230, .5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        height: '60px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        backgroundColor: 'rgb(28,157,230)',
        boxSizing: 'border-box',
        color: 'white'
    },
    image: {
        borderRadius: '100%',
        border: '10px solid rgb(28,157,230)'
    },
    info: {
        width: '80%',
        border: '1px solid rgba(28,157,230, 1)',
        padding: '.6rem 1.1rem',
        borderRadius: '10px',
        textAlign: 'center'
    },
    flexRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '30px'
    },
    addFunds: {
        color: 'white',
        backgroundColor: 'rgb(28,157,230)',
        borderRadius: '10px',
        width: '90%',
        marginTop: '39px',
        height: '50px',
        fontSize: '1.3rem',
        transition: '.6s',
        ':hover': {
            color: 'rgb(28,157,230)',
            backgroundColor: 'white',
            border: '1px solid rgba(28,157,230, 1)',
        }
    },
    footer: {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '60px',
        backgroundColor: 'rgb(28,157,230)',
    },
    chevron: {
        cursor: 'pointer',
        fontSize: '1.1rem',
        transition: '.6s',
        ':hover': {
            transform: 'scale(1.2)',
        }
    },
    buttonContainer: {
        position: 'absolute',
        bottom: '9px',
        left: '-35px',
        backgroundColor: 'rgb(28,157,230)',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: '6px',
        borderTopLeftRadius: '6px',
        padding: '0 10px',
        color: 'white',
        cursor: 'pointer',
        transition: '.6s'
    }
})

export default WalletPanel;
