import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="main">
          <Outlet />
        </div>
      </main>
      <Footer/>
        
      
    </div>
  );
}
