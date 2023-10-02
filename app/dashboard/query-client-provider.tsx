"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

/** Query Client Provider for Infinite Scrolling */
export const InfiniteQueryClientProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
