import { Abi } from 'abitype'

export type contract_interface = {
    address: string,
    abi: Abi
}

export type contract_event = {
    contract: contract_interface,
    event_name: string,
}

