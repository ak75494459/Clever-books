import { Link } from "react-router-dom";
import { BookOpenCheck } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import SolvedProblem from "./Product";
import MobileNav from "./MobileNav";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-start flex-row p-2 bg-black text-white opacity-75 fixed w-full top-0 z-50">
        <span className="font-bold gap-1 items-center mx-5 flex flex-row justify-start m-auto">
          <BookOpenCheck />
          <Link to="/">Clever Books</Link>
        </span>
        <div className="flex-row gap-4 justify-center items-center mx-auto hidden md:flex ">
          <span className="cursor-pointer hover:text-red-600"></span>
          <span
            className="cursor-pointer hover:text-red-600"
            onClick={() => {
              setShow(!show);
            }}
          >
            Product
          </span>
          <span className="cursor-pointer hover:text-red-600">pricing</span>
          <span className="cursor-pointer hover:text-red-600">Industry</span>
          <span className="cursor-pointer hover:text-red-600">About</span>
          <span className="cursor-pointer hover:text-red-600">Blog</span>
        </div>
        <div className="justify-end mx-5 hidden md:flex ">
          <Link
            to="/login"
            className="hover:text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 font-bold"
          >
            Log In
          </Link>
        </div>
        <div>
          <Button className="hidden md:flex rounded-full py-2 px-4 mx-3 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white">
            Reach Us
          </Button>
        </div>
        <div dir="rtl" className="md:hidden block justify-center flex me-auto">
          <MobileNav />
        </div>
      </nav>
      {show && <SolvedProblem />}
    </>
  );
};

export default Header;
