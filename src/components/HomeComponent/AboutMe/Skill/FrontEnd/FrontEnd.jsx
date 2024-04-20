import React from 'react';
import '../Skill.css'

const FrontEnd = () => {
    return (
        <div className='max-w-7xl m-auto'>
            <h1 className='text-4xl font-serif font-bold text-center mt-10 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%'>Front End Development</h1>


            {/* cards */}

            <div className='mt-10 frontEnd'>

               
                <div className="card w-full bg-base-100 shadow-xl  my-5 h-96" data-aos="zoom-in-up"  data-aos-delay="50"  data-aos-duration="1500">
  <figure className="px-10 pt-10">
    <img src="./html.png" alt="html" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">HTML</h2>
    <p><div className="radial-progress text-primary font-bold " style={{"--value":95}} role="progressbar">95%</div></p>
    
  </div>
                </div>



                <div className="card w-full bg-base-100 shadow-xl  my-5 h-96" data-aos="zoom-in-up"  data-aos-delay="150"  data-aos-duration="1500">
  <figure className="px-10 pt-10">
    <img src="./css.png" alt="html" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">CSS</h2>
    <p><div className="radial-progress text-yellow-900 font-bold " style={{"--value":90}} role="progressbar">90%</div></p>
    
  </div>
                </div>






                <div className="card w-full bg-base-100 shadow-xl  my-5 h-96" data-aos="zoom-in-up"  data-aos-delay="250"  data-aos-duration="1500">
  <figure className="px-10 pt-10">
    <img src="./bootstrap.jpeg" alt="html" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">BOOTSTRAP</h2>
    <p><div className="radial-progress text-orange-900 font-bold " style={{"--value":99}} role="progressbar">99%</div></p>
    
  </div>
                </div>






                <div className="card w-full bg-base-100 shadow-xl  my-5 h-96" data-aos="zoom-in-down"  data-aos-delay="350"  data-aos-duration="1500">
  <figure className="px-10 pt-10">
    <img src="./tailwind.png" alt="html" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">TAILWIND</h2>
    <p><div className="radial-progress text-blue-400 font-bold " style={{"--value":98}} role="progressbar">98%</div></p>
    
  </div>
                </div>






                <div className="card w-full bg-base-100 shadow-xl  my-5 h-96" data-aos="zoom-in-down"  data-aos-delay="450"  data-aos-duration="1500">
  <figure className="px-10 pt-10">
    <img src="./js.png" alt="html" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">JAVASCRIPT</h2>
    <p><div className="radial-progress text-red-900 font-bold " style={{"--value":88}} role="progressbar">88%</div></p>
    
  </div>
                </div>






                <div className="card w-full bg-base-100 shadow-xl  my-5 h-96" data-aos="zoom-in-down"  data-aos-delay="550"  data-aos-duration="1500">
  <figure className="px-10 pt-10">
    <img src="./react.jpeg" alt="html" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">REACT</h2>
    <p><div className="radial-progress text-purple-900 font-bold " style={{"--value":90}} role="progressbar">90%</div></p>
    
  </div>
                </div>







                




                
            </div>
        </div>
    );
};

export default FrontEnd;