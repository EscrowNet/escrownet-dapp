export const ABI = [
    {
      "type": "impl",
      "name": "EscrownetImpl",
      "interface_name": "escrownet_contract::escrownet::escrownet::IEscrownet"
    },
    {
      "type": "interface",
      "name": "escrownet_contract::escrownet::escrownet::IEscrownet",
      "items": []
    },
    {
      "type": "impl",
      "name": "FactoryImpl",
      "interface_name": "escrownet_contract::escrow::escrow_factory::IEscrowFactory"
    },
    {
      "type": "interface",
      "name": "escrownet_contract::escrow::escrow_factory::IEscrowFactory",
      "items": [
        {
          "type": "function",
          "name": "deploy_escrow",
          "inputs": [
            {
              "name": "beneficiary",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "depositor",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "arbiter",
              "type": "core::starknet::contract_address::ContractAddress"
            },
            {
              "name": "salt",
              "type": "core::felt252"
            }
          ],
          "outputs": [
            {
              "type": "core::starknet::contract_address::ContractAddress"
            }
          ],
          "state_mutability": "external"
        },
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
      ]
    },
    {
      "type": "event",
      "name": "escrownet_contract::escrow::escrow_factory::EscrowFactory::Event",
      "kind": "enum",
      "variants": []
    },
    {
      "type": "event",
      "name": "escrownet_contract::escrownet::escrownet::Escrownet::Event",
      "kind": "enum",
      "variants": [
        {
          "name": "EscrowFactoryEvent",
          "type": "escrownet_contract::escrow::escrow_factory::EscrowFactory::Event",
          "kind": "nested"
        }
      ]
    }
] as const