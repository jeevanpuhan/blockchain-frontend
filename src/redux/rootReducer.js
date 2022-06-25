import { combineReducers } from "redux";
import { blockchainReducer } from "./blockchain/blockchainReducers";

const rootReducer = combineReducers({
	blockchainService: blockchainReducer,
});

export default rootReducer;
