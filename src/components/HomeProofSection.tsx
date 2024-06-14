
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HomeProofCC1 from "./crouselComponents/HomeProofCC1";
import HomeProofCC2 from "./crouselComponents/HomeProodCC2";

const HomeProofSection = () => {
  return (
    <>
      <div className="flex overflow-hidden h-20 ">
        <div className="flex space-x-16 animate-loop-scroll">
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abd73c0bc5eae6cf1aa65e_samosa%20party%20logo.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ec91cc7a39f32fdd8_drip%20project.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d19ebc9f547ee13d1_aroka.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471e19ebc9f547ee1453_the%20whole%20truth.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aabb032484e3993df3d_wow.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d9f187d3886afcf0c_swtantra.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cdc92e571f2b995d1_bakers%20dozen.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abd73c0bc5eae6cf1aa65e_samosa%20party%20logo.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ec91cc7a39f32fdd8_drip%20project.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d19ebc9f547ee13d1_aroka.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471e19ebc9f547ee1453_the%20whole%20truth.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aabb032484e3993df3d_wow.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471d9f187d3886afcf0c_swtantra.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg"
            className="max-w-none "
          />
          <img
            loading="lazy"
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cdc92e571f2b995d1_bakers%20dozen.svg"
            className="max-w-none "
          />
        </div>
      </div>

      <Carousel className="mt-10">
        <CarouselContent>
          <CarouselItem><HomeProofCC1/></CarouselItem>
          <CarouselItem><HomeProofCC2/></CarouselItem>
        </CarouselContent>
        <div className="">
        <CarouselPrevious className="relative top-0 ml-[5rem]  bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white " />
        <CarouselNext className="relative top-0 mr-[10rem] bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white" />
        </div>
      </Carousel>
    </>
  );
};

export default HomeProofSection;
