export const abi = [
    {
      "type": "function",
      "name": "get_escrow_contracts",
      "inputs": [],
      "outputs": [
        {
          "type": "core::array::Array::<core::starknet::contract_address::ContractAddress>"
        }
      ],
      "state_mutability": "view"
    }
] as const;