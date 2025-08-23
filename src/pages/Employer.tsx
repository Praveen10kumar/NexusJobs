import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Users, Globe, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Employer = () => {
  const [companyLogos, setCompanyLogos] = useState<string[]>([]);

  // This effect will run once on component mount to load the company logos
  useEffect(() => {
    // In a real implementation, you might want to fetch this list from an API
    // For now, we'll use a hardcoded list assuming the files exist in public/companies/
    const logos = [
      'company1.png',
      'company2.png',
      'company3.png',
      'company4.png',
      'company5.png',
      'company6.png',
      'company7.png',
      'company8.png',
      'company9.png',
      'company10.png',
      'company11.png',
      'company12.png',
      'company13.png',
      'company14.png',
      'company15.png',
      'company16.png',
      'company17.png',
      'company18.png',
      'company19.png',
      'company20.png',
      'company21.png',
      'company22.png',
      'company23.png',
      'company24.png',
      'company25.png',
      'company26.png',
      'company27.png',
      'company28.png',
      'company29.png',
      // Add all your company logo filenames here
    ];
    
    setCompanyLogos(logos);
  }, []);

  const networkStats = [
    {
      icon: Building,
      number: '50+',
      label: 'Partner Companies',
      description: 'Across various industries'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Successful Placements',
      description: 'In the last 3 years'
    },
    {
      icon: Globe,
      number: '15+',
      label: 'Cities Covered',
      description: 'Pan-India presence'
    },
    {
      icon: Star,
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Based on feedback surveys'
    }
  ];

  const benefits = [
    {
      title: "Access to Quality Talent",
      description: "Connect with pre-screened, qualified candidates who match your specific requirements.",
    },
    {
      title: "Streamlined Hiring",
      description: "Save time and resources with our efficient recruitment process tailored to your needs.",
    },
    {
      title: "Industry Expertise",
      description: "Benefit from our recruiters' deep understanding of your industry's unique hiring landscape.",
    },
    {
      title: "Flexible Engagement Models",
      description: "Choose from various recruitment solutions that align with your organizational goals.",
    },
    {
      title: "Long-term Support",
      description: "Enjoy continued assistance even after successful placement of candidates.",
    },
    {
      title: "Market Insights",
      description: "Gain valuable information about salary benchmarks, skill availability, and industry trends.",
    }
  ];

  const testimonials = [
    {
      quote: "Nexus Jobs has transformed our hiring process. Their team consistently delivers quality candidates who align perfectly with our requirements and company culture.",
      name: "Rahul Mehta",
      position: "HR Director",
      company: "TechVision India"
    },
    {
      quote: "Working with Nexus Jobs has been a game-changer for our expansion plans. They understand our needs and provide tailored recruitment solutions that have helped us scale effectively.",
      name: "Priya Shah",
      position: "COO",
      company: "GrowthFirst Solutions"
    },
    {
      quote: "The team at Nexus Jobs goes beyond just matching skills. They truly understand organizational fit and have been instrumental in building our leadership team.",
      name: "Vikram Singh",
      position: "CEO",
      company: "Innovate Systems"
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#3e546e] via-[#293748] to-[#1e2a38] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-10 w-32 md:w-64 h-32 md:h-64 bg-[#dbdce9]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-10 w-24 md:w-48 h-24 md:h-48 bg-[#dbdce9]/5 rounded-full blur-2xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#dbdce9] mb-6"
            >
              Partner with Nexus Jobs
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8"
            >
              Join our network of leading employers and access top talent tailored to your specific needs
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-white to-[#f7f8fa] text-[#3e546e] rounded-full font-semibold text-sm sm:text-base inline-flex items-center shadow-md shadow-white/20 hover:shadow-lg hover:shadow-white/30 transition-all duration-300"
                >
                  Become a Partner
                  <ArrowRight size={18} className="ml-2" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3e546e] mb-4"
            >
              Our Network at a Glance
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Join hundreds of employers who trust Nexus Jobs for their recruitment needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {networkStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-[#f7f8fa] p-6 md:p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg hover:shadow-[#3e546e]/15 transition-all duration-300"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(${62 + index * 8}, ${84 + index * 4}, ${110 - index * 3}, 0.07) 0%, rgba(255, 255, 255, 0) 60%)`
                }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#3e546e] to-[#293748] rounded-full flex items-center justify-center shadow-md shadow-[#3e546e]/20">
                  <stat.icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-[#3e546e] mb-1">
                  {stat.number}
                </h3>
                
                <p className="text-base font-medium text-[#3e546e]/80 mb-2">
                  {stat.label}
                </p>
                
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Logos Section */}
      <section className="py-16 md:py-20 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3e546e] mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to work with industry-leading companies across various sectors
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md p-8 md:p-12"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#3e546e]/5 rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 bg-[#3e546e]/3 rounded-full"></div>
            </div>
            
            {/* Logos grid */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
              {companyLogos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.05,
                    boxShadow: '0 10px 25px -5px rgba(62, 84, 110, 0.1)'
                  }}
                  className="flex items-center justify-center p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
                >
                  <img 
                    src={`/companies/${logo}`} 
                    alt={`Partner Company ${index + 1}`}
                    className="max-w-full h-16 object-contain transition-all"
                  />
                </motion.div>
              ))}
            </div>
            
            {/* If you have more logos than displayed */}
            {companyLogos.length > 12 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 text-center"
              >
                <Link to="/partners">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-[#f7f8fa] text-[#3e546e] rounded-full font-medium text-sm sm:text-base inline-flex items-center border border-gray-200 hover:border-[#3e546e]/30 hover:bg-[#3e546e]/5 transition-all duration-300"
                  >
                    View All Partners
                    <ArrowRight size={16} className="ml-2" />
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3e546e]">
                Why Partner with Nexus Jobs?
              </h2>
              
              <p className="text-gray-600 text-base sm:text-lg">
                Nexus Jobs offers a unique value proposition to employers, combining deep industry knowledge, an extensive talent network, and a personalized approach to recruitment. Our partnership approach means we become an extension of your HR team, understanding your culture and requirements to deliver the perfect talent match.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-2"
                  >
                    <CheckCircle size={18} className="text-[#3e546e] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-semibold text-[#3e546e] mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 mt-4 bg-gradient-to-r from-[#3e546e] to-[#293748] text-white rounded-full font-semibold text-sm sm:text-base inline-flex items-center shadow-md shadow-[#3e546e]/20 hover:shadow-lg hover:shadow-[#3e546e]/30 transition-all duration-300"
                >
                  Explore Our Services
                  <ArrowRight size={16} className="ml-2" />
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/src/assets/partner-image.jpg" 
                  alt="Business Partners" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3e546e]/70 to-transparent flex items-end">
                  <div className="p-6 md:p-8 text-white">
                    <h3 className="text-lg md:text-xl font-bold mb-2">Join Our Network Today</h3>
                    <p className="text-sm md:text-base text-white/90">
                      Connect with top talent across industries and locations
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 md:py-20 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3e546e] mb-4"
            >
              More Benefits for Our Partners
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Beyond recruitment, we offer additional value to our partner organizations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {benefits.slice(4).map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-[#f7f8fa] p-6 md:p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:shadow-[#3e546e]/15 transition-all duration-300"
                style={{
                  backgroundImage: `radial-gradient(circle at ${index % 2 === 0 ? 'top right' : 'bottom left'}, rgba(62, 84, 110, 0.05), transparent)`
                }}
              >
                <h3 className="text-lg md:text-xl font-bold text-[#3e546e] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3e546e] mb-4"
            >
              What Our Partners Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Hear from the companies who have partnered with us
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-[#f7f8fa] p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:shadow-[#3e546e]/15 transition-all duration-300 flex flex-col"
                style={{
                  backgroundImage: `radial-gradient(circle at ${index % 2 === 0 ? 'top right' : 'bottom left'}, rgba(62, 84, 110, 0.03), transparent)`
                }}
              >
                <div className="mb-4">
                  <svg width="40" height="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="text-[#3e546e]/20 fill-current">
                    <path d="M10.4 2.5C7.6 3.5 5.4 5.2 3.9 7.4C2.4 9.6 1.6 12.1 1.6 14.8C1.6 18.5 2.9 21.6 5.5 24.2C8.1 26.8 11.2 28 14.9 28C18.5 28 21.6 26.8 24.2 24.2C26.8 21.6 28 18.5 28 14.8C28 12.1 27.3 9.6 25.8 7.4C24.3 5.2 22.1 3.5 19.3 2.5C18.2 2.1 17.2 2.6 16.8 3.7C16.4 4.8 16.9 5.8 18 6.2C20 6.9 21.5 8.1 22.6 9.7C23.7 11.2 24.2 12.9 24.2 14.8C24.2 17.4 23.3 19.6 21.5 21.4C19.7 23.2 17.5 24.1 14.9 24.1C12.3 24.1 10.1 23.2 8.3 21.4C6.5 19.6 5.6 17.4 5.6 14.8C5.6 12.9 6.1 11.2 7.2 9.7C8.3 8.1 9.8 6.9 11.8 6.2C12.9 5.8 13.4 4.8 13 3.7C12.6 2.6 11.5 2.1 10.4 2.5Z"/>
                  </svg>
                </div>
                
                <p className="text-gray-600 mb-6 text-sm md:text-base flex-grow italic">
                  "{testimonial.quote}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-[#3e546e]">
                    {testimonial.name}
                  </h4>
                  <div className="text-sm text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#3e546e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 md:p-10 lg:p-12 rounded-3xl border border-white/30 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Ready to Partner with Nexus Jobs?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto">
              Join our network of employers and gain access to top talent across India. Our team is ready to discuss your specific recruitment needs.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-white to-[#f7f8fa] text-[#3e546e] rounded-full font-semibold text-base md:text-lg shadow-md shadow-white/20 hover:shadow-lg hover:shadow-white/30 transition-all duration-300 flex items-center justify-center mx-auto"
              >
                Become a Partner
                <ArrowRight size={20} className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Employer;