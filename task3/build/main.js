const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("https://arbitrum-one.public.blastapi.io");
const a = await provider.getBlockNumber();
console.log(a);
export {};
