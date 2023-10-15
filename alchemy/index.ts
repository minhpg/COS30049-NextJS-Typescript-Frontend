const { Network, Alchemy } = require("alchemy-sdk");

/** Alchemy SDK Settings */
const settings = {
	apiKey: process.env.ALCHEMY_API_KEY,
	network: Network.ETH_MAINNET,
};

/** Export Alchemy SDK Client */
export const alchemyClient = new Alchemy(settings);
