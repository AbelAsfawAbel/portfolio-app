import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
         Hello there! I'm Abel Asfaw Haileyesus, a 24-year-old Computer Science BSc graduate. Specializing as a Junior Fullstack Developer, I wield a diverse toolkit. From frontend finesse in HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and React.js to backend prowess in Node.js, Express.js, MySQL, and MongoDB, I'm equipped to tackle dynamic projects.
        </p>

        <br />

        <p className="text-xl">
        Seeking new challenges, I am eager to contribute my skills to a Fullstack role that values innovation and collaboration. Well-versed in version control systems, I bring a meticulous approach to development, ensuring efficient project management. Let's connect and create something exceptional together!
        </p>
      </div>
    </div>
  );
};

export default About;
