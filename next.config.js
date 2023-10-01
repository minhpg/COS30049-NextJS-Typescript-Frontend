/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(graphql|gql)/,
			exclude: /node_modules/,
			loader: "graphql-tag/loader",
		});
		config.experiments = { ...config.experiments, topLevelAwait: true };
		return config;
	},
};

module.exports = nextConfig;
