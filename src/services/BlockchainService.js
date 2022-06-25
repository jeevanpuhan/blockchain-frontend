import { Blockchain } from "blockchain-demo/src/Blockchain";
import EC from "elliptic";

export class BlockchainService {
	constructor() {
		this.walletKeys = [];
		this.blockchainInstance = new Blockchain();
		this.blockchainInstance.difficulty = 1;
		this.blockchainInstance.minePendingTransactions("my-wallet-address");

		this.generateWalletKeys();
	}

	getBlocks() {
		return this.blockchainInstance.chain;
	}

	addTransaction(tx) {
		this.blockchainInstance.addTransaction(tx);
	}

	addressIsFromCurrentUser(address) {
		return address === this.walletKeys[0].publicKey;
	}

	getBalanceOfAddress(address) {
		return this.blockchainInstance.getBalanceOfAddress(address);
	}

	getAllTransactionsForWallet(walletAddress) {
		return this.blockchainInstance.getAllTransactionsForWallet(walletAddress);
	}

	getPendingTransactions() {
		return this.blockchainInstance.pendingTransactions;
	}

	minePendingTransactions() {
		this.blockchainInstance.minePendingTransactions(
			this.walletKeys[0].publicKey
		);
	}

	resetPendingTransactions() {
		this.blockchainInstance.pendingTransactions = [];
	}

	generateWalletKeys() {
		const ec = new EC.ec("secp256k1");
		const key = ec.genKeyPair();

		this.walletKeys.push({
			keyObj: key,
			publicKey: key.getPublic("hex"),
			privateKey: key.getPrivate("hex"),
		});
	}
}

export default BlockchainService;
