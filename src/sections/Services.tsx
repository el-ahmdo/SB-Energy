import { Truck, ShieldCheck, Package, Headphones } from "lucide-react";

const OurServices = () => {
  return (
    <section id="services" className="w-full py-20 px-4 md:px-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-[30px] font-semibold">Our Services</h2>
        <div className="w-16 h-1 bg-[#004AAD] mx-auto mt-4 rounded-full"></div>
        <p className="text-[#333333B2] font-light text-[14px] mt-2">
          Comprehensive solutions tailored for the energy and infrastructure
          sectors
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="flex flex-col items-start text-left p-6 border md:max-w-[220px] border-[#F5F5F5]  rounded-lg gap-2 transition">
          <div className="w-16 h-16 flex items-center justify-center bg-[#EFF6FF] rounded-xl ">
            <img src="/Assets/drop.svg" alt="" />
          </div>
          <h3 className="text-[16px] font-semibold  ">
            Petroleum Products Distribution
          </h3>
          <p className="text-[#333333B2] font-thin text-[13px] flex-1">
            Distribution of petroleum products with 1000MT of Bitumen 60/70
            currently in stock.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start text-left p-6 border md:max-w-[220px] border-[#F5F5F5]  rounded-lg gap-2 transition">
          <div className="w-16 h-16 flex items-center justify-center bg-[#F0FDF4] rounded-xl ">
            <img src="/Assets/spanner.svg" alt="" />
          </div>
          <h3 className="text-[16px] font-semibold  ">
            Equipment & Facilities Servicing
          </h3>
          <p className="text-[#333333B2] font-thin text-[13px] flex-1">
            Professional servicing and maintenance of oil & gas equipment and
            facilities.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start text-left p-6 border md:max-w-[220px] border-[#F5F5F5]  rounded-lg gap-2 transition">
          <div className="w-16 h-16 flex items-center justify-center bg-[#FFEDED] rounded-xl ">
            <img src="/Assets/box.svg" alt="" />
          </div>
          <h3 className="text-[16px] font-semibold  ">Procurement Services </h3>
          <p className="text-[#333333B2] font-thin text-[13px] flex-1">
            Sourcing and supply of quality materials and equipment for the
            petroleum industry.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-start text-left p-6 gap-2 md:max-w-[220px] border border-[#F5F5F5] gap-2  rounded-lg transition">
          <div className="w-16 h-16 flex items-center justify-center bg-[#EFF6FF] rounded-xl ">
            <img src="/Assets/truck.svg" alt="" />
          </div>
          <h3 className="text-[16px] font-semibold ">
            Logistics & Supply Chain
          </h3>
          <p className="text-[#333333B2] font-thin text-[13px]  flex-1">
            Efficient nationwide logistics ensuring timely and reliable delivery
            across Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
