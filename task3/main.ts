const { ethers } = require("ethers");

import vaultabi from "./vault.ts";
import {contract_interface, contract_event} from "./utils.ts";


const provider = new ethers.providers.JsonRpcProvider("https://arbitrum-one.public.blastapi.io");

const a = await provider.getBlockNumber();

console.log(a);









