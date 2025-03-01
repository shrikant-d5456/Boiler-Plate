import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
    document.documentElement.classList.toggle("dark");
  };

  const Logo = "https://codingbits.in/img/CB1.png";

  return (
    <header className="w-full py-3 px-8 dark:bg-slate-950 dark:text-white shadow-xl">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex-shrink-0 bg-white">
          <img src={Logo} alt="Logo" className="h-10 w-20 mx-4 object-cover dark:mix-blend-multiply" />
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex justify-center items-center space-x-4 uppercase tracking-widest">
          <a href="#home" className="navbar-text">Home</a>
          <a href="#about" className="navbar-text">About</a>
          <a href="#service" className="navbar-text">Services</a>
          <a href="#contact" className="navbar-text">Contact</a>
          <button
            className='border-2 px-0 py-0 rounded-full text-base flex items-center justify-center bg-white'
            onClick={toggleTheme}
          >
            <span className={`${theme || "bg-sky-400 text-white "} dark:text-black px-3 py-2 rounded-l-full transition-all duration-200`} title='Switch to Sun Mode'><BsSunFill /></span>
            <span className={`${theme && "bg-sky-400 text-white "} text-black px-3 py-2 rounded-r-full transition-all duration-200`} title='Switch to Night Mode'><BsMoonFill /></span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className='border-2 px-0 py-0 rounded-full sm:text-lg text-md mx-4 flex items-center justify-center bg-white'
            onClick={toggleTheme}
          >
            <span className={`${theme || "bg-sky-400 text-white "} dark:text-black px-3 py-3 rounded-l-full transition-all duration-200`} title='Switch to Sun Mode'><BsSunFill /></span>
            <span className={`${theme && "bg-sky-400 text-white "} text-black px-3 py-3 rounded-r-full transition-all duration-200`} title='Switch to Night Mode'><BsMoonFill /></span>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <BiX className="h-6 w-6" /> : <BiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Items */}
      {isOpen && (
        <div
          className={`md:hidden  w-full text-left sm:px-2 pt-2 pb-3 space-y-1 uppercase tracking-widest`}
        >
          <>
            <a href="#home" className="block w-full px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="block w-full px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#service" className="block w-full px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#contact" className="block w-full px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </>
        </div>
      )}
    </header>
  );
};

export default Header;
