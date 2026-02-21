const Mission = () => {
  return (
    <div
      id="mission"
      className="w-full min-h-60 flex md:flex-row flex-col justify-between bg-[#F5F5F5] items-center  md:px-30 px-2 py-10 gap-10">
      <div className="flex-1 w-full bg-white flex flex-col p-4 rounded-tl rounded-bl border-l-[2.5px] border-l-[#00BF63] min-h-40  ">
        <div className="flex w-full items-center">
          <div className="w-10 h-10 rounded flex justify-center bg-[#00BF631A] items-center">
            <img
              src="/Assets/mision.svg"
              width="20px"
              height="20px"
              alt="Logo"
            />
          </div>
          <h2 className="ml-2 text-[20px] font-semibold capitalize">
            Our Mission
          </h2>
        </div>

        <p className="text-[14px] font-thin mt-2 text-[#333333CC]">
          To provide reliable distribution of premium petroleum
          products,professional equipment servicing, and efficient procurement
          solutions that support infrastructure development and industrial
          growth.
        </p>
      </div>
      <div className="flex-1 w-full bg-white flex flex-col p-4 rounded-tl rounded-bl border-l-[2.5px] border-l-[#004AAD] min-h-40  ">
        <div className="flex w-full items-center">
          <div className="w-10 h-10 rounded flex justify-center bg-[#004AAD1A] items-center">
            <img
              src="/Assets/vision.svg"
              width="20px"
              height="20px"
              alt="Logo"
            />
          </div>
          <h2 className="ml-2 text-[20px] font-semibold capitalize">
            Our vision
          </h2>
        </div>

        <p className="text-[14px] font-thin mt-2 text-[#333333CC]">
          To become one of the leading oil and gas services companies in the
          West-African sub-region through commitment to quality delivery and
          professionalism.
        </p>
      </div>{" "}
    </div>
  );
};

export default Mission;
