import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.component.scss";

const Navbar = () => {
	const blockchainService = useSelector((state) => state.blockchainService);
	const { blockchain } = blockchainService;
	const pendingTransactions = blockchain.getPendingTransactions();

	return (
		<nav className='navbar navbar-dark bg-dark'>
			<Link to='/' className='navbar-brand text-white'>
				Blockchain
			</Link>

			<div>
				<Link to='/settings'>
					<button className='btn btn-outline-light'>Settings</button>
				</Link>
				&nbsp;&nbsp;&nbsp;
				<Link to='/new/transaction'>
					<button className='btn btn-outline-light'>Create transaction</button>
				</Link>
				&nbsp;&nbsp;&nbsp;
				{pendingTransactions.length > 0 ? (
					<Link to='/new/transaction/pending'>
						<button className='btn btn-outline-light'>
							Pending transactions{" "}
							<span className='badge badge-light'>
								{pendingTransactions.length}
							</span>
						</button>
					</Link>
				) : (
					""
				)}
			</div>
		</nav>
	);
};

export default Navbar;
