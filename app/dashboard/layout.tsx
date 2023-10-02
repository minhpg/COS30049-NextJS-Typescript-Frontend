export const dynamic = "force-dynamic"; // Force data-fetching on user request instead of pre-rendering

import Footer from "@/components/dashboard/Footer";
import Navbar from "@/components/dashboard/Navbar";

import { ApolloClientProvider } from "@/apollo/client-provider";

/** Dashboard root layout */
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col">
			<ApolloClientProvider>
				<Navbar />
				<main className="my-6 flex-1">{children}</main>
				<Footer />
			</ApolloClientProvider>
		</div>
	);
};

export default DashboardLayout;
