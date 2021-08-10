# Hercules

'Where IOT meets Blockchain......'
<br/>

#### [Contract deployment on Ropsten](https://ropsten.etherscan.io/address/0x85396eD5fc7c968A92db4F4745726FC2526cBCc8)

<br/>

## Introduction

<br/>
Hercules is an IoT-powered Home-Automation system with a Blockchain-based Electricity consumption recording, billing and payment mechanism. It provides a DApp for users to control their home appliances with just the click of buttons. Home-Automation is executed using the Bolt IoT Wi-Fi Module and the DApp can be deployed on Ropsten or Polygon(Matic) Mumbai Testnet.

<br/>
The electricity consumption of the user is analysed and stored on the Blockchain and Billing is done accordingly. This amount can be paid in crypto to the Electricity Board/Corporation.

### Hercules Layout
<br/>

![Hercules_diagram](pic5.jpeg?raw=true)

<br/>

## Run the Hercules DApp

### Install Dependencies

Node JS - [node](https://nodejs.org/en/download/)

An Ethereum wallet like [Metamask](https://metamask.io/) in your browser and set a custom RPC to https://rpc-mumbai.matic.today .

#### Clone the repo
```
$ git clone https://github.com/UltimateRoman/Hercules
$ cd Hercules
```

#### Install Truffle and other dependencies
```
$ npm install -g truffle
$ npm install
```
- Add your Metamask account seed phrase in the .secret file of the repo.

### Run the dApp
```
$ truffle migrate --network mumbai [or ropsten]
$ npm run start
```

- Visit localhost:3000 and connect your Metmask account.
- Visit '/user' page and click 'Add me as new user' to use Hercules services.


<br/>

## Using Home-Automation

For performing Home Automation features of Hercules, a Bolt Wi-Fi Module is required. Connect your Home Appliances to pins 0-4 of the module using the circuit diagram below.

![Bolt_diagram](boltdiagram.jpg?raw=true)

- Enter your Bolt device credentials in the '/user' page now and click 'update'.
- Enjoy Home-Automation with Hercules using the buttons provided.
- Units you have consumed will be calculated and bill amount is set accordingly.
- Pay the bill when you its due.

Enjoy the Hercules experience!
