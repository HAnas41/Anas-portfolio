import React from "react";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

function FooterContent() {
  return (
    <footer className="text-white py-10 text-center">
      {/* Name */}
      <h1 className="text-3xl md:text-4xl font-semibold">
        Muhammad <span className="font-bold text-[#F2C010]">Anas</span>
      </h1>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-4 text-5xl">
        <a
          href="https://www.linkedin.com/in/anas41/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F2C010] transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/anaas.anaas.35/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F2C010] transition-colors"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/HAnas41"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F2C010] transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/anasanas56/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F2C010] transition-colors"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Email */}
      <p className="mt-4  inline-block mx-auto text-sm">
        muhammadanaas.334@gmail.com
      </p>

      {/* Copyright */}
      <p className="mt-2 text-sm ">
        © 2026 Muhammad Anas. All rights reserved.
      </p>
    </footer>
  );
}

export default FooterContent;
