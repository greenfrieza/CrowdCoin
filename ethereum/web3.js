import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // in the browser with metamask
  web3 = new Web3(window.web3.currentProvider);
} else {
  // not in browser or no metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/9233f4bb0dbc46338ccb906df9cd40ed'
  );
  web3 = new Web3(provider);
}

export default web3;
