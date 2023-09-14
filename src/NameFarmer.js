import React from 'react'
import {ethers} from 'ethers'
import {contractAddress,abi} from "./constants" 

async function NameFarmer() {
    console.log("a")
    
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
       var b=localStorage.getItem('rname')
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        var a=contract.rname(b);
        a.then((message)=>{
            console.log(message)
        }).catch((message)=>{
            console.log(message)
        })
        
      }
  return (
    <div>NameFarmer</div>
  )
}

export default NameFarmer