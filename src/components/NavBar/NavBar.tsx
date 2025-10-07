"use client"
import React, { useState } from "react";
import NavList from "../NavList/NavList";
import Logo from "../Logo/Logo";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger + close icon

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-6 md:px-20 py-5 bg-[#070E1B] sticky top-0 z-50">
      {/* Logo */}
      <Logo />

      {/* Desktop Nav */}
      <div className="hidden md:flex">
        <NavList />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white text-2xl"
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-2/3 bg-[#070E1B] flex flex-col items-start gap-6 px-6 py-10 md:hidden z-40 transition-transform duration-300">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl mb-6"
          >
            <HiX />
          </button>

          {/* Navigation Items */}
          <NavList />
        </div>
      )}
    </div>
  );
}

export default NavBar;
