import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TransactionsTable from "../../components/TransactionsTable/TransactionsTable";

const WalletBalance = () => {
	const blockchainService = useSelector((state) => state.blockchainService);
	const { blockchain } = blockchainService;

	const { address } = useParams();

	const walletAddress = address;
	const balance = blockchain.getBalanceOfAddress(walletAddress);
	const transactions = blockchain.getAllTransactionsForWallet(walletAddress);

	return (
		<div className='container mt-4'>
			<h1>Wallet details</h1>

			<p style={{ wordWrap: "break-word" }}>
				<strong>Address:</strong>
				<br />
				{walletAddress}
			</p>

			<p>
				<strong>Balance:</strong>
				<br />
				{balance}
			</p>

			<hr />

			<h1>Transactions</h1>
			{transactions.length === 0 ? (
				<p>This wallet has made no transactions</p>
			) : (
				""
			)}
			{transactions.length > 0 ? (
				<TransactionsTable transactions={transactions} />
			) : (
				""
			)}
		</div>
	);
};

export default WalletBalance;
