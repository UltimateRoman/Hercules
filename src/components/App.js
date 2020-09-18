import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Web3 from 'web3';
import Navbar from './Navbar';
import Home from './Home';
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

  render() {
    return (
      <div className="container">
        <Router>   
        <Navbar />
        <Route exact path="/" component={Home} />
        <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
