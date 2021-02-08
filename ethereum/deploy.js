const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'expose brand person napkin inject word another swim close pencil purpose page',
  'https://rinkeby.infura.io/v3/9233f4bb0dbc46338ccb906df9cd40ed'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
	.deploy({ data: compiledFactory.bytecode })
	.send({ gas: '1000000', from: accounts[0] });
  
  console.log('Contract deployed to', result.options.address); 
};
deploy();

