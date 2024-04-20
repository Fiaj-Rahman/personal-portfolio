import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import 'animate.css';
import TypingAnimation from '../TypingAnimation/TypingAnimation';
import './../../ComponentCSS/ComponentCSS.css'
import SocialIcon from '../SocialIcon/SocialIcon';
import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileRetro } from "react-icons/fa6";
 

// animate__animated animate__bounce animate__infinite animate__delay-3s	


const FrontPage = () => {

  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);


    return (
        <div >
            <div className="hero min-h-screen bg-base-200 ">
  <div className=" hero-content flex-col lg:flex-row-reverse">
    <div>
    <img src="./logo.png"  data-aos="zoom-in-down"  data-aos-delay="50"  data-aos-duration="2000" className=" rounded-full shadow-2xl"/>
    </div>
    <div>
      <h1 className="text-3xl font-bold"><TypingAnimation></TypingAnimation></h1>
      <p className="py-6 text-justify font-bold">Hey there! I'm Fiaj Rahman, a web designer and developer with a passion for creating beautiful and functional digital experiences. With expertise in HTML, CSS, JavaScript, React.js and more, I specialize in crafting websites and applications that stand out.<br />
<span className='text-orange-900 font-bold animate__animated animate__flipInX animate__infinite animate__delay-1s animate__slower'>Let's collaborate and build something amazing together!</span></p>
      

{/* social Media  */}
        <SocialIcon></SocialIcon>



  {/* button  */}

      <div className=' lg:flex gap-3 ' >

      <div className='mt-5'>
        <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Download CV</span>
<span className="relative invisible">Download CV</span>
</a>
        </div>

    
        <div className='mt-5'>
        <a href="#_" onClick={handleOpen} className="relative inline-flex items-center px-11 py-2 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative">Contact Me</span>
</a>



<Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        
        <DialogBody>

        {/* import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileRetro } from "react-icons/fa6"; */}

        <div className="card w-96 bg-base-100 shadow-xl m-auto">
  <figure className="px-10 pt-10">
    <img src="./logo.png" alt="Shoes" className="rounded-xl w-20" />
  </figure>
  <div className="card-body items-center text-center bg-gray-200"> 
    <h2 className="card-title font-bold font-serif">Fiaj Rahman Nehal</h2>
    <p className='flex items-center gap-2 font-bold font-serif'><span><FaMobileRetro/></span> <span>+8801690017320</span></p>

    <p className='flex items-center gap-2 font-bold font-serif'><span><MdEmail/></span> <span>fiajrahman88@gmail.com</span></p>

    <p className='flex items-center gap-2 font-bold font-serif'><span><FaLocationDot/></span> <span>Rangunia,Chittagong,Bangladesh</span></p>
   
  </div>
</div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="blue"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Done</span>
          </Button>
          
        </DialogFooter>
      </Dialog>
    







        </div>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default FrontPage;