import { contract_interface } from "./utils.js";
import { ethers } from "ethers";

const sleep = (ms=2000) => new Promise((r)=>setTimeout(r,ms));

async function main(input_path: String[], token_in: String, the_contract: contract_interface ) {

    const provider = new ethers.JsonRpcProvider("https://arb-mainnet-public.unifra.io");

    // Get execution price

    




}