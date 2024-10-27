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
      <h6 className="text-5xl font-semibold mt-6 text-center font-serif text-amber-700">Prediction Result</h6>

      {/* Main content with left and right sections */}
      <div className="flex w-full mt-8 ml-4">
        {/* Left section */}
        <div className="flex flex-col w-1/2 space-y-4">
          <div>
            <span className="font-serif text-amber-600 text-xl">OPA (Orange Pekoe A)</span>
            <div className="mt-1 flex items-center w-full bg-yellow-200 rounded">
              <div
                className="h-4 bg-green-600 rounded"
                role="progressbar"
                style={{ width: '100%' }} // Update dynamically as needed
                id="progress_opa"
              />
              <span className="text-green-600 ml-2">0%</span> {/* Label outside the bar, aligned at the end */}
            </div>
          </div>

          <div>
            <span className="font-serif text-amber-600 text-xl">BOP (Broken Orange Pekoe)</span>
            <div className="mt-1 flex items-center w-full bg-yellow-200 rounded">
              <div
                className="h-4 bg-green-600 rounded"
                role="progressbar"
                style={{ width: '100%' }} // Update dynamically as needed
                id="progress_bop"
              />
              <span className="text-green-600 ml-2">0%</span> {/* Label outside the bar, aligned at the end */}
            </div>
          </div>

          <div>
            <span className="font-serif text-amber-600 text-xl">OP1 (Orange Pekoe One)</span>
            <div className="mt-1 flex items-center w-full bg-yellow-200 rounded">
              <div
                className="h-4 bg-green-600 rounded"
                role="progressbar"
                style={{ width: '100%' }} // Update dynamically as needed
                id="progress_op1"
              />
              <span className="text-green-600 ml-2">0%</span> {/* Label outside the bar, aligned at the end */}
            </div>
          </div>

          <div>
            <span className="font-serif text-amber-600 text-xl">P (Pekoe)</span>
            <div className="mt-1 flex items-center w-full bg-yellow-200 rounded mb-4">
              <div
                className="h-4 bg-green-600 rounded"
                role="progressbar"
                style={{ width: '100%' }} // Update dynamically as needed
                id="progress_peokoe"
              />
              <span className="text-green-600 ml-2">0%</span> {/* Label outside the bar, aligned at the end */}
            </div>
          </div>

          <div className="mt-4 font-serif">
            <span id="probability">Waiting for your input to predict the result...</span>
            <h4 className="mt-2 font-bold text-xl font-serif" id="prediction_res">Grade :  _ _ _ _</h4>
          </div>

          {/* Captured Image Section */}
          {imageData && ( // Render captured image if available
            <div className="mt-4 flex flex-col items-start">
              <img 
                src={imageData} 
                alt="Captured" 
                className="mt-0 rounded-lg" 
                style={{ width: '320px', height: '240px' }} 
              />
            </div>
          )}
        </div>

        {/* Right section */}
        <div className="w-1/2 flex flex-col justify-between mb-24">
          <div className="flex justify-end">
            <img
              src={camera2}
              alt="Camera Icon"
              className="rounded-lg"
              style={{ width: '600px', height: '500px' }}
            />
            
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Result;
