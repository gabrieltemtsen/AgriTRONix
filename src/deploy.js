import { deploy } from '@bunzz/deploy-sdk';
import { providers } from 'ethers';

const TEMPLATE_ID = '4aa95b23-0b98-463e-93f0-af24e23cba88';

const cloneContract = async () => {
  // get a Signer object in the ethers' style.
  const signer = getSigner();

  // Arguments for the constructor as an array.
  // The types must follow the ethers style.
  const arg = ['dummy', 123456];

  // The return value is the same as the ethers one.
  const tx = await deploy(TEMPLATE_ID, signer, args);

  // You can get receipt as well.
  const receipt = await tx.wait();
  
  return receipt;
};

const getSigner = () => {
  // Here is an example of Metamask.
  const provider = new providers.Web3Provider(window.ethereum);
  return provider.getSigner();
};
