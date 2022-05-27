const fs = require("fs");
const path = require("path");
export const EthsFunctions = (web3: any) => {
    const ChainLinkEthUsdAdd = async(address: String) => {
        const tokenABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../abi/MyVault.json")));
        let tokenContract = new web3.eth.Contract(tokenABI, address);
        let chainLinkEthADdress = await tokenContract.methods.chainLinkETHUSDAddress().call();
        return chainLinkEthADdress;
      }

      const DaiAddress = async(address: String) => {
        const tokenABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../abi/MyVault.json")));
        let tokenContract = new web3.eth.Contract(tokenABI, address);
        let daiAddr = await tokenContract.methods.daiAddress().call();
        return daiAddr;
      }

      const Ethprice = async(address: String) => {
        const tokenABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../abi/MyVault.json")));
        let tokenContract = new web3.eth.Contract(tokenABI, address);
        let ethPrice = await tokenContract.methods.ethPrice().call();
        return ethPrice;
      }

      const GetDaiBalance = async(address: String) => {
        const tokenABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../abi/MyVault.json")));
        let tokenContract = new web3.eth.Contract(tokenABI, address);
        let getDaiBal = await tokenContract.methods.getDaiBalance().call();
        return getDaiBal;
      }

      const GetTotalBalance = async(address: String) => {
        const tokenABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../abi/MyVault.json")));
        let tokenContract = new web3.eth.Contract(tokenABI, address);
        let totalBal = await tokenContract.methods.getTotalBalance().call();
        return totalBal;

      }

      return {
        ChainLinkEthUsdAdd: ChainLinkEthUsdAdd,
        DaiAddress: DaiAddress,
        Ethprice: Ethprice,
        GetDaiBalance: GetDaiBalance,
        GetTotalBalance: GetTotalBalance




      }

    


}