import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#003380] text-white px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4  gap-10">
        {/* Column 1 */}

        <div className=" justify-self-center text-[#D4D4D4] ">
          <h3 className="text-lg font-semibold mb-4">SB Energy</h3>
          <p className="text-[14px] font-thin">
            SB Energy Resources Company Limited is a leading indigenous oil and
            gas company committed to quality delivery and professionalism in the
            West-African sub-region.
          </p>
          <p className="text-[14px] flex gap-1  mt-8 font-thin">
            {" "}
            <MapPin size={20} />
            Nigeria
          </p>
        </div>

        {/* Column 2 */}
        <div className=" justify-self-center text-[#D4D4D4] ">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3  text-[14px] font-thin">
            <li className=" cursor-pointer">Home</li>
            <li className=" cursor-pointer">About Us</li>
            <li className=" cursor-pointer">Operations</li>
            <li className=" cursor-pointer">Sustainability</li>
            <li className=" cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className=" justify-self-center text-[#D4D4D4] ">
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3  text-[14px] font-thin">
            <li className=" cursor-pointer">Petroleum Distribution</li>
            <li className=" cursor-pointer">Equipment Servicing</li>
            <li className=" cursor-pointer">Procurement</li>
            <li className=" cursor-pointer">Logistics </li>
            <li className=" cursor-pointer">Infrastructure </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className=" justify-self-center text-[#D4D4D4] ">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 ">
            <li className=" cursor-pointer flex gap-2 text-[14px] font-thin">
              {" "}
              <MapPin size={20} className="text-[#00BF63]" />
              No.6 Yankari Crescent, Amssco Platinum City, Abuja
            </li>
            <li className=" cursor-pointer flex gap-2 text-[14px] font-thin">
              {" "}
              <Phone size={20} className="text-[#00bf63]" /> 08036158066{" "}
            </li>{" "}
            <li className=" cursor-pointer flex gap-2 text-[14px] font-thin">
              {" "}
              <Mail size={20} className="text-[#00bf63]" />{" "}
              sbenergyr@gmail.com{" "}
            </li>{" "}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SB Energy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
