import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Transaction } from "blockchain-demo/src/Transaction";
import { useSelector, useDispatch } from "react-redux";
import { blockchainInit } from "../../redux";

const CreateTransaction = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchainService.blockchain);

	let newTx = new Transaction();
	const walletKey = blockchain.walletKeys[0];

	const [toAddress, setToAddress] = useState("");
	const [amount, setAmount] = useState(0);

	const createTransaction = () => {
		newTx.fromAddress = walletKey.publicKey;
		newTx.toAddress = toAddress;
		newTx.amount = amount;
		newTx.signTransaction(walletKey.keyObj);
		console.log("New Transaction: ", newTx);

		blockchain.addTransaction(newTx);

		dispatch(blockchainInit(blockchain));
		navigate("/new/transaction/pending");

		newTx = new Transaction();
	};

	return (
		<div className='container mt-4'>
			<h1>Create Transaction</h1>
			<p>Transfer money to someone</p>
			<br />
			<div className='form-group'>
				<label htmlFor='fromAddress'>From Address</label>
				<input
					type='text'
					name='fromAddress'
					id='fromAddress'
					className='form-control'
					value={walletKey.publicKey}
					disabled
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='toAddress'>To address</label>
				<input
					type='text'
					name='toAddress'
					id='toAddress'
					className='form-control'
					value={toAddress}
					onChange={(e) => setToAddress(e.target.value)}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='amount'>Amount</label>
				<input
					type='number'
					name='amount'
					id='amount'
					className='form-control'
					value={amount}
					onChange={(e) => setAmount(Number(e.target.value))}
				/>
			</div>
			<button onClick={createTransaction} className='btn btn-primary'>
				Sign & create Transaction
			</button>
		</div>
	);
};

export default CreateTransaction;
