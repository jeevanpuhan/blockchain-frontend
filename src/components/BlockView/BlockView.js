import React from "react";
import "./blockview.component.scss";

const BlockView = ({
	block = {},
	showTransactions,
	getBlockNumber,
	selectedBlock,
}) => {
	return (
		<div
			className='cardHolder mt-3 mb-3'
			onClick={() => showTransactions(block)}
		>
			<div
				className={`card ${block === selectedBlock ? "border-success" : ""}`}
				style={{ borderWidth: "4px" }}
			>
				<div className='card-body'>
					<h5 className='card-title'>
						Block {getBlockNumber(block)}
						{block.previousHash === "0" ? (
							<small className='text-muted'>&nbsp;(Genesis Block)</small>
						) : (
							""
						)}
					</h5>
				</div>

				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<span className=''>Hash</span>
						<br />
						<div
							className='text-truncate'
							style={{ color: "#" + block.hash.substring(0, 6) }}
						>
							<small className='font-weight-bold'>{block.hash}</small>
						</div>

						<br />
						<span className=''>Hash of previous block</span>
						<br />

						<div
							className='text-truncate'
							style={{ color: "#" + block.previousHash.substring(0, 6) }}
						>
							<small className='font-weight-bold'>{block.previousHash}</small>
						</div>
					</li>

					<li className='list-group-item'>
						<span className=''>Nonce</span>
						<br />
						<div className='text-truncate text-muted'>
							<small>{block.nonce}</small>
						</div>
					</li>

					<li className='list-group-item'>
						<span className=''>Timestamp</span>
						<br />
						<div className='text-truncate text-muted'>
							<small>{block.timestamp}</small>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default BlockView;
