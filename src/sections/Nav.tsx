"use client";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" w-full bg-white sticky top-0 z-100 ">
      <div className="max-w-7xl mx-auto px-2 md:px-12 py-2 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            src="/Assets/Logo.svg"
            alt="Logo"
            width={80}
            height={40}
            className="object-contain md:ml-10"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 md:mr-10">
          <ul className="flex items-center gap-6 text-[#333] text-[16px] font-light">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#bitumen">Stock</a>
            </li>
            <li>
              <a href="#touch">Contact</a>
            </li>
          </ul>

          <a href="#touch">
            <button className="px-4 py-2 rounded-md bg-[#00BF63] text-white text-sm hover:opacity-90 transition">
              Get Quote
            </button>
          </a>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
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
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 flex flex-col gap-4 text-[#333] text-[16px] font-light">
            <a href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#bitumen" onClick={() => setIsOpen(false)}>
              Stock
            </a>
            <a href="#touch" onClick={() => setIsOpen(false)}>
              Contact
            </a>

            <a href="#touch" onClick={() => setIsOpen(false)}>
              <button className="w-full mt-2 px-4 py-2 rounded-md bg-[#00BF63] text-white text-sm">
                Get Quote
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
