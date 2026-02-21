import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full min-h-20 bg-white flex px-15 py-3 justify-between items-center   sticky top-0">
      {/* Logo */}
      <div className="flex-1">
        <img src="/Assets/Logo.svg" width="80px" height="40px" alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="flex-1 hidden md:flex justify-start items-center gap-20">
        <ul className="flex gap-4 text-[#333333] text-[16px] font-light cursor-pointer">
          <a href="#">
            {" "}
            <li>Home</li>
          </a>
          <a href="#about">
            {" "}
            <li>About</li>
          </a>
          <a href="#services">
            <li>Services</li>
          </a>
          <a href="#bitumen">
            <li>Stock</li>
          </a>
          <a href="#touch">
            <li>Contact</li>
          </a>
        </ul>
        <a href="#touch">
          <button className="px-4 py-2 rounded-[5px] cursor-pointer bg-[#00BF63] text-white font-light text-[16px]">
            Get Qoute
          </button>
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex-1 flex justify-end md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute p-2 top-full left-0 w-full bg-white flex flex-col items-center py-4 gap-4 md:hidden z-50">
          <ul className="flex  w-full flex-col gap-4 text-[#333333] text-[16px] font-light cursor-pointer">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#services">
              <li>Services</li>
            </a>
            <li>Sustainability</li>
            <a href="#touch">
              <li>Contact</li>
            </a>
          </ul>
          <a href="#touch">
            <button className="px-4 py-2 w-full rounded-[5px] bg-[#00BF63] text-white font-light text-[16px]">
              Get Qoute
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
