import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row justify-center">
        <div className="space-y-2">
          <ul className="flex space-x-5">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100035230003641"
                target="_blank"
              >
                <FaFacebook className="text-2xl cursor-pointer" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/corrupt_user_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                <FaInstagramSquare className="text-2xl cursor-pointer" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/manjeet-yadav-/"
                target="_blank"
              >
                <BsLinkedin className="text-2xl cursor-pointer" />
              </a>
            </li>
            <li>
              <a href=" https://wa.me/9509709957" target="_blank">
                <FaSquareWhatsapp className="text-2xl cursor-pointer" />
              </a>
            </li>
          </ul>
          <hr className="h-10" />
        </div>
      </div>

      <div className="bg-black text-white h-10 flex justify-center items-center">
        <p>© Manjeet Yadav 2024. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
