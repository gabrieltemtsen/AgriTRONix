import React from 'react'
import {ethers} from 'ethers'
import {contractAddress,abi} from './constants'

async function Areaname() {
    
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, abi, signer)
      const x=localStorage.getItem('affected')
      const y=localStorage.getItem('affected1')
      
          const m=localStorage.getItem("funding");
        const transactionResponse = await contract.AreaWeightage(x,y)}
  return (
    <div>Areaname</div>
  )
}

export default Areaname