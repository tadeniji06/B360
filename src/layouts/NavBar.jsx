import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, hero } from "../assets";
import { navLinks } from "../utils/data";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to={"/"}>
              <img src={logo} alt='B360 Logo' className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex md:gap-8 lg:gap-16'>
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-white font-medium hover:text-gray-200 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className='hidden md:block'>
           <Link to={'/contact'}>
              <button className='bg-white px-4 py-2 rounded-xl border shadow-xl hover:bg-gray-100 transition-colors text-bold-blue font-medium'>
                Book A Session
              </button>
           </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white p-2 rounded-md focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-bold-blue/95 absolute w-full z-10" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-bold-blue/80"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-3">
            <Link to={"/contact"}>
                <button 
                  className='bg-white w-full px-4 py-2 rounded-xl border shadow-xl hover:bg-gray-100 transition-colors text-bold-blue font-medium'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book A Session
                </button>
            </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
