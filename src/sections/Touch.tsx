import { Phone, MapPin, Mail, Send } from "lucide-react";

const GetInTouch = () => {
  return (
    <section id="touch" className="w-full py-20 px-4 md:px-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-[30px] font-semibold">Get in Touch</h2>
        <p className="text-[#333333B2] font-light text-[14px] mt-2">
          Contact us for quotes, inquiries, or partnership opportunities
        </p>
      </div>

      <div className="flex md:flex-row md:justify-center flex-col min-h-100 gap-10">
        <div className="md:w-[30%] flex flex-col gap-4 rounded-xl ">
          <div className="w-full rounded-xl flex-1  cursor-pointer flex gap-3 p-4 border bg-[#F5F5F54D] border-[#E5E5E5]">
            <div>
              <MapPin size={20} className="text-[#004AAD]" />{" "}
            </div>
            <div className="flex flex-col max-w-[60%]">
              <p className="text-[14px] font-semibold">Head Office</p>
              <p className="text-[12px] font-light leading-5.5 text-[#333333CC]">
                No.6 Yankari Crescent,Amssco Platinum City,Galadimawa District,
                Abuja-FCT
              </p>
            </div>
          </div>
          <div className="w-full rounded-xl flex-1 cursor-pointer flex gap-3 p-4 border bg-[#F5F5F54D] border-[#E5E5E5]">
            <div>
              <MapPin size={20} className="text-[#004AAD]" />{" "}
            </div>
            <div className="flex flex-col max-w-[60%]">
              <p className="text-[14px] font-semibold">Factory</p>
              <p className="text-[12px] font-light leading-5.5 text-[#333333CC]">
                Dankande Industrial Layout,Off Kaduna-Zaria Road, <br />
                Kaduna
              </p>
            </div>
          </div>

          <div className="w-full rounded-xl flex-1  cursor-pointer flex items-center gap-3 p-4 border bg-[#F5F5F54D] border-[#E5E5E5]">
            <div className="gap-8 flex flex-col">
              <Phone size={18} className="text-[#004AAD]" />
              <Mail size={18} className="text-[#004AAD]" />{" "}
            </div>
            <div className="flex flex-col max-w-[60%] gap-2">
              <p className="text-[14px] ">
                08036158066 <br /> 08023040102
              </p>
              <p className="text-[12px] font-light leading-5.5 text-[#333333CC]">
                sbenergyr@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[60%]  border border-[#F5F5F5] shadow rounded-xl p-6">
          <h2 className="font-semibold text-[18px] mb-6">Send us a Message</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col">
              <label className="mb-2 text-[14px] font-light">First Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="border border-gray-300 rounded-md p-2 focus:outline-none  text-[14px] focus:ring-1 focus:ring-[#003380]"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="mb-2 text-[14px] font-light">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+234..."
                className="border border-gray-300 rounded-md p-2 focus:outline-none  text-[14px] focus:ring-1 focus:ring-[#003380]"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 text-[14px] font-light">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="border border-gray-300 rounded-md p-2 focus:outline-none  text-[14px] focus:ring-1 focus:ring-[#003380]"
              />
            </div>

            {/* Message (Full Width) */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 text-[14px] font-light">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="border border-gray-300 text-[14px] rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#003380]"></textarea>
            </div>

            {/* Button */}
            <div className="">
              <button
                type="submit"
                className=" bg-[#00BF63] cursor-pointer flex gap-3 items-center text-white p-3 rounded-md font-semibold hover:bg-green-700 transition">
                Send Message
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
