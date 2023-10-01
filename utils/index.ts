// Function for truncating long addresses for display
export const truncateAddress = (address: string) => {
	return (
		address.substring(0, 6) +
		"..." +
		address.substring(address.length - 7, address.length)
	);
};

// Function for rounding numerical value to US Dollar format
export const roundDollar = (num: number) => {
	if (!num) return 0.0;
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	return formatter.format(num);
};

// Function to add commas to large numbers
export const numberWithCommas = (x: number) => {
	if (x > 1) return x.toLocaleString("en-us");
	return x.toFixed(16).replace(/\.?0+$/, "");
};

// Function to convert unix timestamp to Date
export const timestampToDate = (timestamp: number) => {
	// https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
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

// Function to convert neo4j Datetime to Date
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

export const dateTimeToEpoch = (timestamp: string) => {
	const a = new Date(timestamp);
	return a.getTime() / 1000;
};

export const removeDuplicates = (a: any) => {
	const seen: any = {};
	const out = [];
	const len = a.length;
	let j = 0;
	for (let i = 0; i < len; i++) {
		const item = a[i];
		if (seen[item] !== 1) {
			seen[item] = 1;
			out[j++] = item;
		}
	}
	return out;
};

export const removeDuplicatedObjects = (array: any, field: any) => {
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

export const WeiToETH = (number: number) => {
	return numberWithCommas(number / 10 ** 18);
};
