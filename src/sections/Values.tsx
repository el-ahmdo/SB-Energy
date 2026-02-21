import { HeartHandshake } from "lucide-react";

const CommitmentValues = () => {
  return (
    <section
      id="commitment"
      className="w-full py-20 px-4 md:px-20 flex justify-center bg-[#F5F5F5]">
      <div className="w-full max-w-6xl   flex flex-col md:flex-row md:justify-between overflow-hidden">
        {/* Left */}
        <div className="md:w-[65%] bg-[#004bade6] rounded-2xl text-white flex flex-col  items-left justify-center p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-left">
            Commitment & Values
          </h2>
          <p className="text-[12px] font-thin text-left w-full md:max-w-[70%] mt-2">
            Our operations are guided by a strict adherence to international
            standards and a deep commitment to sustainable practices
          </p>
        </div>

        {/* Right */}
        <div className="md:w-2.5/5  grid grid-cols-1 md:grid-cols-2 bg-[#F5F5F5] gap-6 p-10">
          <div className="flex flex-col rounded-2xl bg-white  shadow-sm p-6 items-start text-start pr-20">
            <div className="w-14 h-14 flex items-center justify-center bg-[#F5F5F5] rounded-full mb-3">
              <img src="/Assets/leaf.svg" alt="" />
            </div>
            <p className="font-semibold text-[#333333]">
              Environmental Responsibility{" "}
            </p>
          </div>

          <div className="flex flex-col rounded-2xl bg-white  shadow-sm p-6 items-start text-start pr-20">
            <div className="w-14 h-14 flex items-center justify-center bg-[#F5F5F5] rounded-full mb-3">
              <img src="/Assets/badge.svg" alt="" />
            </div>
            <p className="font-semibold text-[#333333]">Safety Excellence </p>
          </div>

          <div className="flex flex-col rounded-2xl bg-white  shadow-sm p-6 items-start text-start pr-20">
            <div className="w-14 h-14 flex items-center justify-center bg-[#F5F5F5] rounded-full mb-3">
              <img src="/Assets/medal.svg" alt="" />
            </div>
            <p className="font-semibold text-[#333333]">Quality Assurance </p>
          </div>

          <div className="flex flex-col rounded-2xl bg-white  shadow-sm p-6 items-start text-start pr-20">
            <div className="w-14 h-14 flex items-center justify-center bg-[#F5F5F5] rounded-full mb-3">
              <HeartHandshake size={24} className="text-[#004AAD]" />
            </div>
            <p className="font-semibold text-[#333333]">
              Customer Partnership{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentValues;
