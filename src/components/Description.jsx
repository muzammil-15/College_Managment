import React,{useState} from 'react';
import img from '../assets/function.jpeg';
import img1 from '../assets/function1.jpeg';
import img2 from '../assets/function2.jpeg';
import img3 from '../assets/fuction3.jpeg';

const Description = () => {

    const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const descriptionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
    quis nisi eu massa congue consequat. Fusce sit amet tellus id dolor
    dapibus volutpat. Sed bibendum dui vel massa eleifend, et pharetra
    tellus molestie. Duis semper sapien sed congue euismod. Nullam mollis
    ante libero, at viverra purus pulvinar ut. Cras aliquam fringilla
    libero, sed feugiat quam viverra sed. Duis semper sapien sed congue euismod. Nullam mollis
    ante libero, at viverra purus pulvinar ut. Cras aliquam fringilla
    libero, sed feugiat quam viverra sed. Duis semper sapien sed congue euismod. Nullam mollis
    ante libero, at viverra purus pulvinar ut. Cras aliquam fringilla
    libero, sed feugiat quam viverra sed.`;

  const truncatedText = isExpanded ? descriptionText : descriptionText.slice(0, 500) + '...';

  return (
    <div className="container mx-auto px-4 py-8 gap-6 flex flex-col md:flex-row">
      {/* Left Side - Description */}
      <div className="md:w-1/2">
        <h2 className="text-[32px] font-bold mb-4 text-[#333333]">Description</h2>
        <p className='text-[20px] leading-[27px]'>{truncatedText}</p>
        {!isExpanded && (
          <button
            className="text-blue-500 mt-2"
            onClick={toggleExpansion}
          >
            Read More
          </button>
        )}
      </div>

      {/* Right Side - Images */}
      <div className="md:w-1/2 flex flex-wrap justify-between mt-4 md:mt-0">
        {/* First Column */}
        <div className="w-1/2 p-2">
          <img
            src={img}
            alt="Image 1"
            className="object-cover w-full h-48 rounded"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={img1}
            alt="Image 2"
            className="object-cover w-full h-48 rounded"
          />
        </div>

        {/* Second Column */}
        <div className="w-1/2 p-2">
          <img
            src={img2}
            alt="Image 3"
            className="object-cover w-full h-48 rounded"
          />
        </div>
        <div className="w-1/2 p-2">
          <img
            src={img3}
            alt="Image 4"
            className="object-cover w-full h-48 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
