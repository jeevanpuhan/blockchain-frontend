import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import BlockchainViewer from "./pages/BlockchainViewer/BlockchainViewer";
import Settings from "./pages/Settings/Settings";
import BlockchainService from "./services/BlockchainService";
import { blockchainInit } from "./redux";
import CreateTransaction from "./pages/CreateTransaction/CreateTransaction";
import PendingTransactions from "./pages/PendingTransactions/PendingTransactions";
import WalletBalance from "./pages/WalletBalance/WalletBalance";

function App() {
	const dispatch = useDispatch();
	const blockchainService = new BlockchainService();
	dispatch(blockchainInit(blockchainService));

	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<BlockchainViewer />} />
				<Route path='/settings' element={<Settings />} />
				<Route path='/new/transaction' element={<CreateTransaction />} />
				<Route
					path='/new/transaction/pending'
					element={<PendingTransactions />}
				/>
				<Route path='/wallet'>
					<Route path=':address' element={<WalletBalance />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
