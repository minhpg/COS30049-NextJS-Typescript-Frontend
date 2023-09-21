import Footer from "@/components/dashboard/Footer";
import Navbar from "@/components/dashboard/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <Navbar />
     <main className="my-6">
      {children}
      </main>
    <Footer />
  </>;
};

export default DashboardLayout;
