import React from 'react';
import Navbar from './components/home/Navbar';
import CameraSection from './components/camera/CameraSection';
import PredictionResult from './components/result/PredictionResult';
import './index.css';  // Make sure this points to your CSS file


function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <CameraSection />
          <PredictionResult />
        </div>
      </div>
    </div>
  );
}

export default App;
