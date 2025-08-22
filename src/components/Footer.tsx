import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Employer', path: '/employer' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Project Work Outsourcing (PWO)',
    'Resource Process Outsourcing (RPO)',
    'Manpower Recruitment',
    'HR Consultancy',
    'Placement Services',
    'Training Model'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' },
  ];

  return (
    <footer className="bg-[#293748] border-t border-[#dbdce9]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-[#dbdce9] to-[#dbdce9]/80 rounded-full">
                <Briefcase className="h-6 w-6 text-[#3e546e]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#dbdce9]">NEXUS JOBS</h1>
                <p className="text-sm text-[#dbdce9]/80">HR Consultancy</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in Jaipur for all your human resource needs. We specialize in recruitment, 
              talent acquisition, and HR strategy development.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, name }) => (
                <motion.a
                  key={name}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 bg-[#3e546e]/50 rounded-full text-[#dbdce9] hover:bg-[#dbdce9] hover:text-[#3e546e] transition-all duration-300"
                  aria-label={name}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-[#dbdce9] font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#dbdce9] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-[#dbdce9] font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-[#dbdce9] font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <Phone size={16} className="text-[#dbdce9]" />
                <span>8384935940</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <Mail size={16} className="text-[#dbdce9]" />
                <span>info@nexusjobs.in</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300 text-sm">
                <MapPin size={16} className="text-[#dbdce9] mt-0.5" />
                <span>1A Prem Nagar Thana, Sanganer, Jaipur 302029</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-[#dbdce9]/20"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 Nexus Jobs. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm text-center sm:text-right">
              Aspire HR Consultants Fluent in finding leaders — The HR One-Stop Shop
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;