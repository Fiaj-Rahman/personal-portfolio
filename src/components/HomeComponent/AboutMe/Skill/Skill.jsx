import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import './../Skill/Skill.css'
import { Link } from "react-router-dom";

const Skill = () => {
    return (
        <div className="skill">
            <div data-aos="flip-left"  data-aos-delay="200"  data-aos-duration="2000" className="mt-10">
            <Card
      shadow={false}
      className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center my-10"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./frontEnd.jpg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h1"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          Front End Development
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
     <Link to={'/frontEnd'}>
     <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
<span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
<span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Click Here</span>
</a>
     </Link>
        </Typography>
        
      </CardBody>
    </Card>
            </div>




            <div data-aos="flip-right"  data-aos-delay="250"  data-aos-duration="2000" className="my-10">
            <Card
      shadow={false}
      className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center my-10"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('./backEnd.jpg')] bg-cover bg-center my-10"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h1"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          Back End Development
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
       <Link to={'/backEnd'}>
       <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
<span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
<span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Click Here</span>
</a>
       </Link>
        </Typography>
        
      </CardBody>
    </Card>
            </div>
        </div>
    );
};

export default Skill;