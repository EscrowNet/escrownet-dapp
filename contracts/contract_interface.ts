import { useContract } from "@starknet-react/core";
import type { UseAccountResult } from "@starknet-react/core";
import type { Abi, Contract, ProviderInterface } from "starknet";
import { CallData, LibraryError } from "starknet";
import configExternalContracts from "./abi/escrownet";

/**
 * React hook to load the Escrow contract instance
 * based on the current environment (defaults to "sepolia").
 *
 * @returns {Contract | undefined} A StarkNet Contract instance
 */
const useEscrowContract= () => {
	const env = (process.env.STARKNET_ENV ??
		"sepolia") as keyof typeof configExternalContracts;
	const { contract } = useContract({
		abi: configExternalContracts[env].Escrownet.abi as Abi,
		address: configExternalContracts[env].Escrownet.address,
	});
	return contract;
};


/**
 * Class to encapsulate interaction with StarkNet contracts using the connected account.
 *
 * @example
 * ```ts
 * const { provider } = useProvider();
 * const contracts = new ContractsInterface(
 *    useAccount(),
 *    useEscrowContract(),
 *    provider
 * );
 * contracts.connectAccount();
 * ```
 */
class ContractsInterface {
	escrowContract: Contract | null;
	account: UseAccountResult;
	provider: ProviderInterface;

	constructor(
		account: UseAccountResult,
		escrowContract: Contract | undefined,
		provider: ProviderInterface,
	) {
		if (!account) {
			throw new Error("User is not connected");
		}
		this.escrowContract = escrowContract ?? null;
		this.account = account;
		this.provider = provider;
	}

    // Make sure to call this function before calling the contract to assure that user account is connected
	connect_account() {
		if (!this.account.account) {
			throw new Error("User is not connected");
		}
		this.escrowContract?.connect(this.account.account);
	}
}

export {
	ContractsInterface,
	useEscrowContract,
};
