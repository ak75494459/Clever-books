import p1 from "@/assets/p1.jpg"
import p2 from "@/assets/p2.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

const SliderSection = () => {
    return(
        <div className="main bg-gray-100 mt-20">
        <div className="text-center mt-20">
            <h1 className="font-bold text-3xl">Get Crest and get...</h1>
        </div>
        <div className="mt-10">
        <Carousel>
        <CarouselContent>
          <CarouselItem><img className="m-auto w-1/2 rounded mb-20 " src={p1} alt="" /></CarouselItem>
          <CarouselItem><img className="m-auto w-1/2 rounded mb-20"   src={p2} alt="" /></CarouselItem>
          <CarouselItem><img className="m-auto w-1/2 rounded mb-20"  src={p1} alt="" /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-[16rem] border-pink-500 text-pink-500  hover:text-pink-500" />
        <CarouselNext className="mr-[16rem] border-pink-500 text-pink-500 hover:text-pink-500"  />
      </Carousel>
        </div>
    </div>
    )
   
}

export default SliderSection;