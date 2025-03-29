import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
// import { Projects } from "./Pages/Projects";

function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-r from-[#000A3D] via-[#2A004F] to-[#48005A] min-h-screen w-full dark:bg-black flex flex-col">
        <NavBar />
        <div className="">
          {" "}
          {/* Ensure there's space for the navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Uncomment and add other routes as needed */}
            {/* <Route path="/projects" element={<Projects />} /> */}
          </Routes>
          <div>
            <h1>Scroll Down Test</h1>
            {[...Array(100)].map((_, i) => (
              <p key={i}>This is line {i + 1}</p>
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
