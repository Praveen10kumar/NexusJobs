import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'OUR PARTNERS', path: '/employer' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex items-center"
            >
              <img
                src="/nexus-logo.jpeg"
                alt="Nexus Logo"
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 object-fit"
              />
            </motion.div>
            <div 
              style={{
                fontFamily: '"Font Awesome 6 Free"',
                fontWeight: 6,
                fontStyle: 'normal'
              }}
              className="hidden xs:block"
            >
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-[#3e546e] group-hover:text-[#293748] transition-colors">
                NEXUS JOBS
              </h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-2 lg:px-3 xl:px-4 py-1 lg:py-2 font-medium text-xs lg:text-sm transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'text-[#3e546e]' 
                    : 'text-gray-500 hover:text-[#3e546e]'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3e546e]"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-[#3e546e] text-white text-xs lg:text-sm px-4 lg:px-6 py-1.5 lg:py-2 rounded-full font-semibold hover:bg-[#293748] transition-all duration-300 mr-2"
          >
            Inquiry Now
          </motion.button> */}

          <Link to="/login" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#3e546e] border border-[#3e546e] text-xs lg:text-sm px-4 lg:px-6 py-1.5 lg:py-2 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Login / Register
            </motion.button>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#3e546e] hover:text-[#293748] transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 pt-2 pb-4"
            >
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 font-medium transition-colors text-sm ${
                      isActive(item.path) 
                        ? 'text-[#3e546e] bg-gray-100 rounded-lg' 
                        : 'text-gray-500 hover:text-[#3e546e] hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="mt-2 bg-[#3e546e] text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#293748]">
                  Inquiry Now
                </button>
                <Link 
                  to="/login" 
                  onClick={() => setIsOpen(false)}
                  className="mt-2 border border-[#3e546e] text-[#3e546e] px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-50 flex justify-center"
                >
                  Login / Register
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;