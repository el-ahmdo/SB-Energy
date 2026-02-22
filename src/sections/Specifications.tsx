const Specifications = () => {
  return (
    <div
      id="specifications"
      className="w-full md:min-h-120 bg-[#F5F5F5] flex flex-col items-center pb-[100px]   space-y-2.5">
      <h2 className=" text-[18px] font-semibold text-[#333333] ">
        Technical Specifications
      </h2>
      <p className="text-[14px] font-light text-[#33333399]">
        Standard compliance and application details
      </p>
      <div className="md:w-[70%] w-full h-[300px] bg-white flex md:flex-row flex-col rounded-2xl ">
        <div className="flex-col p-8 w-full flex-1 flex justify-between">
          <h3 className="text-[#004AAD] text-[16px] font-semibold">
            Properties
          </h3>

          <div className="w-full flex justify-between">
            <p className="text-[14px] text-[#33333399] font-light">Grade</p>
            <p className="text-[14px] text-black font-semibold">
              Bitumen 60/70
            </p>
          </div>

          <div className="w-full flex justify-between">
            <p className="text-[14px] text-[#33333399] font-light">
              Penetration
            </p>
            <p className="text-[14px] text-black font-semibold">60–70 dmm</p>
          </div>

          <div className="w-full flex justify-between">
            <p className="text-[14px] text-[#33333399] font-light">Standard</p>
            <p className="text-[14px] text-black font-semibold">
              ASTM Compliant{" "}
            </p>
          </div>

          <div className="w-full flex justify-between">
            <p className="text-[14px] text-[#33333399] font-light">
              Availability
            </p>
            <p className="text-[14px] text-[#00BF63] font-semibold">
              Bitumen 60/Availability
            </p>
          </div>
        </div>
        <div className="flex-1 bg-[#FAFAFA] flex-col p-8 w-full flex-1 flex justify-between">
          <h3 className="text-[#004AAD] text-[16px] font-semibold">
            Applications{" "}
          </h3>
          <div className="flex w-full gap-1 items-center">
            <div className="w-2 h-2 rounded-full bg-[#004AAD]" />
            <p className="text-[14px] font-thin text-black">
              Road construction and paving
            </p>
          </div>

          <div className="flex w-full gap-1 items-center">
            <div className="w-2 h-2 rounded-full bg-[#004AAD]" />
            <p className="text-[14px] font-thin text-black">
              Highway infrastructure development{" "}
            </p>
          </div>

          <div className="flex w-full gap-1 items-center">
            <div className="w-2 h-2 rounded-full bg-[#004AAD]" />
            <p className="text-[14px] font-thin text-black">
              Asphalt production{" "}
            </p>
          </div>

          <div className="flex w-full gap-1 items-center">
            <div className="w-2 h-2 rounded-full bg-[#004AAD]" />
            <p className="text-[14px] font-thin text-black">
              Industrial flooring{" "}
            </p>
          </div>

          <div className="flex w-full gap-1 items-center">
            <div className="w-2 h-2 rounded-full bg-[#004AAD]" />
            <p className="text-[14px] font-thin text-black">
              Waterproofing applications{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
