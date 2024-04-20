import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import FrontEnd from "../HomeComponent/AboutMe/Skill/FrontEnd/FrontEnd";
import BackEnd from "../HomeComponent/AboutMe/Skill/BackEnd/BackEnd";

  
const router = createBrowserRouter([
    
    {
      path: '/',
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/frontEnd',
          element: <FrontEnd></FrontEnd>
      },
      {
        path: '/backEnd',
        element: <BackEnd></BackEnd>
    },
      ]
    },
  ]);



  export default router;