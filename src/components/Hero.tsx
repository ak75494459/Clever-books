import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>

      <img
        src="https://wallpaperaccess.com/full/1129018.jpg"
        alt="not showing"
        className="w-full max-h-[600px] object-cover"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-xl font-bold z-10 md:hidden ">
      Clever books
      </div>
      <div className="grid-cols-2">
      <div className="absolute top-[9rem] left-16  font-sans  md:block hidden ">
        <h1 className="text-white  my-2 text-6xl ">Every order</h1>
        <h1 className="text-white  mb-5  text-6xl ">
          fullfilled,{" "}
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
            on time.{" "}
          </span>
        </h1>
        <p className="text-white mb-10 ">
        Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts,<br />
        it brings the same technology used by large global brands to power fast-growing <br />
        startups. In short, we make supply meet demand, and then help you grow both.
        </p>
        <Button className="rounded-full bg-transparent border hover:bg-transparent z-50">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
            {" "}
            Get Started with Clever
          </span>
        </Button>
      </div>

      <img className="absolute right-16 w-56 top-10 hidden md:block lg:hidden"  src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" />
      </div>
    </>
  );
};

export default Hero;
