import React from 'react';
import { Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className="bg-[#333333] p-6  text-white text-center">
      <div className="container w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center flex-col gap-3 mb-4 md:mb-0">
          <h2 className='text-[26px]'>Govt College</h2>
          <div className="flex items-center gap-3 mb-2 md:mb-0 md:mr-4">
          <div style={{ backgroundColor: 'red' }} className='w-[40px] h-[40px] flex justify-center items-center rounded-full'> 
            <FacebookIcon className=" cursor-pointer " color="white"/>
          </div>
          <div style={{ backgroundColor: 'red' }} className='w-[40px] h-[40px] flex justify-center items-center rounded-full'> 
            <YouTubeIcon className=" cursor-pointer " color="white"/>
          </div>
          <div style={{ backgroundColor: 'red' }} className='w-[40px] h-[40px] flex justify-center items-center rounded-full'> 
            <LinkedInIcon className=" cursor-pointer " color="white"/>
          </div>
            
            
            
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          
          <div className="flex flex-col gap-10 text-left md:flex-row">
            <Column title="Information" links={['Home', 'About', 'Learn more']} />
            <Column title="About" links={['Cokies & settings', 'Privacy $ permision', 'Terms of use']} />
          </div>
        </div>
      </div>
      <Typography variant="body1" component="span">
            © 2023 Your Company
          </Typography>
    </footer>
  );
}

function Column({ title, links }) {
  return (
    <div className="mr-4 mb-2 flex gap-4  flex-col">
      <Typography variant="subtitle1" gutterBottom>
        {title}
      </Typography>
      {links.map((link, index) => (
        <Link key={index} href="#" variant="body2" sx={{color: 'white', textDecoration: 'none'}}>
          {link}
        </Link>
      ))}
    </div>
  );
}

export default Footer;
