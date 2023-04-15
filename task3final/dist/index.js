import { vaultabi } from "./vault.js";
import { erc20abi } from "./usdc.js";
import { ethers } from "ethers";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function main(the_contract, the_events) {
    // connect to arbitrum node provider
    const provider = new ethers.JsonRpcProvider("https://arb-mainnet-public.unifra.io");
    // create a contract object
    const lovely_contract = new ethers.Contract(the_contract.address, the_contract.abi, provider);
    // console.log(await provider.getBlockNumber());
    // console.log( the_events.event_name);
    // console.log(await gmx_vault.router());
    let i = 0;
    console.log(await lovely_contract.totalSupply());
    lovely_contract.on(the_events.event_name, (from, to, value) => {
        console.log(`Transfer number ${i++}`);
        console.log(`The latest USDC transfer on Arbitrum happened from ${from} to ${to}.`);
        console.log(`The transfer amounted for a total of ${value} USDC`);
    });
}
const gmx_contract = { address: '0x489ee077994B6658eAfA855C308275EAd8097C4A', abi: vaultabi };
const gmx_event = { contract: gmx_contract, event_name: "sex" };
const usdc_contract = { address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', abi: erc20abi };
const usdc_event = { contract: usdc_contract, event_name: "Transfer" };
main(usdc_contract, usdc_event);
// Tasks : figure out interface thing
//# sourceMappingURL=index.js.map