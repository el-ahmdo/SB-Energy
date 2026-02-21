import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-[600px] flex flex-col md:flex-row items-center justify-center px-4 md:px-30 py-10 gap-10">
      {/* Left Side */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Button */}
        <button className="px-4 py-2 bg-blue-100 text-[#004AAD1A] text-[#004AAD] rounded-full font-bold text-[12px] w-max">
          Who We Are
        </button>

        {/* Heading */}
        <h2 className="text-3xl md:text-[30.6px] font-bold text-gray-900">
          About SB Energy
        </h2>

        {/* Green horizontal line */}
        <div className="w-20 h-1 bg-[#00BF63] rounded"></div>

        {/* Paragraphs */}
        <div className="flex flex-col gap-2 text-[#333333CC] font-light text-[14px]">
          <p>
            SB Energy Resources Company Limited is an indigenous oil and gas
            company geared towards exploration and production services (E&P),
            oil and gas infrastructure provision and maintenance (refineries,
            pipelines, etc.), downstream distribution, and procurement of
            materials and equipment used in the petroleum industry.
          </p>
          <p>
            SB Energy Resources Company Limited is comprised of carefully
            assembled professionals from multidisciplinary backgrounds. Together
            with our in-house operations personnel, our team has multiple
            decades of experience across various professional fields in the oil
            industry.
          </p>
          <p>
            We leverage strong financial backing and international partnerships
            to support oil and gas services across the West-African sub-region
            through hard work, commitment to quality delivery, and
            professionalism.
          </p>
        </div>

        {/* Two columns with ticks */}
        <div className="flex flex-col md:flex-row gap-6 mt-4 text-[#333333CC] text-[14px] ">
          {/* First Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 p-2 rounded">
              ✅ <span>Indigenous Company</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded">
              ✅ <span>International Partnerships</span>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 p-2 rounded">
              ✅ <span>Multidisciplinary Team</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded">
              ✅ <span>Quality Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1  flex md:flex-row flex-col justify-center items-center gap-4">
        {/* Bottom-left div */}
        <div
          className="w-120  md:w-64 h-64 bg-cover bg-center rounded rounded-[8px]  md:mt-30 "
          style={{ backgroundImage: "url('/Assets/down.png')" }}></div>

        {/* Top-right div */}
        <div
          className="w-120  md:w-64 h-64 bg-cover bg-center rounded-[8px]  md:mb-20"
          style={{ backgroundImage: "url('/Assets/up.png')" }}></div>
      </div>
    </div>
  );
};

export default About;
