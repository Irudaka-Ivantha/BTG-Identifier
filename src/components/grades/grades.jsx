import React, { useState } from "react";
import NavBar from '../../components/home/navBar';

const Grades = () => {
  const [selectedToggle, setSelectedToggle] = useState(null);

  const content = [
    {
      name: "Orange Pekoe",
      text: "This is the content for Grade A.",
      imageUrl: "/path/to/image1.jpg",
    },
    {
      name: "Broken Orange Pekoe",
      text: "This is the content for Grade B.",
      imageUrl: "/path/to/image2.jpg",
    },
    {
      name: "Orange Pekoe One",
      text: "This is the content for Grade C.",
      imageUrl: "/path/to/image3.jpg",
    },
    {
      name: "Pekoe One",
      text: "This is the content for Grade D.",
      imageUrl: "/path/to/image4.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <NavBar />

      {/* Toggle Buttons */}
      <div className="flex justify-center mt-4 space-x-4">
        {content.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedToggle(index)}
            className={`px-4 py-2 rounded ${
              selectedToggle === index ? "bg-[#86C240]" : "bg-gray-500"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      {selectedToggle !== null && (
        <div className="flex mt-8 space-x-4">
          <div className="flex-1 p-4">
            <p>{content[selectedToggle].text}</p>
          </div>
          <div className="flex-1 p-4">
            <img
              src={content[selectedToggle].imageUrl}
              alt={content[selectedToggle].name}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Grades;
