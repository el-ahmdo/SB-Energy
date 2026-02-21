import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full min-h-[630px] bg-cover bg-center flex flex-col items-start md:items-center md:justify-center"
      style={{
        backgroundImage: "url('/Assets/Hero.png')",
      }}>
      <div className="flex items-center flex-col w-full md:max-w-[75%] gap-10 md:gap-10 md:mt-0 mt-20 md:px-0 px-10 ">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Your Trusted Petroleum Products Partner
        </h1>

        <div className="w-[500px] h-20 text-center space-y-3">
          <p className="text-white text-[16px] w-full">
            Distribution, servicing, and procurement solutions for the petroleum{" "}
            <br />
            industry
          </p>

          <div className="flex md:gap-3 gap-1 md:px-0 px-10">
            {/* Accent div */}
            <div className="w-1 md:w-1.5 bg-[#00BF63] rounded" />

            {/* Quote text */}
            <p className="text-white text-[12px] text-center md:text-left leading-relaxed">
              “Building better infrastructure through reliable petroleum product
              supply and professional oil & gas services.”
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-4 ">
          <button className="px-6 py-2 bg-[#00BF63] text-white rounded-[5px] font-light text-[16px]">
            Discover More
          </button>
          <button className="px-6 py-2 border border-white text-white rounded-[5px] bg-transparent font-light">
            Contact Us{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
