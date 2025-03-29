import React from "react";

export function Home() {
  return (
    <>
      <div className="PageContent">
        <h1 className="text-3xl w-200 absolute top-80 left-20">
          I specialise in building{" "}
          <span className="GradientText animate-gradient">AI Models</span> and{" "}
          <span className="GradientText animate-gradient">backend systems</span>
        </h1>
        <button className="getStarted">
          Get started
        </button>
        {/* <p className="mt-4">This content should be below the navbar.</p> */}
      </div>
      


      
    </>
  );
}
