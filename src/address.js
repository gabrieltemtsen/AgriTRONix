import {ethers} from "ethers"
import { contractAddress,abi } from "./constants";

async function address() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const personAddress = "0x36a196417891621b9569506Fb7E1F4755002d089";
    try {
      const role = await contract.decider(personAddress);
      console.log(role);
    } catch (error) {
      console.error("Error calling decider:", error);
    }
  } else {
    console.log("Install Metamask");
  }
}

export default address