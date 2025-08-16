import React from 'react';
import { FiGithub, FiLinkedin, FiCode, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-light py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">
              <span className="text-primary">Nikhil</span> Chavan
            </h3>
            <p className="text-sm text-light/70">Associate Consultant at Oracle</p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://github.com/nikhilchavan2550" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light/70 hover:text-primary transition-colors duration-300"
            >
              <FiGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/nikhil-chavan-a42006218/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light/70 hover:text-primary transition-colors duration-300"
            >
              <FiLinkedin />
            </a>
            <a 
              href="https://leetcode.com/u/Nikhil_chavan11/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light/70 hover:text-primary transition-colors duration-300"
            >
              <FiCode />
            </a>
            <a 
              href="https://www.codechef.com/users/nikhilchavan35" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-light/70 hover:text-primary transition-colors duration-300"
            >
              <span className="font-bold">CC</span>
            </a>
          </div>
          
          <div className="text-center md:text-right text-sm text-light/70">
            <p className="flex items-center justify-center md:justify-end space-x-1">
              <span>© {currentYear} Nikhil Chavan. All rights reserved.</span>
              <FiHeart className="text-primary" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}