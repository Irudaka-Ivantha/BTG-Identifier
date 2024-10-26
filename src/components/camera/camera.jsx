import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Camera() {
  const videoRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing the camera", error);
    }
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 320;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    setImageData(canvas.toDataURL('image/jpeg'));
  };

  const handleCancel = () => {
    setImageData(null); // Clear the captured image
  };

  const handleUpload = () => {
    // You can add logic here to upload the image if needed
    navigate('/result'); // Navigate to the result page
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <p className="text-sm mb-4">
        This web application provides the ability to distinguish the most widely grown tea clones in Sri Lanka: TRI 2023, TRI 2025, and TRI 2026. <b>Click on the instructions to learn more.</b>
      </p>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all"
        onClick={startCamera}
      >
        Start Camera
      </button>
      <div className="mt-4">
        <video
          ref={videoRef}
          width="320"
          height="320"
          autoPlay
          className="border border-gray-300 rounded-lg"
        />
        <div className="mt-2">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-all"
            onClick={captureImage}
          >
            <i className="fas fa-camera"></i> Capture
          </button>
        </div>
      </div>

      {imageData && (
        <div className="mt-4">
          <h5 className="text-lg font-bold">Captured Image</h5>
          <img src={imageData} alt="Captured" width="320" height="320" className="border border-gray-300 rounded-lg" />
          <div className="mt-2 flex justify-between">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-all"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Camera;
