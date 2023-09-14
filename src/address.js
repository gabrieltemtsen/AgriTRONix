import {ethers} from "ethers"
import { contractAddress,abi } from "./constants";

async function address() {
  

  
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const accounts =  await provider.send("eth_requestAccounts", []);
      console.log(accounts)
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, abi, signer)
      const personAddress = "0x8B23D84c00521b81445aE3Eb0890fF54a24cfbef";
      const role = await contract.decider(personAddress);
      console.log(role);
      
    } else {
      console.log("Install Metamask");
    }
    
    
  };

export default address