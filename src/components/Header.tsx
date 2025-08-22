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
      className="bg-[#3e546e]/90 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-[#dbdce9]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              
            >
              <img
                src="src/assets/nexus-logo.jpeg"
                alt="Nexus Logo"
                className="h-10 w-10 object-fit"
              />
            </motion.div>
            <div style={{
              fontFamily: '"Font Awesome 6 Free"',
              fontWeight: 6,
              fontStyle: 'normal'
            }}>
              <h2 className="text-lg font-bold text-[#dbdce9] group-hover:text-white transition-colors">
                NEXUS JOBS
              </h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 font-medium transition-all duration-300 hover:text-[#dbdce9] ${
                  isActive(item.path) 
                    ? 'text-[#dbdce9]' 
                    : 'text-gray-300 hover:text-[#dbdce9]'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#dbdce9]"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-[#dbdce9] to-[#dbdce9]/90 text-[#3e546e] px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Inquiry Now
          </motion.button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#dbdce9] hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="md:hidden border-t border-[#dbdce9]/20 pt-4 pb-6"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 font-medium transition-colors ${
                      isActive(item.path) 
                        ? 'text-[#dbdce9] bg-[#dbdce9]/10 rounded-lg' 
                        : 'text-gray-300 hover:text-[#dbdce9]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="mt-4 bg-gradient-to-r from-[#dbdce9] to-[#dbdce9]/90 text-[#3e546e] px-6 py-2 rounded-full font-semibold">
                  Inquiry Now
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;