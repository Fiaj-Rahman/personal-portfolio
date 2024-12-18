import React, { useState } from "react";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import "./Project.css";
// import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Define your projects data here

  const projects = [
    // Define your projects data here
    // Example:

    {
      
      title: "MedConnect",
      image: "/website11.png",
      technologies: [
        <FaHtml5 />,
        <FaCss3Alt />,
        <SiTailwindcss />,
        <IoLogoJavascript />,
        <RiReactjsFill />,
        <FaNodeJs />,
        <SiExpress />,
        <SiMongodb />,
        <IoLogoFirebase />
      ],
      liveLink: "https://medconnect-online.web.app/",
      codeLink: "https://github.com/Fiaj-Rahman/Online-Medical-FrontEnd",
      backendLink:"https://github.com/Fiaj-Rahman/MedConnect-Server-Side"
    },



    {
      id: 1,
      title: "হাফেজপাড়া জনকল্যাণ সংস্থা",
      image: "./HJS.png",
      technologies: [
        <FaHtml5 />,
        <FaCss3Alt />,
        <SiTailwindcss />,
        <IoLogoJavascript />,
        <RiReactjsFill />,
        <FaNodeJs />,
        <SiExpress />,
        <SiMongodb />,
        <IoLogoFirebase />
      ],
      liveLink: "https://hafeezparaorg.web.app/",
      codeLink: "https://github.com/Fiaj-Rahman/HafeezParaOrg/tree/main",
  
    },



    {
      
      title: "Flight Booking",
      image: "/website12.png",
      technologies: [
        <FaHtml5 />,
        <FaCss3Alt />,
        <SiTailwindcss />,
        <IoLogoJavascript />,
        <RiReactjsFill />,
        <FaNodeJs />,
        <SiExpress />,
        <SiMongodb />,
        <IoLogoFirebase />
      ],
      liveLink: "https://exceltech-aa221.web.app/",
      codeLink: "https://github.com/Fiaj-Rahman/Excel-Tech-Client",
      backendLink:"https://github.com/Fiaj-Rahman/Excel-Tech-Server-Side"
    },



    
    {
      
      title: "Proquestor",
      image: "/proquestor.png",
      technologies: [
        <FaHtml5 />,
        <FaCss3Alt />,
        <SiTailwindcss />,
        <IoLogoJavascript />,
        <RiReactjsFill />,
        <FaNodeJs />,
        <SiExpress />,
        <SiMongodb />,
        <IoLogoFirebase />
      ],
      liveLink: "https://proquestor-2968f.web.app/",
      codeLink: "https://github.com/Fiaj-Rahman/Employee-Management-Client-site",
      backendLink:"https://github.com/Fiaj-Rahman/Employee-Management-server-site"
    },


    {
      id: 1,
      title: "Study Junction",
      image: "./studyJunction.png",
      technologies: [
        <FaHtml5 />,
        <FaCss3Alt />,
        <SiTailwindcss />,
        <IoLogoJavascript />,
        <RiReactjsFill />,
        <FaNodeJs />,
        <SiExpress />,
        <SiMongodb />,
        <IoLogoFirebase />
      ],
      liveLink: "https://study-junction-de8cf.web.app/",
      codeLink: "https://github.com/Fiaj-Rahman/Study-Junction-Client-site",
      backendLink:"https://github.com/Fiaj-Rahman/study-junction-server-site"
    },


    
    

    

    


    {
        id: 1,
        title: "Travel Spots",
        image: "./websiteTravelSpot.png",
        technologies: [
          <FaHtml5 />,
          <FaCss3Alt />,
          <SiTailwindcss />,
          <IoLogoJavascript />,
          <RiReactjsFill />,
          <FaNodeJs />,
          <SiMongodb />,
          <IoLogoFirebase />
        ],
        liveLink: "https://touristspots-8c438.web.app/",
        codeLink: "https://github.com/Fiaj-Rahman/Tourist-Spot-ClientSite",
        backendLink:"https://github.com/Fiaj-Rahman/Tourist-spot-server-site"
      },

      
    {
      
      title: "Online Shop",
      image: "/onlineShop.png",
      technologies: [
        <FaHtml5 />,
        <FaCss3Alt />,
        <SiTailwindcss />,
        <IoLogoJavascript />,
        <RiReactjsFill />,
        <FaNodeJs />,
        <SiExpress />,
        <SiMongodb />,
        <IoLogoFirebase />
      ],
      liveLink: "https://jobtask-384b3.web.app/",
      codeLink: "https://github.com/Fiaj-Rahman/ScicJobTask-Client",
      backendLink:"https://github.com/Fiaj-Rahman/ScicJobTask-Server"
    },



    {
      id: 2,
      title: "Real Estate",
      image: "./website01.png",
      technologies: [
        <FaHtml5 />,
        <FaCss3Alt />,
        <SiTailwindcss />,
        <IoLogoJavascript />,
        <RiReactjsFill />,
        <IoLogoFirebase />
      ],
      liveLink: "https://real-estate-b9e43.web.app/",
      codeLink: "https://github.com/Fiaj-Rahman/Residential",
    },

    {
      id: 3,
      title: "Typing Game",
      image: "./website08.png",
      technologies: [
        <FaHtml5 />,
        <FaCss3Alt />,
        <SiTailwindcss />,
        <IoLogoJavascript />,
      ],
      liveLink: "https://fiaj-rahman.github.io/TypingPracticeGame/",
      codeLink: "https://github.com/Fiaj-Rahman/TypingPracticeGame",
    },

    // {
    //   id: 4,
    //   title: "Bus Ticket",
    //   image: "./website04.png",
    //   technologies: [
    //     <FaHtml5 />,
    //     <FaCss3Alt />,
    //     <SiTailwindcss />,
    //     <IoLogoJavascript />,
    //   ],
    //   liveLink:
    //     "https://65d31cb86e7454dc96cbd028--dancing-malabi-134ab0.netlify.app/",
    //   codeLink: "https://github.com/Fiaj-Rahman/FR-travel",
    // },

    {
      id: 5,
      title: "Book Shop",
      image: "./website02.png",
      technologies: [
        <FaHtml5 />,
        <FaCss3Alt />,
        <SiTailwindcss />,
        <IoLogoJavascript />,
        <RiReactjsFill />,
      ],
      liveLink:
        "https://660531e754f0826a7ccab875--mellifluous-mermaid-fd16b5.netlify.app/",
      codeLink: "https://github.com/Fiaj-Rahman/Book-Read-Website",
    },

    // {
    //   id: 6,
    //   title: "Travel Agency",
    //   image: "./website05.png",
    //   technologies: [
    //     <FaHtml5 />,
    //     <FaCss3Alt />,
    //     <SiTailwindcss />,
    //     <IoLogoJavascript />,
    //   ],
    //   liveLink:
    //     "https://fiaj-rahman.github.io/TravelWebsite-responsive-mobile-and-deshtop-device/",
    //   codeLink:
    //     "https://github.com/Fiaj-Rahman/TravelWebsite-responsive-mobile-and-deshtop-device",
    // },

    // {
    //   id: 7,
    //   title: "Hockeys Shop",
    //   image: "./website06.png",
    //   technologies: [<FaHtml5 />, <FaCss3Alt />, <SiTailwindcss />],
    //   liveLink: "https://fiaj-rahman.github.io/hockeywebsite/",
    //   codeLink: "https://github.com/Fiaj-Rahman/hockeywebsite",
    // },

    {
      id: 8,
      title: "Govt School",
      image: "./website07.png",
      technologies: [<FaHtml5 />, <FaCss3Alt />, <SiTailwindcss />],
      liveLink: "https://fiaj-rahman.github.io/GovmentCollegeWebsite/",
      codeLink: "https://github.com/Fiaj-Rahman/GovmentCollegeWebsite",
    },

    // {
    //   id: 9,
    //   title: "Restaurant",
    //   image: "./website03.png",
    //   technologies: [
    //     <FaHtml5 />,
    //     <FaCss3Alt />,
    //     <SiTailwindcss />,
    //     <IoLogoJavascript />,
    //   ],
    //   liveLink: "https://superb-sfogliatella-20c2a6.netlify.app/",
    //   codeLink: "https://github.com/Fiaj-Rahman/Residential",
    // },

    // Add more projects here
  ];

  // Show only the first three cards if showAll is false
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div>
      {/* Your title */}
      <h1
        id="project"
        className="text-5xl text-purple-900 font-serif font-bold text-center my-10 uppercase bg-gradient-to-r from-gray-700 via-blue-200 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%"
      >
        PROJECT
      </h1>

      <div className="mt-10 frontEnd">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="card w-full bg-base-100 shadow-xl my-5 h-[400]"
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1500"
          >
            {/* Render project details */}
            {/* Image */}
            <figure className="px-10 pt-10 h-80">
              <img src={project.image} alt="Project" className="rounded-xl h-60 w-full" />
            </figure>
            <div className="card-body items-center text-center">
              {/* Title */}
              <h2 className="card-title">{project.title}</h2>
              {/* Technologies */}
              <p>
                <div className="flex justify-around gap-3 text-2xl my-5">
                  {project.technologies}
                </div>
              </p>
              {/* Buttons */}
              <div className="btns">
                <div className="my-5">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block"
                  >
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <span className="relative">LIVE</span>
                  </a>
                </div>
                <div className="my-5">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 relative rounded group text-white font-medium inline-block"
                  >
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <span className="relative">FrontEnd</span>
                  </a>
                </div>
                <div className="my-5">
                  <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 relative rounded group text-white font-medium inline-block"
                  >
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <span className="relative">BackEnd</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show All Button */}
      {!showAll && (
        <div className="text-center mt-5">
          <button
            onClick={toggleShowAll}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
