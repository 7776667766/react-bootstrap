import React from 'react';
import aboutimage from '../assets/about-img.jpg';
import vectorimage from '../assets/vector.png';
import icon from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import vector3 from '../assets/vector3.png';

function Experience() {
  return (
    <div className="flex bg-white h-full lg:h-[500px] flex-col md:flex-row justify-between items-center p-5 md:p-10 relative">
      {/* Left Side */}
      <div className="relative w-full md:w-1/2">
        <div className="flex mb-4 lg:ml-60">
          <img src={aboutimage} alt="Image 1" className="h-[200px] md:h-[300px]" />
        </div>
        <div className="absolute bottom-0 left-0 ml-4 mb-4 md:ml-72 md:mb-8">
          <img src={vectorimage} alt="Image 2 Overlay" className="h-10 md:h-16" />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-8">
        <p className="mb-4 text-blue-500 uppercase text-xl md:text-2xl">
          30 years of experience
        </p>
        {/* <p className="mb-4 text-lg font-bold md:text-xl text-blue-500">
          Preparing For Your Success <br />
          Provide Best IT Solutions
        </p> */}
          <h2 className="mb-4 text-lg font-bold md:text-xl text-blue-500  relative">
          Preparing For Your Success <br />
          Provide Best IT Solutions
        <span className="absolute left-[65px] bottom-0 w-32 h-1 bg-blue-500 block transform -translate-x-1/2 mb-[-14px]"></span>
      </h2>
        <p className="mb-4 text-black">
          We are privileged to work with hundreds of future-thinking
          awesome businesses including many of the world's top hardware
        </p>
        <div className="flex space-x-2">
          <img src={icon} className="h-8" alt="Icon 1" />
          <p className="mb-4">
            <div className="text-blue-500 font-bold text-base md:text-lg">
              Flexible Solutions <br />
            </div>
            <div className="text-black">
              Duis vel ligula ac quam ultrices tincidunt at <br />
              vel lorem.
            </div>
          </p>
        </div>
        <div className="flex space-x-2">
          <img src={icon2} className="h-8" alt="Icon 2" />
          <p className="mb-4">
            <div className="text-blue-500 font-bold text-base md:text-lg">
              24/7 Unlimited Support <br />
            </div>
            <div className="text-black">
              Duis vel ligula ac quam ultrices tincidunt at vel
              <br />
              lorem.
            </div>
          </p>
        </div>
        <img
          src={vector3}
          alt="Bottom Right Image"
          className="absolute bottom-0 right-0 h-20 md:h-28"
        />
      </div>
    </div>
  );
}

export default Experience;
