import React from 'react';
import download from '../assets/download.png'
import logo from '../assets/f1.png'
import fb from '../assets/fb download.png'
import ins from '../assets/instagramdownload.jpg'
import twitter from '../assets/3466521-200.png'

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Major Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sub-Column 1 */}
          <div>
            <div className="mb-4 font-bold text-[20px]">LOREM IPSUM</div>
            <div className="mb-4 text-[13px]">
              Some quick example text to loyu<br /> 
              build on the card title and hlo<br />
               make up the bulk of the card's lorium <br/>
               build on the card title and<br />
               make up the bulk of the card's content.

            </div>
            <div className="flex items-center space-x-1">
              <div className="">Follow Us</div>
              <img src={fb} alt="Image 1" className="w-4 h-4" />
              <img src={ins} alt="Image 2" className="w-4 h-4" />
              <img src={twitter} alt="Image 3" className="w-4 h-4" />
              <img src={fb} alt="Image 4" className="w-4 h-4" />
            </div>
          </div>
         
          <div>
          <div className="flex p-1 items-center space-x-2">
        <div className='font-bold text-[20px]'>Our Services</div>
      </div>
          <div className="flex p-1 pt-4 items-center space-x-2">
        <img src={download} className="w-4 h-4" />
        <div>Metalling Strategy</div>
      </div>

      <div className="flex p-1 items-center space-x-2">
        <img src={download} className="w-4 h-4" />
        <div>Interior Design</div>
      </div>

      <div className="flex   p-1 items-center space-x-2">
        <img src={download} className="w-4 h-4" />
        <div>Digital Design</div>
      </div>

      <div className="flex p-1 items-center space-x-2">
        <img src={download} className="w-4 h-4" />
        <div>Product Selling</div>
      </div>

      <div className="flex p-1 items-center space-x-2">
        <img src={download} className="w-4 h-4" />
        <div>Product Design</div>
      </div>
      <div className="flex p-1 items-center space-x-2">
        <img src={download} className="w-4 h-4" />
        <div>Social Marketing</div>
      </div>
      </div>
      </div>

        {/* Right Major Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Sub-Column 1 */}
          <div>
      <div className="mb-4 font-bold text-[20px]">Company Address</div>
      <div className="mb-4">loreu isump dolot sit amit <br />lorium sit</div>
      <div className="mb-4">
        <span className="font-bold">Address:</span> Some quick example
      </div>
      <div className="mb-4">
        <span className="font-bold">Phone:</span> 12345667
      </div>
      <div className="mb-4">
        <span className="font-bold">Email:</span> ranagee44@gmail.com
      </div>
    </div>
          {/* Sub-Column 2 */}
          <div>
            <div className="mb-4 font-bold text-[20px]">Popular Posts</div>
            <div className="flex items-center space-x-5">
            <img src={logo} alt="Image 1" className="w-20 h-20" />
              <div className="mb-2">Follow Us <br></br>description<br/> augest 2023</div> 
            </div>
            <hr/>
            <div className="flex items-center  space-x-5">
            <img src={logo} alt="Image 1" className="w-20 h-20" />
              <div className="mb-2">Follow Us <br></br>description <br/> 2020 oct</div> 
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="">
  <hr className="mx-auto w-[80%] md:w-[60%] lg:w-[80%] my-8" />
</div>
<div className="flex flex-col lg:flex-row justify-between mx-10 lg:mx-40 md:mx-32 sm:mx-2">
  <p className="text-sm text-white mb-4 lg:mb-0">&copy; 2023 Your Company. All rights reserved.</p>
  <div className="flex space-x-8">
    <p className="text-sm text-white">Terms and Conditions</p>
    <p className="text-sm text-white">Policy</p>
    <p className="text-sm text-white">Contact Us</p>
  </div>
</div>
</div>


    </footer>
  );
}

export default Footer;
