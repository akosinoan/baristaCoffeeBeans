
'use client';
import Link from "next/link";
import Image from "next/image";
import {useState} from 'react';

const Navbar = () =>{
    const [activeNav='home',setActiveNav] = useState();
    
    const handleClick =(e)=>{
    
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const element = document.getElementById(targetId);
        const headerOffset = 45;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });

        setActiveNav(targetId);
        
       // document.getElementById("navbar-toggler").click();
    };
      
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
            <Link className="navbar-brand" onClick={handleClick} href="#home">
    <img
      src="/BaristaLogo.png"
      width={128}
      height={88}
      alt="Barista Coffee Beans"
    /></Link>
            <button id="navbar-toggler" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className={`nav-link ${activeNav=='about'?'active':''}`} onClick={handleClick} href="#about">About</Link></li>
                    <li className="nav-item"><Link className={`nav-link ${activeNav=='about'?'active':''}`} onClick={handleClick} href="#story">Story</Link></li>
                    
                    <li className="nav-item"><Link className={`nav-link ${activeNav=='products'?'active':''}`} onClick={handleClick} href="#products">Products</Link></li>
                    <li className="nav-item"><Link className={`nav-link ${activeNav=='branches'?'active':''}`} onClick={handleClick} href="#branches">Branches</Link></li>
                    <li className="nav-item"><Link className={`nav-link ${activeNav=='contact'?'active':''}`} onClick={handleClick} href="#contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;