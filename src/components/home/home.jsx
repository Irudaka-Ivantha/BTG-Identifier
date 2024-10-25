import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick"; // Import the Slider component
import home1 from '../../assets/home1.jpg';
import home2 from '../../assets/home2.jpg';
import home3 from '../../assets/home 3.webp'; // Removed space in filename

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home'); // Set initial state to 'home'
  
  useEffect(() => {
    // Handle initial active section based on the pathname
    if (location.pathname === '/') {
      setActiveSection('home');
    }


    const observerOptions = {
      root: null,
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [location.pathname]);

  // Slider settings for animation
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000 // Autoplay speed (3 seconds)
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 bg-[#000C27]">
     

      {/* Slider Section */}
      <div id="main-banner" className="relative overflow-hidden" ref={homeRef}>
        <Slider {...settings}>
          {/* First Slide */}
          <div>
            <div
              className="w-full h-screen bg-center bg-cover"
              style={{ backgroundImage: `url(${home1})` }} // Dynamically setting image
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center px-4">
                  {/* Add your content here */}
                </div>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div>
            <div
              className="w-full h-screen bg-center bg-cover"
              style={{ backgroundImage: `url(${home2})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center px-4">
                  {/* Add your content here */}
                </div>
              </div>
            </div>
          </div>

          {/* Third Slide */}
          <div>
            <div
              className="w-full h-screen bg-center bg-cover"
              style={{ backgroundImage: `url(${home3})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center px-4">
                  {/* Add your content here */}
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      
    </div>
  );
};

export default Home;
