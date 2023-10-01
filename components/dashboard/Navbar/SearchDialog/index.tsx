import { Dispatch, SetStateAction, useContext } from "react";
import { Dialog } from "@headlessui/react";
import { Card, List, ListItem, TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";

import {
	SearchContext,
	SearchContextProvider,
	SearchDataResponse,
} from "./SearchContext";

const SearchDialogInternal = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const { setQuery } = useContext(SearchContext);
	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<div className="fixed inset-0 bg-black/30" aria-hidden="true" />
			<div className="fixed inset-x-0 top-0 z-50 m-1 opacity-100 scale-10">
				<Dialog.Panel className="m-2 md:mx-auto md:w-3/4 lg:w-1/2 md:mt-6">
					<TextInput
						icon={SearchIcon}
						placeholder="Search address/transaction hash"
						onChange={(event) => setQuery(event.target.value)}
					/>

					<Card className="max-w-screen mt-2 h-1/2 overflow-y-scroll no-scrollbar">
						<SearchResults />
					</Card>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};

const SearchDialog = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<SearchContextProvider>
			<SearchDialogInternal isOpen={isOpen} setIsOpen={setIsOpen} />
		</SearchContextProvider>
	);
};

const SearchResults = () => {
	const { data }: { data: SearchDataResponse } = useContext(SearchContext);

	if (!data) return null;

	const { transactions, addresses } = data;
	if ((transactions.length == 0 && addresses.length == 0) || !data) return null;

	return (
		<List>
			<ListItem key="addresses-section">
				<span className="font-bold">Addresses</span>
			</ListItem>
			{addresses.map(({ address }) => (
				<ListItem className="text-slate-500 hover:text-slate-700" key={address}>
					<Link href={`/dashboard/addresses/${address}`} key={address}>
						{address}
					</Link>
				</ListItem>
			))}
			<ListItem>
				<span className="font-bold" key="transactions-section">
					Transactions
				</span>
			</ListItem>
			{transactions.map(({ hash }) => (
				<ListItem className="text-slate-500 hover:text-slate-700" key={hash}>
					<Link href={`/dashboard/transactions/${hash}`} key={hash}>
						{hash}
					</Link>
				</ListItem>
			))}
		</List>
	);
};
export default SearchDialog;
