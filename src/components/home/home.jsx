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

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    dots: false,
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

  
  const handleNavigateToCamera = () => {
    navigate('/camera');
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar activeSection={activeSection} /> 
      <div id="main-banner" className="relative overflow-hidden" ref={homeRef}>
        
        <Slider ref={sliderRef} {...settings}>
          {/* Slide 1 */}
          <div>
            <div className="w-full h-screen bg-center bg-cover relative" style={{ backgroundImage: `url(${home1})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-5xl font-bold mb-4">BLACK TEA GRADES</h1>
                  <button
                    onClick={handleNavigateToCamera} 
                    className="bg-white bg-opacity-80 hover:bg-opacity-100 text-black font-bold py-2 px-6 rounded-full"
                  >
                    Prediction Grades
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
                  <h1 className="text-5xl font-bold mb-4">BLACK TEA GRADES</h1>
                  <button
                    onClick={handleNavigateToCamera} 
                    className="bg-white bg-opacity-80 hover:bg-opacity-100 text-black font-bold py-2 px-6 rounded-full"
                  >
                    Prediction Grades
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
                  <h1 className="text-5xl font-bold mb-4">BLACK TEA GRADES</h1>
                  <button
                    onClick={handleNavigateToCamera} 
                    className="bg-white bg-opacity-80 hover:bg-opacity-100 text-black font-bold py-2 px-6 rounded-full"
                  >
                    Prediction Grades
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
              className={`w-4 h-4 rounded-full cursor-pointer ${index === sliderRef.current?.innerSlider.state.currentSlide ? 'bg-red-500' : 'bg-gray-300'}`}
              style={{
                transition: 'background-color 0.3s ease',
              }}
            ></div>
          ))}
        </div>
      </div>

      <About />
      <Grades />
      <Footer />
    </div>
  );
};

export default Home;
