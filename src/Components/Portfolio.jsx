import React from "react";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: (
        <SiMongodb className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" />
      ),
      name: "MongoDB",
    },

    {
      id: 1,
      logo: (
        <SiExpress className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" />
      ),
      name: "Express JS",
    },

    {
      id: 1,
      logo: (
        <FaReact className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" />
      ),
      name: "React JS",
    },

    {
      id: 1,
      logo: (
        <FaNodeJs className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" />
      ),
      name: "Node JS",
    },
  ];
  return (
    <>
      <div
        name="Skills"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div>
          <h1 className="text-3xl font-bold">Skills</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-10 ">
            {cardItem.map(({ id, logo, name }) => (
              <div
                key={id}
                className="md:w-[270px] md:h-[300px] border-[2px] px-5 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              >
                {logo}
                <div>
                  <div className="font-bold text-lg my-2 ">{name}</div>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div className="md:px-8 md:py-4 py-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ">
                    <a href="https://wa.me/9509709957">CONTACT ME</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
