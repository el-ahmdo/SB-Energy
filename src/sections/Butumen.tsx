import { Check, Phone } from "lucide-react";
const Butumen = () => {
  return (
    <div
      id="bitumen"
      className="w-full flex md:flex-row flex-col-reverse p-4   bg-[#F5F5F5] md:pl-0  md:pr-0 md:py-30 ">
      <div className="md:w-[60%] space-y-8 w-full flex flex-col  md:pl-30 bg-white py-10  px-2 md:pr-25">
        <div className="self-start px-4 py-2 rounded-full text-[13px] text-[#DB0707] font-semibold bg-[#DB07071A]">
          IN STOCK NOW
        </div>

        <h2 className="text-[40px] font-bold md:text-start text-center mt-2">
          Premium Bitumen 60/70
        </h2>
        <p className="text-[#333333B2] font-light">
          Currently, we have 1000MT of high-quality Bitumen 60/70 available for
          immediate supply to support road construction and infrastructure
          projects across Nigeria.
        </p>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex   items-center justify-between p-4 gap-2 border border-[#F5F5F5] shadow rounded  ">
            <div className="w-10 h-10 bg-[#00BF6333] rounded-full flex justify-center items-center">
              <Check size={20} color="#009E52" />
            </div>
            <h2 className="text-[14px] text-[#333333] capitalize flex-1">
              High-quality grade Bitumen{" "}
            </h2>
          </div>
          <div className="flex   items-center justify-between p-4 gap-2 border border-[#F5F5F5] shadow rounded ">
            <div className="w-10 h-10 bg-[#00BF6333] rounded-full flex justify-center items-center ">
              <Check size={20} color="#009E52" />
            </div>
            <h2 className="text-[14px] text-[#333333] capitalize flex-1">
              Ready stock – 1000MT <br />
              available
            </h2>
          </div>
          <div className=" flex   items-center justify-between p-4 gap-2 border border-[#F5F5F5] shadow rounded ">
            <div className="w-10 h-10 bg-[#00BF6333] rounded-full flex justify-center items-center ">
              <Check size={20} color="#009E52" />
            </div>
            <h2 className="text-[14px] text-[#333333] capitalize flex-1">
              Certified and quality <br />
              assured{" "}
            </h2>
          </div>
          <div className="flex   items-center justify-between p-4 gap-2 border border-[#F5F5F5] shadow rounded ">
            <div className="w-10 h-10 bg-[#00BF6333] rounded-full flex justify-center items-center ">
              <Check size={20} color="#009E52" />
            </div>
            <h2 className="text-[14px] text-[#333333] capitalize flex-1">
              Competitive market pricing
            </h2>
          </div>
        </div>

        <div className="md:w-[60%] w-full flex md:flex-row flex-col gap-2">
          <div className="flex-1 flex justify-center items-center font-semibold rounded p-3 bg-[#00BF63] text-white text-[14px] ">
            Request a Quote
          </div>
          <div className="flex-1 border flex justify-center items-center rounded border-[#004AAD] text-[#004AAD] p-3 flex gap-2">
            <Phone size={14} /> <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="md:w-[40%] w-full bg-[#004AAD0D] p-2 flex justify-center items-center rounded">
        <div className="flex flex-col gap-0  md:mr-60 ">
          <img
            src="../Assets/bit.png"
            alt=""
            className="w-[450px] h-[280px] rounded-tl-xl rounded-tr-xl  z-100"
          />
          <div className="w-[450px] bg-black h-20 rounded-bl-xl rounded-br-xl mb-2 p-3 flex flex-col gap-1">
            <h2 className="text-white text-30px font-semibold ">
              1000MT Available
            </h2>
            <p className="font-thin text-[14px] text-white">
              Immediate Dispatch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Butumen;
