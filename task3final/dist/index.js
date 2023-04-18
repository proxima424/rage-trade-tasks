import { vaultabi } from "./vault.js";
import { erc20abi } from "./usdc.js";
import { ethers } from "ethers";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function main(user_address, the_contract, the_events) {
    // connect to arbitrum node provider
    const provider = new ethers.JsonRpcProvider("https://arb-mainnet-public.unifra.io");
    // create a contract object
    const lovely_contract = new ethers.Contract(the_contract.address, the_contract.abi, provider);
    lovely_contract.on(the_events[0].event_name, (key, account, collateralToken, indexToken, collateralDelta, sizeDelta, isLong, price, fee) => {
        if (account == user_address) {
            console.log(`${account} just increased his position on GMX`);
            console.log(`Here are the relevant event parameters :`);
            // I could make stringify json object
            console.log(`key: ${key} `);
            console.log(`collateralToken: ${collateralToken}`);
            console.log(`indexToken: ${indexToken}`);
            console.log(`collateralDelta: ${collateralDelta}`);
            console.log(`sizeDelta: ${sizeDelta}`);
            console.log(`isLong: ${isLong}`);
            console.log(`price: ${price}`);
            console.log(`fee: ${fee}`);
        }
    });
    lovely_contract.on(the_events[1].event_name, (key, account, collateralToken, indexToken, collateralDelta, sizeDelta, isLong, price, fee) => {
        if (account == user_address) {
            console.log(`${account} just decreased his position on GMX`);
            console.log(`Here are the relevant event parameters :`);
            // I could make stringify json object
            console.log(`key: ${key} `);
            console.log(`collateralToken: ${collateralToken}`);
            console.log(`indexToken: ${indexToken}`);
            console.log(`collateralDelta: ${collateralDelta}`);
            console.log(`sizeDelta: ${sizeDelta}`);
            console.log(`isLong: ${isLong}`);
            console.log(`price: ${price}`);
            console.log(`fee: ${fee}`);
        }
    });
    lovely_contract.on(the_events[2].event_name, (key, account, collateralToken, indexToken, isLong, size, collateral, reserveAmount, realisedPnl, markPrice) => {
        if (account == user_address) {
            console.log(`${account} just liquidated his position on GMX`);
            console.log(`Here are the relevant event parameters :`);
            // I could make stringify json object
            console.log(`key: ${key} `);
            console.log(`collateralToken: ${collateralToken}`);
            console.log(`indexToken: ${indexToken}`);
            console.log(`size: ${size}`);
            console.log(`collateral: ${collateral}`);
            console.log(`isLong: ${isLong}`);
            console.log(`reserveAmount: ${reserveAmount}`);
            console.log(`realisedPnl: ${realisedPnl}`);
            console.log(`markPrice: ${markPrice}`);
        }
    });
}
async function main1(the_contract) {
    // connect to arbitrum node provider
    const provider = new ethers.JsonRpcProvider("https://arb-mainnet-public.unifra.io");
    // create a contract object
    const lovely_contract = new ethers.Contract(the_contract.address, the_contract.abi, provider);
    lovely_contract.on('Transfer', (_from, _to, _value) => {
        console.log("The user address is");
        console.log(typeof _from);
    });
}
const gmx_contract = { address: '0x489ee077994B6658eAfA855C308275EAd8097C4A', abi: vaultabi };
const gmx_event_1 = { contract: gmx_contract, event_name: "IncreasePosition" };
const gmx_event_2 = { contract: gmx_contract, event_name: "DecreasePosition" };
const gmx_event_3 = { contract: gmx_contract, event_name: "LiquidatePosition" };
const events_list = [gmx_event_1, gmx_event_2, gmx_event_3];
const usdc_contract = { address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', abi: erc20abi };
const the_address = '';
// main(the_address,gmx_contract,events_list);
main1(usdc_contract);
// Tasks : figure out interface type thing
//# sourceMappingURL=index.js.map