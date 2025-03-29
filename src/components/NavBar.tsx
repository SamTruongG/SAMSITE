import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="NavBar top-0 w-full h-16 z-50 transition delay-100 duration-800 ease-in-out hover:-translate-y-1 hover:scale-101 hover: hover:shadow">
        <div className="left transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Sam Truong</div>
        <div className="right">
          <div className="placeholder transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Projects</div>
          <div className="placeholder transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">About</div>
        </div>
      </div>
      <div className="togglelight transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-101">
        <FaPlaneDeparture/>
      </div>

    </>
  );
}


export default NavBar;




