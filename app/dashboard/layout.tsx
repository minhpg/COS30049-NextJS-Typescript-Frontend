import Footer from "@/components/dashboard/Footer";
import Navbar from "@/components/dashboard/Navbar";
import { ApolloClientProvider } from "@/apollo/client-provider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <ApolloClientProvider>
        <Navbar />
        <main className="my-6">{children}</main>
        <Footer />
      </ApolloClientProvider>
    </div>
  );
};

export default DashboardLayout;
