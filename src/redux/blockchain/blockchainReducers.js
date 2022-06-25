import { BLOCKCHAIN_INIT } from "./blockchainConstants";

export const blockchainReducer = (state = {}, action) => {
	switch (action.type) {
		case BLOCKCHAIN_INIT:
			return {
				...state,
				blockchain: action.payload,
			};
		default:
			return state;
	}
};
