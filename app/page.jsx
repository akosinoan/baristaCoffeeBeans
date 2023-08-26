'use client';
import Link from "next/link";
import Contact from "./components/Contact";
import Branches from "./components/Branches";
import Products from "./components/Products";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Story from './components/Story';

const HomePage = () => {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
     <div>
         
          
          <About/>
          <Story/>
          <Products/>
          <Branches/>
          <Contact/>
          
    </div>
    
  )

}
export default HomePage;