import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-3xl font-bold">About</h1>
      <br />
      <p className="font-semibold">
        Hello 👋! I'm Manjeet, a passionate and dedicated student currently
        pursuing a Bachelor of Computer Applications (BCA) degree 💻. With a
        keen interest in frontend development, I specialize in leveraging
        cutting-edge technologies to create intuitive and visually appealing web
        experiences. Beyond technical proficiency, I'm committed to continuous
        learning and staying updated with the latest trends and best practices
        in frontend development. I'm enthusiastic about exploring opportunities
        to apply my skills and knowledge to real-world projects that make a
        meaningful impact. Let’s connect! 🤝
      </p>
      <br />
      <h1 className="text-xl font-bold text-green-500">Education</h1>
      <br />
      <p className="font-semibold ">
        <ul>
          <li>BCA (Rajasthan unversity).</li>
          <li>12th with PCM (RBSE Board).</li>
        </ul>
      </p>
      <br />
      <h1 className="text-xl font-bold text-green-500">Skills & Expertise</h1>
      <br />
      <p className="font-semibold ">
        Proficient in Web Development. Knowledge of python and c also. Excellent
        Problem Solving and Communication. Can lead and collaborate with a team.
        Strong Knowledge of other technologies like Figma, Git etc.
      </p>
      <br />
      <h1 className="text-xl font-bold text-green-500">
        Achivements & Awards
      </h1>{" "}
      <br />
      <p className="font-semibold ">
        <ul>
          <li>HTML compition Winner at College.</li>
          <li>Certified by KgCoding in HTML,CSS and C Language.</li>
        </ul>
      </p>
      <br />
    </div>
  );
}

export default About;
