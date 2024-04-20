import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Qualification = () => {




    return (
        <div className="max-w-7xl m-auto bg-purple-900 text-white rounded-lg">
            
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-10">
  <li data-aos="zoom-in-up"  data-aos-delay="100"  data-aos-duration="2000">
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic text-yellow-900">2020 - 2023</time>
      <div className="text-lg font-black">Daffodil International University</div>
      Department of Computer Science & Engineering
    </div>
    <hr/>
  </li>
  <li  data-aos="zoom-in-up"  data-aos-delay="250"  data-aos-duration="2000">
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic text-yellow-900">2016 - 2018</time>
      <div className="text-lg font-black">Karnafuly Government College</div>
      Group of Science
    </div>
    <hr />
  </li>
  <li  data-aos="zoom-in-up"  data-aos-delay="350"  data-aos-duration="2000">
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic text-yellow-900">2014 - 2016</time>
      <div className="text-lg font-black">Bangladesh Noubahini School & College Kaptai</div>
      Group of Science
    </div>
    <hr />
  </li>
  
</ul>



              
            
            {/* <div className="w-[32rem] m-auto my-10 py-10 ">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader data-aos="fade-up" data-aos-duration="3000">
            <TimelineIcon className="p-0">
              <Avatar size="sm" src="./DIU.jpeg" alt="user 1" withBorder />
            </TimelineIcon>
            <Typography className="text-xl" color="green">
              Daffodil International University
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200">
            <Typography className="text-xl" color="green">
                <span className="font-bold ">Department :</span> CSE
            </Typography>
            <Typography color="green" className="font-normal text-gray-600">
              Passing Year : 2020 - 2023
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader data-aos="fade-up" data-aos-duration="3000" data-aos-delay="400">
            <TimelineIcon className="p-0">
              <Avatar size="sm" src="./Karnufully.jpeg" alt="user 2" withBorder />
            </TimelineIcon>
            <Typography className="text-xl" color="orange">
            Karnafuli Govt College
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="600">
          <Typography className="text-xl" color="orange">
            Group : Science
            </Typography>
            <Typography color="orange" className="font-normal text-gray-600">
              Passing Year: 2016 - 2018
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader data-aos="fade-up" data-aos-duration="3000" data-aos-delay="800">
            <TimelineIcon className="p-0">
              <Avatar size="sm" src="./BN.jpeg" alt="user 3" withBorder />
            </TimelineIcon>
            <Typography className="text-xl" color="purple">
            Bangladesh Noubahini School &<br /> College Kaptai
            </Typography>
          </TimelineHeader>
          <TimelineBody data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1000">
          <Typography className="text-xl" color="purple">
            Group : Science
            </Typography>
            <Typography color="gary" className="font-normal text-gray-600">
              Passing Year : 2014 - 2016
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div> */}

        </div>
    );
};

export default Qualification;