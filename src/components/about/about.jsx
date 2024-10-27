import React from "react";
import About2 from "../../assets/about2.jpg";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white p-6">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Left Side - Image */}
        <div className="flex-1 mb-4 md:mb-0">
          <img
            src={About2} 
            alt="Tea Leaves"
            className="object-cover w-full h-64 md:h-[550px] rounded-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">About Sri Lankan Black Tea</h2>
          <p className="text-justify font-serif leading-relaxed">
            Sri Lanka is renowned worldwide for its tea production, with Low Country black tea grade
            playing a pivotal role in driving the nation’s economy. Identifying black tea grades is
            essential for quality assurance, pricing, and standardization, enhancing market demand
            and preserving tea production quality. Traditional black tea grading methods in tea
            factories rely on manual labor and subjective evaluation, leading to inconsistencies and
            inefficiencies that can impact quality and pricing.
          </p>
          <p className="text-justify mt-4 text-amber-700 font-serif leading-relaxed">
            This study introduces a deep learning and Image Classification approach to automate
            black tea grading, focusing on four main black tea grades: OPA (Orange Pekoe A), BOP
            (Broken Orange Pekoe), OP1 (Orange Pekoe One), and P (Pekoe). For this research, images
            were collected from multiple tea factories in different low country regions, focusing on
            factors identifying features such as dry tea leaves color, shape, and size. To ensure
            accuracy, an 80/20 training and testing split was applied to a dataset of approximately
            1,000 images, maintaining a 1:1 ratio, allowing for the clear identification of the
            components of a single dry tea leaf.
          </p>
          <p className="text-justify mt-4 font-serif leading-relaxed">
            After preprocessing the dataset to an image resize of 80x80 pixels and labeling, four
            CNN models - AlexNet, VGG16, VGG19, and a custom CNN model - were trained and tested.
            Each model performed well, among which the VGG16 model achieved the highest accuracy of
            99.69%, confirming a high ranking among the four black tea grade samples, which is a
            great approach to automating the identification process.
          </p>
          <p className="text-justify mt-4 text-amber-700 font-serif leading-relaxed">
            This CNN-based automated grading framework reduces human error and labor while providing
            a scalable and objective solution for the tea industry, leading to more consistent
            grading standards. It supports Sri Lanka's tea sector in maintaining competitive,
            high-quality production and efficiency in quality assurance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
