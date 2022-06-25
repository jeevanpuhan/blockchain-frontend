import { BLOCKCHAIN_INIT } from "./blockchainConstants";

export const blockchainInit = (blockchainService) => {
	return {
		type: BLOCKCHAIN_INIT,
		payload: blockchainService,
	};
};
