import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Web3 from 'web3';
import Hercules from '../abis/Hercules.json';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should use the MetaMask extension!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Hercules.networks[networkId]
    if(networkData) {
      const hdp = web3.eth.Contract(Hercules.abi, networkData.address)
      this.setState({ hdp })
      this.setState({ loading: false})
    } else {
      window.alert('The dapp contract could not be deployed to network')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      loading: true
    }
  }

  render() {
    return (
      <div className="container">
        <Router>   
        <Navbar />
        
        <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
