import Web3 from 'web3';
let web3;
let provider;
if(typeof window !== 'undefined'){
    if (typeof window.web3!=='undefined'){
    provider=window.web3.currentProvider; 
    }
}else{
    provider=new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/2ae324fcb0d94486b6b022f559475dc7'
    );
    
}  
web3=new Web3(provider);
export default web3;