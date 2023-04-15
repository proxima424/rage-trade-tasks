import { Abi } from 'abitype';


export type contract_interface = {
    address: string,
    abi: any,
}

export type contract_event = {
    contract: contract_interface,
    event_name: string,
}

