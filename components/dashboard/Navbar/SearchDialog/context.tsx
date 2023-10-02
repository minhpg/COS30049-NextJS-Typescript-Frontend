import { ReactNode, createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { Addresses, Transactions } from "@/types";
import Search from "@/graphql/dashboard/Search.gql";

export interface SearchDataResponse {
	addresses: Addresses;
	transactions: Transactions;
}

const initData: SearchDataResponse = {
	addresses: [],
	transactions: [],
};

/** Seach Dialog context */
export const SearchDialogContext = createContext({
	query: "",
	setQuery: (query: string) => {},
	data: initData,
	loading: false,
});

/** Search Dialog context provider */
export const SearchDialogContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	// Stores queries
	const [query, setQuery] = useState("");
	const [finalQuery, setFinalQuery] = useState("");

	/** Delay fetching after user input to reduce fetching */
	useEffect(() => {
		const timeout = setTimeout(() => setFinalQuery(query), 300);
		return () => clearTimeout(timeout);
	}, [query]);

	/** Run fetch query when `finalQuery` changes */
	const { data, loading } = useQuery(Search, {
		variables: {
			query: finalQuery,
		},
	});

	return (
		<SearchDialogContext.Provider
			value={{
				query,
				setQuery,
				data,
				loading,
			}}
		>
			{children}
		</SearchDialogContext.Provider>
	);
};
