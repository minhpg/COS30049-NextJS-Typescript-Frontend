import { InfiniteQueryClientProvider } from "./query-client-provider";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfiniteQueryClientProvider>
          <main className="p-12">
      { children }
    </main>
    </InfiniteQueryClientProvider>

  );
};

export default DashboardLayout;
