import { Icon } from "@iconify/react/dist/iconify.js";
import { navLinks } from "../utils/data";

const socialLinks = [
  { icon: "mdi:facebook", link: "#" },
  { icon: "mdi:twitter", link: "#" },
  { icon: "mdi:instagram", link: "#" },
];

const Footer = () => {
  return (
    <footer className='py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bold-blue to-blue-900 text-white mt-8'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* About Section */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">B360</h2>
          <p className="text-blue-100 mb-6">
            Business360 Suite (B360) is a software solutions corporation
            focused on developing modular, industry-specific enterprise
            resource management (ERM) systems.
          </p>
          
          {/* Social Links moved under About section */}
          <div className='flex space-x-4 mt-4'>
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.link}
                className='hover:text-primary-yellow transition-colors'
              >
                <Icon icon={social.icon} className='w-6 h-6' />
              </a>
            ))}
          </div>
        </div>
        
        {/* Company Section */}
        <div className="md:col-span-1">
          <h3 className='text-lg font-semibold mb-4'>Company</h3>
          <ul className='space-y-2'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  className='text-blue-100 hover:text-white transition-colors'
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Support Section */}
        <div className="md:col-span-1">
          <h3 className='text-lg font-semibold mb-4'>Support</h3>
          <ul className='space-y-2'>
            <li>
              <a
                href='#'
                className='text-blue-100 hover:text-white transition-colors'
              >
                Help
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-blue-100 hover:text-white transition-colors'
              >
                Send Feedback
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-blue-100 hover:text-white transition-colors'
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        
        {/* Contact Section - Now last in the grid */}
        <div className="md:col-span-1">
          <h3 className='text-lg font-semibold mb-4'>
            Got Questions For Us?
          </h3>
          <div className='space-y-4'>
            <input
              type='email'
              placeholder='Email'
              className='w-full px-3 py-2 bg-transparent border border-white text-white placeholder-gray-300 rounded'
            />
            <div className="relative">
              <textarea
                placeholder='Enter Message'
                className='w-full resize-none px-3 py-2 bg-transparent border border-white text-white placeholder-gray-300 rounded h-24 pr-20'
              ></textarea>
              <button
                type='button'
                className='absolute bottom-3 right-3 bg-white text-blue-900 px-4 py-1 rounded hover:bg-gray-100 transition-colors text-sm'
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className='mt-8 pt-6 border-t border-blue-700 text-center md:text-left'>
        <p className='text-sm text-blue-100'>
          © 2025 Business Suite (B360). All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
