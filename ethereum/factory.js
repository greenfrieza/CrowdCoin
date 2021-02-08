import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xDF97747BD3f31c19c7a5c0F5fdc154e8eE6bc409'
);

export default instance;
