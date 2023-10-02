/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, _) => {
		/** Allow GraphQL file imports */
		config.module.rules.push({
			test: /\.(graphql|gql)/,
			exclude: /node_modules/,
			loader: "graphql-tag/loader",
		});
		/** Allow top-level await compilation */
		config.experiments = { ...config.experiments, topLevelAwait: true };
		return config;
	},
};

module.exports = nextConfig;
