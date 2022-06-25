import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { blockchainInit } from "../../redux";

const Settings = () => {
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchainService.blockchain);
	const blockchainObj = blockchain.blockchainInstance;

	const [difficulty, setDifficulty] = useState(blockchainObj.difficulty);
	const [miningReward, setMiningReward] = useState(blockchainObj.miningReward);

	const saveSettings = (e) => {
		e.preventDefault();
		blockchain.blockchainInstance.difficulty = Number(difficulty);
		blockchain.blockchainInstance.miningReward = Number(miningReward);
		dispatch(blockchainInit(blockchain));
	};

	return (
		<div className='container mt-4'>
			<h1>Settings</h1>
			<br />
			<form onSubmit={saveSettings}>
				<div className='form-group'>
					<label htmlFor='difficulty'>Difficulty</label>
					<input
						type='number'
						className='form-control'
						id='difficulty'
						value={difficulty}
						onChange={(e) => setDifficulty(e.target.value)}
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='reward'>Mining Reward</label>
					<input
						type='number'
						className='form-control'
						id='reward'
						value={miningReward}
						onChange={(e) => setMiningReward(e.target.value)}
					/>
				</div>

				<div className='form-group'>
					<button className='btn btn-primary' type='submit'>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default Settings;
