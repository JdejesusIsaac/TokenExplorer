const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
import path = require("path");
// Using HTTPS

const API_KEY = "LWrgmpDRxzx8tSCR6qkS4q4BOqn0bBUn"
const url = `https://eth-mainnet.alchemyapi.io/v2/${API_KEY}`
const fs = require("fs")

const web3 = createAlchemyWeb3(url);

const getBlockNum = async() => {
  let BlockNumber = web3.eth.getBlockNumber()
  return BlockNumber
};

const getTokenName = async(address: String) => {
  const tokenABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../abi/tokenABI.json")));
  let TokenContract = new web3.eth.Contract(tokenABI, address);
  let tokenName = await TokenContract.methods.name().call();
  return tokenName;



}



const totalSuppy = async(address: String) => {
  const tokenABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../abi/tokenABI.json")));
  let TokenContract = new web3.eth.Contract(tokenABI, address);
  let tokenSupply = await TokenContract.methods.totalSupply().call();
  return tokenSupply;

}

const getTokenSymbol = async(address: String) => {
  const tokenABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../abi/tokenABI.json")));
  let TokenContract = new web3.eth.Contract(tokenABI, address);
  let tokenSymbol = await TokenContract.methods.symbol().call();
  return tokenSymbol;

}
// price to get compound to eth
const getPriceInETH = async(address: String) => {
  let WrappedEthAdd = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
  let TokenV2Add = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"
  
  const TokenAbi = JSON.parse(fs.readFileSync("uniswapV2FactoryABI.json"));
  
  let TokenV2Contract = new web3.eth.Contract(TokenAbi, TokenV2Add);
  let getPrice = await TokenV2Contract.methods.getPair(address, WrappedEthAdd).call();
  
  const TokenAbi2 = JSON.parse(fs.readFileSync("tokenABI.json"));
  
  let TokenContract = new web3.eth.Contract(TokenAbi2, address);
  let TokenWETH = new web3.eth.Contract(TokenAbi2, WrappedEthAdd);

  let tokenBalance = await TokenContract.methods.balanceOf(getPrice).call();
  let WethBalance = await TokenWETH.methods.balanceOf(getPrice).call();
  
  let TokenDecimal = await TokenContract.methods.decimals().call();
  let WethDecimal = 18;
 
  tokenBalance =  tokenBalance / Math.pow(10, TokenDecimal);
  WethBalance =  WethBalance / Math.pow(10, WethDecimal);
  

  let price = 1 / (tokenBalance / WethBalance);


  


  return price
  


 

  


  
}


const priceInUSD = async(address: String) => {
  let usdc = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
  let priceETH = await getPriceInETH(usdc);
  let priceToken = await getPriceInETH(address);
  
  priceETH = 1 / priceETH;

  let price = priceToken * priceETH;


  return price;
  
  


}

const main = async() => {
  /// COMP TOKENadd // 0x0822f3c03dcc24d200aff33493dc08d0e1f274a2 olympus
  let Tokenadd = "0xc00e94Cb662C3520282E6f5717214004A7f26888"
  console.log(await getTokenName(Tokenadd));
  console.log(await getTokenSymbol(Tokenadd));
  console.log(await totalSuppy(Tokenadd));
  console.log(await getPriceInETH(Tokenadd));
  console.log( await priceInUSD(Tokenadd))
}

main()