import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import college from '../assets/college.jpeg'
import college1 from '../assets/college-s-1.jpeg'
import college2 from '../assets/college-s-2.jpeg'
import college3 from '../assets/college-s-3.jpeg'
import college4 from '../assets/college-s-4.jpeg'
import college5 from '../assets/function.jpeg'

const Hero = () => {
  const images = [college, college1, college2, college3, college4, college5]; // Array of image URLs
  const [currentImage, setCurrentImage] = useState(0);

  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const changeBackgroundImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
                
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full top-0 left-0 absolute"
                style={{height: '90vh'}}
              /><div
                className="absolute inset-0 bg-black opacity-60"
                style={{height: '90vh'}}
                aria-hidden="true"
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center z-10 h-screen">
        <h1 className="text-2xl font-bold text-white md:text-4xl">Result Management System</h1>

        {/* Login Cards */}
        <div className="mt-8 flex flex-wrap justify-center gap-10 z-10 text-white">
          {/* Student Login Card */}
          <div className="m-4 p-6 bg-[#B00909] w-[150px] h-[150px] md:w-[210px] md:h-[210px] rounded-md shadow-md">
            <div className="flex flex-col items-center text-center justify-center">
            <AccountCircleIcon className="text-white" sx={{ fontSize: isSmallDevice ? '60px' : '110px' }} />
              <span className="ml-2 font-semibold text-[16px] md:text-[22px]">Student Login</span>
            </div>
          </div>

          {/* Admin Login Card */}
          <div className="m-4 p-6 bg-[#B00909] w-[150px] h-[150px] md:w-[210px] md:h-[210px] rounded-md shadow-md">
            <div className="flex flex-col items-center text-center justify-center">
            <SupervisorAccountIcon className="text-white" sx={{ fontSize: isSmallDevice ? '60px' : '110px' }}/>
              <span className="ml-2 font-semibold text-[16px] md:text-[22px]">Admin Login</span>
            </div>
          </div>
        </div>

        {/* Custom Buttons */}
        <div className="absolute mx-auto bottom-[15%] mt-8 flex justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentImage ? 'bg-red-800' : 'bg-gray-300'
              }`}
              onClick={() => changeBackgroundImage(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
