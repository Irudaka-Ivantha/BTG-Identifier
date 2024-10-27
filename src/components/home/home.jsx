import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useLocation } from 'react-router-dom';

import home1 from '../../assets/home1.jpg';
import home2 from '../../assets/home2.jpg';
import home3 from '../../assets/home3.webp';
import Navbar from './navBar';

const Home = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home'); // Set initial state to 'home'

  const homeRef = useRef(null); // Define a ref for the main banner section
  const sections = [{ id: 'main-banner', ref: homeRef }]; // List of sections to observe

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
    autoplaySpeed: 3000, // Autoplay speed (3 seconds)
    appendDots: (dots) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ul style={{ margin: '0', padding: '0' }}> {dots} </ul>
      </div>
    ), // Customize dot container
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 bg-[#000C27]">
      <style>
      {`
        .slick-dots li {
          margin: 0 5px; /* Add some space between dots */
        }

        .slick-dots li button {
          background: #fff; /* Background color for inactive dots */
          border-radius: 50%; /* Make dots round */
          width: 10px; /* Set width of dots */
          height: 10px; /* Set height of dots */
        }

        .slick-dots li.slick-active button {
          background: #86C240; /* Background color for active dot */
        }

        /* Additional styles to improve visibility */
        .slick-dots {
          bottom: 20px; /* Adjust the vertical position of the dots */
        }
      `}
      </style>

      <Navbar/>
      {/* Slider Section */}
      <div id="main-banner" className="relative overflow-hidden" ref={homeRef}>
        <Slider {...settings}>
          {/* First Slide */}
          <div>
            <div
              className="w-full h-[500px] bg-center bg-cover relative"
              style={{
                backgroundImage: `url(${home1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <div className="text-center text-white px-4">
                  {/* <p className="text-2xl font-semibold">hello1</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div>
            <div
              className="w-full h-[500px] bg-center bg-cover relative"
              style={{ backgroundImage: `url(${home2})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <div className="text-center text-white px-4">
                  {/* <p className="text-2xl font-semibold">hello2</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Third Slide */}
          <div>
            <div
              className="w-full h-[500px] bg-center bg-cover relative"
              style={{ backgroundImage: `url(${home3})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <div className="text-center text-white px-4">
                  {/* <p className="text-2xl font-semibold">hello3</p> */}
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
