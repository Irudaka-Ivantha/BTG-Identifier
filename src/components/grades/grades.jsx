import React, { useState } from "react";
import NavBar from '../../components/home/navBar';
import BOPImage from '../../assets/BOP (1).jpg';
import OP1Image from '../../assets/OP 1 (1).jpg';
import OPAImage from '../../assets/OPA (1).jpg';
import PekoeImage from '../../assets/Peakoe (1).jpg';

const Grades = () => {
  const [selectedToggle, setSelectedToggle] = useState(null);

  const content = [
    {
      name: "OPA (Orange Pekoe A)",
      subtitle: "BLACK TEA",
      text: `OPA, or Orange Pekoe A, is a premium grade of black tea renowned for its delicate, leaf-like appearance and subtle aroma. 
      Originating primarily from Sri Lanka and India, this tea is characterized by long, wiry leaves that are carefully hand-picked. 
      The infusion yields a light amber color, complemented by a refreshing, floral fragrance. OPA is often praised for its mellow flavor, 
      providing a smooth, slightly fruity taste that makes it an ideal choice for those seeking a gentle yet flavorful tea experience. 
      Its versatility allows it to be enjoyed plain or with a splash of milk, making it a favorite among tea enthusiasts.`,
      imageUrl: OPAImage,
    },
    {
      name: "BOP (Broken Orange Pekoe)",
      subtitle: "BLACK TEA",
      text: `Broken Orange Pekoe (BOP) is a grade that signifies a break in the leaf during processing, leading to smaller, more robust particles. 
      This grade is particularly valued for its strength and briskness, offering a rich and full-bodied flavor that is both invigorating and satisfying. 
      BOP is commonly used in blends and tea bags, where its strong character shines through, especially in milk-based preparations. 
      The infusion produces a deep, amber hue, and the aroma is bold, often with malty or slightly spicy notes. As a staple in many households, 
      BOP tea is perfect for those who enjoy a hearty cup to kickstart their day or for an afternoon pick-me-up.`,
      imageUrl: BOPImage,
    },
    {
      name: "OP1 (Orange Pekoe One)",
      subtitle: "BLACK TEA",
      text: `Orange Pekoe One (OP1) is a distinguished black tea grade known for its high-quality leaves and exquisite flavor profile. 
      With a leaf structure that is slightly larger than OPA, OP1 exhibits a refined appearance, often featuring a mix of both whole leaves and tips. 
      This grade is celebrated for its bright, brisk taste, accompanied by a fresh, aromatic bouquet. The infusion yields a golden to amber color, 
      making it visually appealing. OP1 is particularly sought after for its ability to deliver a balanced cup, perfect for enjoying without additives, 
      although it can also pair beautifully with a hint of lemon or honey.`,
      imageUrl: OP1Image,
    },
    {
      name: "P (Pekoe)",
      subtitle: "BLACK TEA",
      text: `Pekoe, a foundational grade in the black tea hierarchy, refers to the young, tender leaves and buds that are harvested at the beginning of the tea season. 
      This grade is recognized for its fine, delicate leaves and the fresh, grassy flavor it imparts. The tea produced from Pekoe leaves often has a light amber infusion, 
      with a smooth texture and a hint of sweetness. Its subtle flavor makes Pekoe an excellent choice for those who prefer a milder tea experience. 
      Often served plain or with minimal additions, Pekoe allows the natural essence of the tea to shine, providing a calming and refreshing beverage for any time of day.`,
      imageUrl: PekoeImage,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <NavBar />

      {/* Toggle Buttons styled like image */}
      <div className="flex flex-wrap justify-center mt-4 space-x-4">
        {content.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedToggle(index)}
            className={`flex flex-col items-center px-6 py-4 w-48 mb-4 rounded-md transition-colors ${
              selectedToggle === index ? "bg-[#86C240] text-black" : "bg-[#1A1A1A] text-white"
            }`}
          >
            <span className="font-semibold text-m font-serif">{item.name}</span>
            <span className="text-m text-gray-300 mt-1 font-serif">{item.subtitle}</span>
          </button>
        ))}
      </div>

      {/* Content Section */}
      {selectedToggle !== null && (
        <div className="flex flex-col md:flex-row mt-8 px-4 md:px-8 items-start">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-2 text-amber-700 font-serif">{content[selectedToggle].name}</h2>
            <p className="text-justify text-lg md:text-2xl font-serif leading-relaxed">{content[selectedToggle].text}</p>
          </div>
          <div className="w-full md:w-1/3 p-4 flex justify-center">
            <img
              src={content[selectedToggle].imageUrl}
              alt={content[selectedToggle].name}
              className="w-full h-auto max-h-80 object-cover rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Grades;
