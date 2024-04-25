import React from 'react'
import {ethers} from 'ethers'
import { contractAddress,abi } from "./constants";

async function Screen() {
    console.log("a")
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const m=localStorage.getItem("funding");
      const contract = new ethers.Contract(contractAddress, abi, signer)
      try {
        const transactionResponse = await contract.deposit({value:ethers.utils.parseEther(m)}
        )
        
      } catch (error) {
        console.log("Error during deposit:", error)
      }}
  return (
    <div>Screen</div>
    
  )
}
export default Screen