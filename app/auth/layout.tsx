import Footer from "@/components/dashboard/Footer";
import Navbar from "@/components/auth/Navbar";
import { Card, Flex } from "@tremor/react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col h-screen">
      <Navbar />
      <main className="my-6 flex-1 h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
