import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeProofSection from "@/components/HomeProofSection";
import SliderSection from "@/components/SliderSection";
import SpreadSheet from "@/components/SpreadSheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import StickyScrollSection from "@/components/StickyScrollSection";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto flex-1 py-10">{children}</div>
      {/* <StickyScrollSection/> */}
      <HomeProofSection />
      <SpreadSheet />

      <Button className="rounded-full bg-transparent hover:bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 border-pink-500 text-pink-500 z-50 m-auto mt-10 hover:text-white border-2">
        <Link to="/features" className="">
          {" "}
          View all features{" "}
        </Link>
      </Button>
      <SliderSection />
      <Footer />
    </div>
  );
};

export default Layout;
