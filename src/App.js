import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Ensure react-router-dom is installed


// Import your components after moving them inside the src folder
import Camera from './components/camera/camera';
import Result from './components/result/result';
import About from './components/about/about';
import Home from './components/home/home';
import Grades from './components/grades/grades';

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/result" element={<Result />} />
          <Route path="/about" element={<About />} />
          <Route path="/grades" element={<Grades />} />
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
