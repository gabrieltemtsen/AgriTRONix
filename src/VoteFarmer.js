import React from 'react'
import {ethers} from 'ethers'
import {contractAddress,abi} from './constants'

async function VoteFarmer() {
    console.log("a")
    
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts =  await provider.send("eth_requestAccounts", []);
       var b=localStorage.getItem('vote')
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        var a=contract.voting(b);
        
      }

  return (
    <div>VoteFarmer</div>
  )
}

export default VoteFarmer