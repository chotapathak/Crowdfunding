// import contract from '../contracts/OpenFund.json';
import './App.css';
import {useEffect, useState} from 'react';
import {ethers} from 'ethers';
import { Grid } from '@material-ui/core';
// For Theme and UI
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Footer from '../Footer'

//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
import Header from '../action/Onboard';
import Nav from '../Nav';
import Body from '../Body';
import OnBoard from '../action/Onboard';
// End
// deployed contract address
const contractAddress = "0x358AA13c52544ECCEF6B0ADD0f801012ADAD5eE3"; 
// const abi = contract.abi;

function Main() {
  //Theme
  const classes = styles();
  //
  const [currentAccount, setCurrentAccount] = useState(null);

  const CheckWalletIsConnected = async() => { 
    const { ethereum } = window;

    if (!ethereum) {
      console.log("May be you have not installed metamask");
      return;
    } else {
        console.log("Metamask is exists! We're working to add more Wallets ");
      const accounts = await ethereum.request({method: 'eth_accounts'});

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("found an authorized account", account);
        setCurrentAccount(account);
      } else {
        console.log('no authorized accounts found')
      }
    }
  }
  
  const connectWalletHandler = async () => { 
    const { ethereum } = window;

    if (!ethereum) {
      alert('please instal metamask');
    }
    try{
      const accounts = await ethereum.request({method: "eth_requestAccounts"});
      console.log("found an account Address:", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
   }

  const fundHandler = async () => { 
    try {
      const {ethereum} = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const fundContract = new ethers.Contract(contractAddress, signer);
        
        console.log("initialized contract proccessing payment");
        let fundTxn = await fundContract.Fund(333, { value: ethers.utils.parseEther("0.003") });

        console.log('funding.. please wait');
        await fundTxn.wait();
        // getting txn hash with etherscan baseUri
        console.log(`Mined, transactiion: https://rinkeby.etherscan.io/tx/${fundTxn.hash}`);
       }
       else {
         console.log("Object not exist");
       }
    } catch (err) {
      console.log(err);
    }
  }
// connect wallet button
  const connectWalletButton = () => { 
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect wallet
      </button>
    )
  }
  // Minting button
  const fundButton = () => {
    return (
      <button onClick={fundHandler} className='cta-button fund-button'>
        Contribute to needy 
      </button>
    )
  } 
  // useEffect provides react support
  useEffect(() => {
    CheckWalletIsConnected();
  },[])

  return (
    
    <div className="App">   
      <Nav />
      <Body />
          
        <div className='main-app'>
        <h1>Contribute Who Want</h1>
        <div>
          {currentAccount ? fundButton(): connectWalletButton()}
        </div>
        </div>
    <Footer />
  </div>
  
  )
}

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

export default Main;

