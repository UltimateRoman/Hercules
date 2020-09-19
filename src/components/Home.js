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
        
            <p1>
            <h6 style={{color: "blue"}}></h6>
            
            </p1>
            <p2>
            <h6 style={{color: "black"}}>Hercules allows you to pay your electricity bills in the safest and most reliable way using blockchain.</h6>
            
            <h6 style={{color: "black"}}>Herculus is very transparent to the user in all ways. It lets the users analyse the electricity consumed by them, their transactions and everything in between.</h6>
            
            </p2>
            <p3>
            <h6 style={{color: "black"}}>Legit Advantages we received by incorporating blockchain to our transaction process</h6>
            <ol>
                <li>The blockchain technology allows for verification without having to be dependent on third-parties.</li>
                <li>The data structure in a blockchain is append-only. So, the data cannot be altered or deleted.</li>
                <li>The transactions stored in the blocks are contained in millions of computers participating in the chain. Hence it is decentralized. There is no possibility that the data if lost cannot be recovered.</li>
                <li>The transactions that take place are transparent. The individuals who are provided authority can view the transaction.</li>
                <li>Since various consensus protocols are needed to validate the entry, it removes the risk of duplicate entry or fraud.</li>
                <li>All the transactions and data are attached to the block after the process of maximum trust verification. There is a consensus of all the ledger participants on what is to be recorded in the block.</li>
            </ol>
            </p3>
            
            
            <img src={logo} align="bottom" width="500" height="500" />
            <img src={logo1} align="right" width="500" height="500" />
        </div>
      
    </React.Fragment>
  );
}

export default Home;