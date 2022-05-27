import { EthsFunctions } from "../functions/Ethfuntion";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const API_KEY = "Zc3CZGybAdrueuWXfAjYdcEuj53Xeoni"
const url = `https://eth-kovan.alchemyapi.io/v2/${API_KEY}`

const web3 = createAlchemyWeb3(url);
let ethFunctions = EthsFunctions(web3);

export const resolvers = {
    
    Query: {
        
        ChainLinkEthUsdAdd: async(_: any, { address }) => {
            let tokenName = await ethFunctions.ChainLinkEthUsdAdd(address);
            return tokenName;
        },

        DaiAddress: async(_: any, { address }) => {
            let tokenSymbol = await ethFunctions.DaiAddress(address);
            return tokenSymbol;
        },

        Ethprice: async(_: any, { address }) => {
            let totalSupply = await ethFunctions.Ethprice(address);
            return totalSupply.toString();
        },

        GetDaiBalance: async(_: any, { address }) => {
            let price = await ethFunctions.GetDaiBalance(address);
            return price.toString();
        },

       
    }
}