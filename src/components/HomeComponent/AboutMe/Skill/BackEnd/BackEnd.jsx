import React from 'react';

const BackEnd = () => {
    return (
        <div>
            <h1 className='text-4xl font-serif font-bold text-center mt-10 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%'>Back End Development</h1>


            <div className='mt-10 frontEnd'>

               
                <div className="card w-full bg-base-100 shadow-xl  my-5 h-96" data-aos="zoom-in-up"  data-aos-delay="50"  data-aos-duration="1500">
  <figure className="px-10 pt-10">
    <img src="./nodejs.png" alt="html" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">NODE JS</h2>
    <p><div className="radial-progress text-primary font-bold " style={{"--value":80}} role="progressbar">80%</div></p>
    
  </div>
                </div>



                <div className="card w-full bg-base-100 shadow-xl  my-5 h-96" data-aos="zoom-in-up"  data-aos-delay="150"  data-aos-duration="1500">
  <figure className="px-10 pt-10">
    <img src="./expressjs.png" alt="html" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">EXPRESS JS</h2>
    <p><div className="radial-progress text-yellow-900 font-bold " style={{"--value":70}} role="progressbar">70%</div></p>
    
  </div>
                </div>






                <div className="card w-full bg-base-100 shadow-xl  my-5 h-96" data-aos="zoom-in-up"  data-aos-delay="250"  data-aos-duration="1500">
  <figure className="px-10 pt-10">
    <img src="./api.png" alt="html" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">API</h2>
    <p><div className="radial-progress text-orange-900 font-bold " style={{"--value":82}} role="progressbar">82%</div></p>
    
  </div>
                </div>






                <div className="card w-full bg-base-100 shadow-xl  my-5 h-96" data-aos="zoom-in-down"  data-aos-delay="350"  data-aos-duration="1500">
  <figure className="px-10 pt-10">
    <img src="./mongoDB.png" alt="html" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">MONGO-DB</h2>
    <p><div className="radial-progress text-blue-400 font-bold " style={{"--value":85}} role="progressbar">85%</div></p>
    
  </div>
                </div>




                
            </div>


        </div>
    );
};

export default BackEnd;