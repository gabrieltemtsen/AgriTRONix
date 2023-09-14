import React from 'react'
import {ethers} from 'ethers'
import {contractAddress,abi} from './constants'

async function DepositFarmer() {
    console.log("a")
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        const m=localStorage.getItem("funding");
        const transactionResponse = await contract.deposit({value:ethers.utils.parseEther(m)})
        }
  return (
    <div>DepositFarmer</div>
  )
}

export default DepositFarmer