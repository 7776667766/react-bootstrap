import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import serviceImage1 from '../assets/s1.png';
import serviceImage2 from '../assets/s2.png';
import serviceImage3 from '../assets/s3.png';
import './carousel.css';

function Services() {
  const cardStyle = {
    backgroundColor: '#333',
    // Adjust the color code to the desired dark gray shade
  };

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="bg-black  pb-10">
      <h2 className="text-3xl font-semibold mb-5 text-blue-500 text-center items-center relative">
        Our Services
        <span className="absolute left-1/2 bottom-0 w-20 h-1 bg-blue-500 block transform -translate-x-1/2 mb-[-10px]"></span>
      </h2>
      <h3 className="text-center text-[12px] lg:text-[15px] mt-[10px] font-semibold">
        loreum iprim longo liwaj ko loreim lorimu
      </h3>
      {/* Bootstrap Carousel */}
      <Carousel className="mt-10 custom-carousel">
        <Carousel.Item className=' '>
          <div className="flex flex-col justify-center items-center md:space-x-8 lg:space-x-8 space-y-3 md:flex-row">
            {/* Card 1 */}
            <div
            onClick={() => setSelectedCard(1)}
            className={`relative ${
              selectedCard === 1 ? 'border-b-2 border-blue-500' : ''
            } justify-center items-center card md:h-[200px] md:w-44 w-52 h-[200px] lg:w-64`}
            style={{ ...cardStyle, borderBottom: selectedCard === 1 ? '2px solid #3182ce' : 'none' }}
          >
            <div
              className={`absolute inset-0 transition-opacity ${
                selectedCard === 1 ? 'opacity-30' : 'opacity-0'
              } bg-black`}
            ></div>
              <img src={serviceImage1} alt="Service 1" className="mt-2 object-cover mb-2" />
              <div className="card-body">
                <h5 className="text-white text-center card-title">Web Development</h5>
                <p className="text-white text-center card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
            onClick={() => setSelectedCard(2)}
            className={`relative ${
              selectedCard === 2 ? 'border-b-2 border-blue-500' : ''
            } justify-center items-center card md:h-[200px] md:w-44 w-52 h-[200px] lg:w-64`}
            style={{ ...cardStyle, borderBottom: selectedCard === 2 ? '2px solid #3182ce' : 'none' }}
          >
            <div
              className={`absolute inset-0 transition-opacity ${
                selectedCard === 2 ? 'opacity-30' : 'opacity-0'
              } bg-black`}
            ></div>
              <img src={serviceImage2} alt="Service 2" className="mt-2 object-cover mb-2" />
              <div className="card-body">
                <h5 className="text-white text-center card-title">Flutter Development</h5>
                <p className="text-white text-center card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
            onClick={() => setSelectedCard(3)}
            className={`relative ${
              selectedCard === 1 ? 'border-b-2 border-blue-500' : ''
            } justify-center items-center card md:h-[200px] md:w-44 w-52 h-[200px] lg:w-64`}
            style={{ ...cardStyle, borderBottom: selectedCard === 3 ? '2px solid #3182ce' : 'none' }}
          >
            <div
              className={`absolute inset-0 transition-opacity ${
                selectedCard === 3 ? 'opacity-30' : 'opacity-0'
              } bg-black`}
            ></div>
              <img src={serviceImage3} alt="Service 3" className="m-4 w-20 h-20 object-cover mb-2" />
              <div className="card-body">
                <h5 className="text-white text-center card-title">IOS Development</h5>
                <p className="text-white text-center card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item/>
        <Carousel.Item/>


        {/* ... other Carousel.Item elements ... */}
      </Carousel>

      <div className="flex justify-center mt-20">
        <button className="bg-blue-500 rounded-lg h-8 w-28 font-semibold text-white">View More</button>
      </div>
    </div>
  );
}

export default Services;
