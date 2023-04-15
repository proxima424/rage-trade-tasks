import { contract_event, contract_interface } from "./utils.js";
import { vaultabi } from "./vault.js";
import { erc20abi } from "./usdc.js";

import { ethers } from "ethers";

const sleep = (ms=2000) => new Promise((r)=>setTimeout(r,ms));

async function main(user_address: string, the_contract : contract_interface, the_events : contract_event[] ) {

    // connect to arbitrum node provider
    const provider = new ethers.JsonRpcProvider("https://arb-mainnet-public.unifra.io");

    // create a contract object
    const lovely_contract = new ethers.Contract(the_contract.address, the_contract.abi, provider);

    lovely_contract.on( the_events[0].event_name,
        (key,account,collateralToken,indexToken,collaterDelta,sizeDelta,isLong,price,fee) => {
            if(account == user_address){
                console.log(`${user_address} just increased his position on GMX`);
                console.log(``)
            }
    } );

    lovely_contract.on( the_events[1].event_name,
        (key,account,collateralToken,indexToken,collateralDelta,sizeDelta,isLong,price,fee) =>{
            if(account == user_address){

            }
    }  )

    lovely_contract.on( the_events[2].event_name,
        (key,account,collateralToken,indexToken,isLong,size,collateral,reserveAmount, realisedPnl, markPrice) =>{
            if(account == user_address){

            }
    } )
}

const gmx_contract : contract_interface = { address : '0x489ee077994B6658eAfA855C308275EAd8097C4A', abi : vaultabi };
const gmx_event_1 : contract_event = { contract : gmx_contract, event_name : "IncreasePosition" };
const gmx_event_2 : contract_event = { contract : gmx_contract, event_name : "DecreasePosition" };
const gmx_event_3 : contract_event = { contract : gmx_contract, event_name : "LiquidatePosition" };
const events_list : contract_event[] = [ gmx_event_1, gmx_event_2, gmx_event_3 ] ;

const the_address = '';
main(the_address,gmx_contract,events_list);





// Tasks : figure out interface type thing