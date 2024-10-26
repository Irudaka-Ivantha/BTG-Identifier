import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import home1 from '../../assets/home1.jpg';
import home2 from '../../assets/home2.jpg';
import home3 from '../../assets/home3.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from 'react-router-dom';
import About from '../../components/about/about';
import Grades from '../../components/grades/grades';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/home/navBar';

const Home = () => {
  const location = useLocation();
  const sliderRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home'); 
  const homeRef = useRef(null); 

  const sections = [
    { id: 'main-banner', ref: homeRef }
  ];

  useEffect(() => {
    if (location.pathname === '/') setActiveSection('home');

    const observerOptions = { root: null, threshold: 0.3 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
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

  const settings = {
    dots: false,  // Disable default dots to use custom controls
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar activeSection={activeSection} /> 
      <div id="main-banner" className="relative overflow-hidden" ref={homeRef}>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url(${home1})` }}>
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                <div className="text-center px-4 text-white"> {/* Add content for slide 1 here */} </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url(${home2})` }}>
              <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                <div className="text-center px-4 text-white"> {/* Add content for slide 2 here */} </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url(${home3})` }}>
              <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
                <div className="text-center px-4 text-white"> {/* Add content for slide 3 here */} </div>
              </div>
            </div>
          </div>
        </Slider>
        {/* Custom Dots */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${index === sliderRef.current?.innerSlider.state.currentSlide ? 'bg-red-500' : 'bg-gray-300'}`}
              style={{
                transition: 'background-color 0.3s ease',
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Add the About, Grades, and Footer components below the slider */}
      <About />
      <Grades />
      <Footer />
    </div>
  );
};

export default Home;
