import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
   useEffect(()=>{
    const handleResize = () => {
        if (window.innerWidth < 640) {
          setIsOpen(false);
        } 
    }


   },[]);

   const resize = window.addEventListener("resize",()=>{
    if(window.innerWidth>=640){
        setIsOpen(false);
    }
   })

  return (
    <nav style={{backgroundColor: '#B00909'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={isOpen?"w-full h-full flex items-center flex-col text-center py-5" :"flex items-center justify-between h-16"}>
          {/* Logo */}
          <div className={`flex items-center`}>
              <Link to="/" className="flex items-center">
                {/* Logo Icon */}
                <span className="logo font-semibold text-2xl ml-2">Govt College</span>
              </Link>
          </div>

          {/* Hamburger button (on small devices) */}
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              {isOpen ? (
                <CloseIcon className="h-6 w-6 absolute top-2 right-2" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Center Links */}
          <div
            className={`${
              isOpen ? 'flex gap-4' : 'hidden'
            } md:flex items-center justify-center flex-1`}
          >
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <Link to="/" className="text-gray-200 hover:bg-gray-200 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <a href="/" className="text-gray-200 hover:bg-gray-200 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium">
                Policies
              </a>
              <Link to="/admission" className="text-gray-200 hover:bg-gray-200 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium">
                Online Admissions
              </Link>
            </div>
          </div>

          {/* Right Button */}
            <div className={isOpen ? "flex" : "hidden md:flex items-center"}>
              <button className="bg-gray-200 text-red-800 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium">
                Contact
              </button>
            </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;