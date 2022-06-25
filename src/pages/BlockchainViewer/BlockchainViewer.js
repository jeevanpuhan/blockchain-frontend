import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import BlockView from "../../components/BlockView/BlockView";
import TransactionsTable from "../../components/TransactionsTable/TransactionsTable";
import "./blockchain-viewer.component.scss";

const BlockchainViewer = () => {
	const blockchainService = useSelector((state) => state.blockchainService);
	const { blockchain } = blockchainService;
	const blocks = blockchain.getBlocks();

	const [selectedBlock, setSelectedBlock] = useState(blocks[0]);

	const showTransactions = (block) => {
		setSelectedBlock(block);
	};

	const getBlockNumber = (block) => {
		return blocks.indexOf(block) + 1;
	};

	return (
		<Fragment>
			<div className='container mt-4'>
				<h1>Blocks on chain</h1>
				<p>
					Each card represents a block on the chain. Click on a block to see the
					transactions stored inside
				</p>

				{blocks.map((block) => (
					<BlockView
						key={block.hash}
						block={block}
						showTransactions={() => showTransactions(block)}
						getBlockNumber={() => getBlockNumber(block)}
						selectedBlock={selectedBlock}
					/>
				))}
			</div>
			<br />
			<br />
			<div className='container'>
				<h1>Transactions inside block {getBlockNumber(selectedBlock)}</h1>
				<TransactionsTable transactions={selectedBlock.transactions} />
			</div>
		</Fragment>
	);
};

export default BlockchainViewer;
