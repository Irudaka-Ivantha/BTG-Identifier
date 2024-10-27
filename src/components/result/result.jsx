import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import camera2 from '../../assets/camera2.png';

function Result() {
  const navigate = useNavigate();
  const location = useLocation(); // Access the location object
  const { imageData } = location.state || {}; // Get image data from state

  const goBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center p-4 relative">
      {/* Back Icon */}
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={goBack}
        className="absolute top-6 left-6 text-white text-2xl cursor-pointer hover:text-gray-400"
      />

      {/* Prediction result at the top center */}
      <h6 className="text-3xl md:text-5xl font-semibold mt-6 text-center font-serif text-amber-700">Prediction Result</h6>

      {/* Main content with left and right sections */}
      <div className="flex flex-col md:flex-row w-full mt-8">
        {/* Left section */}
        <div className="flex flex-col w-full md:w-1/2 space-y-4 p-4">
          {['OPA (Orange Pekoe A)', 'BOP (Broken Orange Pekoe)', 'OP1 (Orange Pekoe One)', 'P (Pekoe)'].map((label, index) => (
            <div key={index}>
              <span className="font-serif text-amber-600 text-xl">{label}</span>
              <div className="mt-1 flex items-center w-full bg-yellow-200 rounded">
                <div
                  className="h-4 bg-green-600 rounded"
                  role="progressbar"
                  style={{ width: '0%' }} // Update dynamically as needed
                  id={`progress_${label.split(' ')[0].toLowerCase()}`} // Dynamic ID
                />
                <span className="text-green-600 ml-2">0%</span>
              </div>
            </div>
          ))}

          <div className="mt-4 font-serif text-center">
            <span id="probability">Waiting for your input to predict the result...</span>
            <h4 className="mt-2 font-bold text-xl font-serif" id="prediction_res">Grade :  _ _ _ _</h4>
          </div>

          {/* Captured Image Section */}
          {imageData && (
            <div className="mt-4 flex flex-col items-center">
              <img 
                src={imageData} 
                alt="Captured" 
                className="mt-0 rounded-lg" 
                style={{ width: '100%', maxWidth: '320px', height: 'auto' }} 
              />
            </div>
          )}
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between items-center mb-24">
          <div className="flex justify-center mb-4">
            <img
              src={camera2}
              alt="Camera Icon"
              className="rounded-lg"
              style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
