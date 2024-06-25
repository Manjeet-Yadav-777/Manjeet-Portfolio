import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped, Typed } from "react-typed";

function Home() {
  // const [typed,setTyped] = React.useState<Typed| undefined>()
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 "
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-14 md:mt-24 space-y-1 order-2 md:order-1">
            <span className="text-xl font-semibold">
              Welcome to Manjeet's Feed
            </span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1 className="font-bold">Hello, I'm a</h1>
              {/* <span className="text-red-700 font-extrabold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-extrabold"
                strings={["Coder", "Developer", "Leader"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ipsam sint vel sequi cum debitis voluptates, ea maxime nihil
              deleniti totam veniam voluptatibus tempora illo delectus ducimus
              quis incidunt esse!
            </p>
            <br />
            {/* [social media icons] */}

            <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="space-y-2">
                <h1 className="font-semibold text-center">Available On</h1>
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
                    <a href="https://wa.me/9509709957" target="_blank">
                      <FaSquareWhatsapp className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-semibold text-center">
                  Currentlly Working On
                </h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200" />

                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200" />

                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200" />

                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:ml-48 md:mt-12 order-1 md:order-2">
            <img
              src="https://img.freepik.com/premium-vector/hacker-vector-tattoo-design-silhouette-illustration-5_554682-3951.jpg?w=740"
              alt="Pic"
              className="h-[400px] w-[400px] flex justify-center items-center"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
