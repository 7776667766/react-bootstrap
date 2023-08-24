import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

function Header() {
  return (
    <div className='mt-16 lg:px-5 md:px-5 px-1 md:pl-20'>
      <Carousel
        id='carouselExampleIndicators'
        className='slide'
        data-ride='carousel'
        nextLabel=''
        prevLabel=''
        
      >
        <ol className='carousel-indicators w-[10px]'>
          {/* ... Indicator elements ... */}
        </ol>
        <ol className='carousel-indicators w-[10px]'>
          {/* ... Indicator elements ... */}
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className=''>
              {/* Only the text content */}
              <div className='carousel-text-container'>
              <div className=' responsive-text carousel-text-container left-aligned'>
                <div className= 'carousel-text font-bold'>
                  <div className=' pl-[20px] responsive-text-content'>
                    Custom Software <br />
                    <div>Development</div>
                  </div>
                </div>
                <p className=' pl-[20px]  responsive-text-description'>
                  Let's change the world with your idea
                </p>
              </div>
            </div>
            </div>
          </div>

          {/* ... Other carousel items ... */}
        </div>
      </Carousel>
      <style>
        {`
          /* Custom styling for indicators */
          .carousel-indicators ol 1 {
            background-color: white;
            border: 1px solid white;
            width: 0px;
            height: 3px;
            margin: 0 3px;
          }
          
          .carousel-indicators li.custom-indicator-20px {
            background-color: white;
            border: 1px solid white;
            width: 20px;
            height: 3px;
            margin: 0 3px;
          }
          
          .carousel-indicators li.custom-indicator-10px {
            background-color: white;
            border: 1px solid white;
            width: 10px;
            height: 3px;
            margin: 0 3px;
          }
          
          .carousel-indicators .active {
            background-color: transparent;
            border: 1px solid white;
            align-items:center;
          }

          .carousel-indicators {
            justify-content: flex-start;
            align-items:center;
            
          }
        `}
      </style>
      
     
    </div>
  );
}

export default Header;
