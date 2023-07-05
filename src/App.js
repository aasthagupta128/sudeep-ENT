import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
 
 
} from "react-router-dom";

//layouts
import RootLayout from "./layouts/RootLayout";


//pages
import Home from "./pages/Home";
import About from "./pages/about-page/About";
import Facilities from "./pages/facilities-page/Facilities";
import Mention from "./pages/mention-page/Mention"
import GoToTop from "./components/GotoTop"

import React from 'react';



const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="mention" element={<Mention />} />
      <Route path="facilities" element={<Facilities />} />
      
    </Route>
   
    
   
  )
);

function App() {
  

  return (<div>
    
    <RouterProvider router={router} /> ; 
    
    
  <GoToTop/>
  
  </div>)

}

export default App;
