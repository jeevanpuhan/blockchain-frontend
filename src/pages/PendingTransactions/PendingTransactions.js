import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blockchainInit } from "../../redux";
import TransactionsTable from "../../components/TransactionsTable/TransactionsTable";

const PendingTransactions = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const blockchainService = useSelector((state) => state.blockchainService);
	const { blockchain } = blockchainService;
	const pendingTransactions = blockchain.getPendingTransactions();

	console.log("Pending Transactions: ", pendingTransactions);

	const minePendingTransactions = () => {
		blockchain.minePendingTransactions();
		blockchain.resetPendingTransactions();
		dispatch(blockchainInit(blockchain));
		navigate("/");
	};

	return (
		<div className='container mt-4'>
			<h1>Pending Transactions</h1>
			<TransactionsTable transactions={pendingTransactions} />

			<button className='btn btn-primary' onClick={minePendingTransactions}>
				Start mining
			</button>
		</div>
	);
};

export default PendingTransactions;
