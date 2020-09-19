import React from 'react';
import './App.css'
import logo from '../pic.jpg'
import logo1 from '../piccc.jpg'
function Home() {
  return (  
    
    <React.Fragment>   
        <div className="contain">
            <h1 align="center" >Hercules </h1> 
            <h3 align="center" style={{color: "darkblue"}}>By Delta_Codinators </h3>
        
            
            <p2>
            <h4 style={{color: "black"}}>Hercules allows you to pay your electricity bills in the safest and most reliable way using blockchain.</h4>
            
            <h4 style={{color: "black"}}>Herculus is very transparent to the user in all ways. It lets the users analyse the electricity consumed by them, their transactions and everything in between. The users are given all the untouched data about the electricity consumed and the conversion rates too.</h4>
            <br></br>
            </p2>
            <p>Using blockchain provides our consumers with the added benefit of very low transaction fees for international payments. Standard wire transfers and foreign purchases typically involve fees and exchange costs. Since bitcoin transactions have no intermediary institutions or government involvement, the costs of transacting are kept very low. This can be a major advantage for travelers. Additionally, any transfer in bitcoins happens very quickly, eliminating the inconvenience of typical authorization requirements and wait periods. </p>
            <p>Payments made using the virtual currency save substantially on processing fees and eliminate the risk of charge-backs. For oru customers, the advantages of paying with bitcoin include greater simplicity in placing the transaction, user anonymity, no interruptions from intermediaries, and very low transaction fees.</p>
            <p3>
            <img src={logo} align="bottom" width="500" height="500" alt="1"/>
            <img src={logo1} align="right" width="500" height="500" alt="2"/>
            
            <br></br>
            <br></br>
            <h4 style={{color: "black"}}>Legit Advantages we received by incorporating blockchain to our transaction process</h4>
            <ol>
                <li>The blockchain technology allows for verification without having to be dependent on third-parties.</li>
                <li>The data structure in a blockchain is append-only. So, the data cannot be altered or deleted.</li>
                <li>The transactions stored in the blocks are contained in millions of computers participating in the chain. Hence it is decentralized. There is no possibility that the data if lost cannot be recovered.</li>
                <li>The transactions that take place are transparent. The individuals who are provided authority can view the transaction.</li>
                <li>Since various consensus protocols are needed to validate the entry, it removes the risk of duplicate entry or fraud.</li>
                <li>All the transactions and data are attached to the block after the process of maximum trust verification. There is a consensus of all the ledger participants on what is to be recorded in the block.</li>
            </ol>
            </p3>
            
            
            
        </div>
      
    </React.Fragment>
  );
}

export default Home;