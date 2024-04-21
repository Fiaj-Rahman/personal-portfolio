import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const PersonalInfo = () => {
    return (
        <div className='max-w-7xl m-auto' >
            <h1 id='aboutME' className='text-5xl text-center font-serif font-bold my-10 text-orange-500 bg-gradient-to-r from-orange-700 via-black to-green-400 text-transparent bg-clip-text animate-gradient bg-300%' data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out">ABOUT ME</h1>
            <div className="hero min-h-screen bg-base-200">
                
  <div className="hero-content flex-col lg:flex-row">
    <img src="./image02.png" className="md:max-w-sm rounded-lg shadow-2xl " data-aos="fade-up" data-aos-duration="2000"
    />
    <div className='w-3/4 m-auto text-center'>
      <h1 className="text-5xl font-bold font-serif" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000"><span className='text-blue-400'>So</span>, Who <span className='text-red-500'>am I</span>?</h1>
      <p className="py-6 text-justify" data-aos="zoom-in" data-aos-duration="2000"><span className='text-2xl font-bold'>Hi...!</span> I'm Fiaj Rahman, a passionate web designer and developer. With a creative flair and a knack for problem-solving, I thrive on crafting beautiful and functional websites that leave a lasting impression.My journey into the world of web design and development began with a curiosity for technology and a love for creativity. Over the years, I've honed my skills in various programming languages, design tools, and development frameworks to bring ideas to life on the digital canvas.Whether it's designing intuitive user interfaces, coding responsive layouts, or optimizing performance for seamless user experiences, I'm dedicated to delivering high-quality solutions tailored to your needs.<br/><br/>
     <span className='font-bold'>Let's collaborate and turn your vision into reality. Get in touch, and let's create something amazing together.</span>
</p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default PersonalInfo;