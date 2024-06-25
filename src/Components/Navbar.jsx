import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },

    {
      id: 2,
      text: "About",
    },

    {
      id: 3,
      text: "Skills",
    },

    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl z-50 bg-white container mx-auto h-16 px-4 md:px-20 shadow-md fixed top-0 left-0 right-0">
        <div className="flex justify-between z-10 h-16 items-center">
          <div className="flex space-x-2">
            <img
              src="https://img.freepik.com/premium-vector/hacker-vector-tattoo-design-silhouette-illustration-5_554682-3951.jpg?w=740"
              alt="Pic"
              className="h-12 w-12 rounded-full"
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              ManJeet
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>

          <div>
            <ul className="md:flex space-x-8 hidden">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoClose size={24} /> : <FiMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile navbar */}

        {menu && (
          <div className="bg-white w-full">
            <ul className="md:hidden flex flex-col items-center justify-center h-[500px] space-y-5">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-bold text-xl"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
