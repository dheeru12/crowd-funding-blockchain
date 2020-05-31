const HDwalletprovider = require('truffle-hdwallet-provider');
const Web3= require('web3');

const campaignFactory=require('./build/campaignFactory.json');

const provider=new HDwalletprovider(
    'fever shrug spatial build chapter roof person error feel unaware buyer quit',
    'https://rinkeby.infura.io/v3/2ae324fcb0d94486b6b022f559475dc7'
);

const web3=new Web3(provider);

const deploy = async () =>{
    const accounts=await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(campaignFactory.interface))
        .deploy({data:campaignFactory.bytecode})
        .send({from:accounts[0],gas:'1000000'});
    console.log(result.options.address);
};

deploy();