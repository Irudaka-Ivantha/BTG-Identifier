import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Slider from "react-slick";
import home1 from '../../assets/home1.jpg';
import home2 from '../../assets/home2.jpg';
import home3 from '../../assets/home3.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from '../../components/about/about';
import Grades from '../../components/grades/grades';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/home/navBar';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // For WhatsApp
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; // For phone
import Logo from '../../assets/tea.jpg';

import Navbar from './navBar';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home'); 
  const homeRef = useRef(null); 
  const [loading, setLoading] = useState(true); // Loading state


  const sections = [
    { id: 'main-banner', ref: homeRef }
  ];

  useEffect(() => {
    // Set a timeout to simulate page load
    setTimeout(() => setLoading(false), 2000); // Adjust timing as needed
}, [location.pathname]);


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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index); 
  };
  
  const handleNavigateToCamera = () => {
    navigate('/camera');
  };

  return (
    <>
    {loading ? (
        <div className="flex items-center justify-center h-screen bg-black">
          <div className="flex flex-col items-center">
            <img src={Logo} alt="Logo" className="w-32 h-32 animate-bounce mb-4" /> {/* Bouncing logo */}
            <p className="text-white text-lg animate-pulse">Loading...</p> {/* Pulsing loading text */}
          </div>
        </div>
      ) : (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar activeSection={activeSection} /> 
      <div id="main-banner" className="relative overflow-hidden" ref={homeRef}>
        
        <Slider ref={sliderRef} {...settings}>
          {/* Slide 1 */}
          <div>
  <div
    className="w-full h-screen bg-center bg-cover relative"
    style={{ backgroundImage: `url(${home1})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="text-center">
      <h1 className="text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 px-4 md:px-24 eading-snug">
        A DEEP LEARNING FRAMEWORK FOR BLACK TEA GRADE IDENTIFICATION IN
        LOW COUNTRY OF SRI LANKA
      </h1>

        <button
          onClick={handleNavigateToCamera}
          className="bg-white bg-opacity-80 hover:bg-opacity-100 text-black font-bold py-3 px-6 rounded-full"
        >
          Predict Grades
        </button>
      </div>
    </div>
  </div>
</div>


          {/* Slide 2 */}
          <div>
            <div className="w-full h-screen bg-center bg-cover relative" style={{ backgroundImage: `url(${home2})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                <h1 className="text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 px-4 md:px-24 eading-snug">
            A DEEP LEARNING FRAMEWORK FOR BLACK TEA GRADE IDENTIFICATION IN
            LOW COUNTRY OF SRI LANKA
          </h1>
                            <button
                    onClick={handleNavigateToCamera} 
                    className="bg-white bg-opacity-80 hover:bg-opacity-100 text-black font-bold py-3 px-6 rounded-full"
                  >
                    Predict Grades
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div>
            <div className="w-full h-screen bg-center bg-cover relative" style={{ backgroundImage: `url(${home3})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                <h1 className="text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 px-4 md:px-24 eading-snug">
                                A DEEP LEARNING FRAMEWORK FOR BLACK TEA GRADE IDENTIFICATION IN
                                LOW COUNTRY OF SRI LANKA
                              </h1>
                              <button
                                onClick={handleNavigateToCamera}
                                className="bg-[white] bg-opacity-80 hover:bg-opacity-100 text-black font-bold py-3 px-6 rounded-full"
                              >
                                Predict Grades
                              </button>


                </div>
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
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide ? 'bg-[#86C240] scale-125' : 'bg-transparent border border-white opacity-50'
            }`}
            style={{
              transition: 'background-color 0.3s ease, transform 0.3s ease',
            }}
          ></div>
        ))}
      </div>

      </div>

      <About />
      <Grades />
      {/* Footer */}
    <footer className="bg-[#1F1F1F] text-[white] py-4"> {/* Reduced vertical padding */}
      <div className="container mx-auto flex justify-center gap-8"> {/* Adjusted gap */}
        {/* Left Section */}
        <div className="w-1/3 lg:ml-[30%]">
          <h2 className="text-lg font-bold mb-2">Black Tea Grades</h2> {/* Reduced font size */}
          <p className="text-xs"> {/* Reduced text size */}
            Some text
          </p>
          <div className="flex space-x-4 mt-2"> {/* Reduced margin */}
            {/* Social Media Icons */}
            <a href="#" className="hover:text-blue-500 transition duration-300">
              <FontAwesomeIcon icon={faFacebook} size="1x" /> {/* Reduced icon size */}
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              <FontAwesomeIcon icon={faTwitter} size="1x" /> {/* Reduced icon size */}
            </a>
            <a href="#" className="hover:text-blue-600 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} size="1x" /> {/* Reduced icon size */}
            </a>
            <a href="#" className="hover:text-pink-500 transition duration-300">
              <FontAwesomeIcon icon={faInstagram} size="1x" /> {/* Reduced icon size */}
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-1/3">
          <ul className="space-y-1 text-xs"> {/* Reduced text size */}
            <li><a href="#home" className="hover:text-[#86C240]">Home</a></li>
            <li><a href="/Results" className="hover:text-[#86C240]">About</a></li>
            <li><a href="#about" className="hover:text-[#86C240]">Grades</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 border-t border-gray-700 pt-4 text-center text-xs"> {/* Reduced margin and text size */}
        <p className="font-bold">@Black Tea Grades</p>
      </div>
    </footer>

    </div>
      )}
      </>
  );
};

export default Home;
