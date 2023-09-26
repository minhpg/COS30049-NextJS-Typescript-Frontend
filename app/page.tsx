import Footer from "@/components/home/ui/Footer";
import Header from "@/components/home/ui/Navbar";

import Hero from "@/components/home/Hero";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
      <Header />
      <main className="grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
