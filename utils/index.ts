/** Truncate long addresses or hashes for display  */
export const truncateAddress = (address: string) => {
	return (
		address.substring(0, 6) +
		"..." +
		address.substring(address.length - 7, address.length)
	);
};

/** Rounding numerical value to US Dollar format */
export const roundDollar = (num: number) => {
	if (!num) return 0.0;
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	return formatter.format(num);
};

/** Function to add commas to large numbers */
export const numberWithCommas = (x: number) => {
	if (x > 1) return x.toLocaleString("en-us");
	return x.toFixed(16).replace(/\.?0+$/, "");
};

/**
 * Convert unix timestamp to Date
 *
 * https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
 */
export const timestampToDate = (timestamp: number) => {
	const a = new Date(timestamp * 1000);
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const year = a.getFullYear();
	const month = months[a.getMonth()];
	const date = a.getDate();
	const hour = a.getHours();
	const min = a.getMinutes();
	const sec = a.getSeconds();
	const time =
		date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
	return time;
};

/** Convert neo4j Datetime to Date */
export const dateTimetoDate = (timestamp: string) => {
	const a = new Date(timestamp);
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const year = a.getFullYear();
	const month = months[a.getMonth()];
	const date = a.getDate();
	const hour = a.getHours();
	const min = a.getMinutes();
	const sec = a.getSeconds();
	const time =
		date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
	return time;
};

/** Convert Neo4J Datetime to unix timestamp */
export const dateTimeToEpoch = (timestamp: string) => {
	const a = new Date(timestamp);
	return a.getTime() / 1000;
};

/** Remove duplicated strings from array */
export const removeDuplicates = (array: string[]) => {
	const seen: { [key: string]: number } = {};
	const out = [];
	let j = 0;
	for (let i = 0; i < array.length; i++) {
		const item = array[i];
		if (seen[item] !== 1) {
			seen[item] = 1;
			out[j++] = item;
		}
	}
	return out;
};

/** Remove duplicated objects from array given an object property field */
export const removeDuplicatedObjects = (
	array: { [key: string]: any }[],
	field: string
) => {
	const uniqueIds: any = [];
	const unique = array.filter((element: any) => {
		if (!uniqueIds.includes(element[field])) {
			uniqueIds.push(element[field]);
			return true;
		}
		return false;
	});
	return unique;
};

/** Convert from Wei to ETH for display */
export const WeiToETH = (number: number) => {
	return numberWithCommas(number / 10 ** 18);
};
