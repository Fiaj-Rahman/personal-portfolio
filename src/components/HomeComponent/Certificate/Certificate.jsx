import { Carousel } from "@material-tailwind/react";

const Certificate = () => {
    return (
        <div className="max-w-7xl m-auto">
            <h1 data-aos="zoom-in-down"  data-aos-duration="2000" className="text-5xl text-orange-900 font-serif font-bold text-center my-10 uppercase bg-gradient-to-r from-blue-700 via-black to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">CERTIFICATE</h1>

            <div>

            <Carousel loop={true} autoplay={true} className="rounded-xl">
      <img
        src="./certificate01.png"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="./certificate02.png"
        alt="image 2"
        className="h-full w-full object-cover object-center"
      />
      <img
        src="./certificate03.png"
        className="h-full w-full object-cover object-center"
      />
       <img
        src="./certificate04.png"
        className="h-full w-full object-cover object-center"
      />
       <img
        src="./certificate05.png"
        className="h-full w-full object-cover object-center"
      />
    </Carousel>

            </div>


        </div>
    );
};

export default Certificate;