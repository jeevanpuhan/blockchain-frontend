import React from "react";
import { Link } from "react-router-dom";

const TransactionsTable = ({ transactions = [] }) => {
	return (
		<>
			{transactions.length === 0 ? <p>This block has no transactions</p> : ""}
			{transactions.length > 0 && (
				<table className='table table-hover table-striped'>
					<thead>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>From</th>
							<th scope='col'>To</th>
							<th scope='col'>Amount</th>
							<th scope='col'>Timestamp</th>
							<th scope='col'>Valid?</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map((tx, index) => (
							<tr key={index}>
								<td>{index + 1}</td>
								<td className='text-truncate' style={{ maxWidth: "100px" }}>
									{tx.fromAddress === null ? (
										"System"
									) : (
										<Link to={`/wallet/${tx.fromAddress}`}>
											{tx.fromAddress}
										</Link>
									)}
								</td>
								<td className='text-truncate' style={{ maxWidth: "100px" }}>
									<Link to={`/wallet/${tx.toAddress}`}>{tx.toAddress}</Link>
								</td>
								<td>
									{tx.amount}
									{tx.fromAddress === null ? (
										<span className='text-muted'>
											<br />
											<small>(Block reward)</small>
										</span>
									) : (
										""
									)}
								</td>
								<td>
									{tx.timestamp}
									<br />
									<span className='text-muted'>
										<small>{tx.timestamp}</small>
									</span>
								</td>
								<td style={{ maxWidth: "40px" }}>
									<span>{tx.isValid() ? "Valid" : "Not Valid"}</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default TransactionsTable;
