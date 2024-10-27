import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCamera, faUpload, faStop } from '@fortawesome/free-solid-svg-icons';
import camera1 from '../../assets/camera1.png';

function Camera() {
  const videoRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false); // State to track camera status
  const navigate = useNavigate();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play(); // Ensure video is playing
      setIsCameraOn(true); // Camera is on
    } catch (error) {
      console.error("Error accessing the camera", error);
    }
  };

  const stopCamera = () => {
    if (videoRef.current) {
      captureImage(); // Capture the image first
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop()); // Stop each track
      }
      videoRef.current.srcObject = null; // Clear the video source
      setIsCameraOn(false); // Camera is off
    }
  };
  

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 320;  // Use video dimensions
    canvas.height = 240; // Use video dimensions
    const context = canvas.getContext('2d');

    if (videoRef.current) {
      // Draw the current video frame to the canvas
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const data = canvas.toDataURL('image/jpeg');

      // Log the data to see if the image was captured correctly
      console.log(data); // Debugging: check if the image data is not empty
      setImageData(data); // Set the captured image data
    }
  };

  const handleCancel = () => {
    setImageData(null); // Clear captured image
  };

  const handleUpload = () => {
    navigate('/result'); // Navigate to the result page
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result); // Set the uploaded image data
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center p-4 relative">
      {/* Back Icon */}
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={goBack}
        className="absolute top-6 left-6 text-white text-2xl cursor-pointer hover:text-gray-400"
      />
   <img
        src={camera1}
        alt="Camera Icon"
        className="absolute bottom-8 left-0 rounded-lg"
        style={{ width: '450px', height: '400px' }} // Adjust width and height as needed
      />

      
      {/* Instruction Text */}
      <p className="text-4xl font-serif mb-8 text-center mt-16 mx-8 text-green-500">
        This web application leverages a deep learning framework to accurately identify and classify black tea grades from Sri Lanka's low country regions, including OPA (Orange Pekoe A), BOP (Broken Orange Pekoe), OP1 (Orange Pekoe One), and P (Pekoe).
      </p>
      <b className="text-xl mb-4 text-center font-serif max-w-full mt-4 px-4">Please capture or upload the grade image.</b>

      <div className="flex w-full max-w-4xl mt-8">
        {/* Left Side - Camera and Upload Icons */}
        <div className="flex-1 flex flex-col items-center">
          {/* Button Container */}
          <div className="flex space-x-4 mb-4"> {/* Flex container for horizontal alignment */}
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all flex items-center font-serif"
              onClick={isCameraOn ? stopCamera : startCamera} // Toggle between start and stop
            >
              <FontAwesomeIcon icon={isCameraOn ? faStop : faCamera} className="mr-2" />
              {isCameraOn ? 'Stop Camera' : 'Start Camera'} {/* Change button text based on camera state */}
            </button>
            
            <label htmlFor="file-upload" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all flex items-center cursor-pointer font-serif">
              <FontAwesomeIcon icon={faUpload} className="mr-2" /> Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden" // Hide the actual input
            />
          </div>
          
          <video
            ref={videoRef}
            width="320"
            height="240"
            autoPlay
            className="border border-gray-300 rounded-lg mb-4" // Add margin below video
            style={{ height: '240px', width: '320px' }} // Fixed size for video
          />
        </div>

        {/* Right Side - Captured Image and Buttons */}
        {imageData && (
          <div className="flex-1 ml-8">
            <h5 className="text-xl font-bold mb-2 mb-4 mt-3 ml-20 font-serif text-green-500">Captured Image</h5>
            <img
              src={imageData}
              alt="Captured"
              width="320"
              height="240"
              className="border border-gray-300 rounded-lg"
              style={{ height: '240px', width: '320px' }} // Fixed size for image
            />
            <div className="flex justify-between mt-4">
            <div className="flex justify-center space-x-24 mt-2 ml-2">
  <button
    className="bg-red-500 text-white py-2 px-7 rounded hover:bg-red-600 transition-all font-serif"
    onClick={handleCancel}
  >
    Cancel
  </button>
  <button
    className="bg-blue-500 text-white py-2 px-7 rounded hover:bg-blue-600 transition-all font-serif"
    onClick={handleUpload}
  >
    Upload
  </button>
</div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Camera;
