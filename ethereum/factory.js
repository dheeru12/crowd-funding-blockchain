import web3 from './web3';
import CampaignFactory from './build/campaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb7B7680dddb9F41552e7155AB775A92EBF55490e'
);

export default instance;