import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Award, CheckCircle, ArrowRight, Star, Building, Target } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Technology Scale Team With Ease",
      description: "Advanced recruitment technology to scale your team efficiently"
    },
    {
      icon: Award,
      title: "Hiring of Quality Candidates",
      description: "Rigorous screening process ensures top-tier talent acquisition"
    },
    {
      icon: Target,
      title: "Reduces Hiring Cost",
      description: "Cost-effective solutions that optimize your recruitment budget"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Screening",
      description: "Thorough candidate evaluation and pool screening process"
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Placements", icon: Users },
    { number: "50+", label: "Partner Companies", icon: Building },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: CheckCircle }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('public/category2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3e546e]/80 via-[#293748]/80 to-[#1e2a38]/90"></div>

        {/* Animated Background Elements */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 left-10 w-20 h-20 bg-[#dbdce9]/10 rounded-full blur-xl hidden sm:block"
          />
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-10 w-32 h-32 bg-[#dbdce9]/5 rounded-full blur-2xl hidden sm:block"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#dbdce9]/8 rounded-full blur-lg sm:block"
          />
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Floating Text Animation */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#dbdce9] relative"
              >
                <span className="block">NEXUS</span>
                <motion.span
                  animate={{ 
                    backgroundPosition: ["0%", "100%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="block bg-gradient-to-r from-[#dbdce9] via-white to-[#dbdce9] bg-300% bg-clip-text text-transparent"
                >
                  JOBS
                </motion.span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-wrap justify-center gap-8 text-lg md:text-xl font-semibold text-gray-300"
              >
                <span className="px-4 py-2 bg-[#dbdce9]/10 backdrop-blur-sm rounded-full border border-[#dbdce9]/20">
                  JOB SEEKERS
                </span>
                <span className="px-4 py-2 bg-[#dbdce9]/10 backdrop-blur-sm rounded-full border border-[#dbdce9]/20">
                  EMPLOYERS
                </span>
                <span className="px-4 py-2 bg-[#dbdce9]/10 backdrop-blur-sm rounded-full border border-[#dbdce9]/20">
                  INTERNSHIP
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Explore a World of Opportunity — Nexus HR Consultancy
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/services"
                className="group px-8 py-4 bg-gradient-to-r from-[#dbdce9] to-[#dbdce9]/90 text-[#3e546e] rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-[#dbdce9] text-[#dbdce9] rounded-full font-semibold text-lg hover:bg-[#dbdce9] hover:text-[#3e546e] transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/*  */}
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#3e546e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="text-center p-6 bg-[#3e546e]/90 backdrop-blur-sm rounded-2xl border border-[#dbdce9]/10 hover:border-[#dbdce9]/30 transition-all duration-300"
              >
                <stat.icon className="w-12 h-12 text-[#dbdce9] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-[#dbdce9] mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-r from-[#293748] to-[#3e546e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#dbdce9] mb-6">
              Welcome to Nexus Jobs
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Your trusted partner in Jaipur for all your human resource needs. We offer a wide range of services, 
              including recruitment, talent acquisition, and HR strategy development. Our dedicated team is committed 
              to helping businesses find the right talent, streamline HR processes, and create a thriving workplace culture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg text-[#dbdce9] font-medium mb-8">
              "Aspire HR Consultants Fluent in finding leaders — The HR One-Stop Shop with Your Professional HR Partner"
            </p>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#dbdce9]/10 backdrop-blur-sm border border-[#dbdce9]/30 rounded-full text-[#dbdce9] hover:bg-[#dbdce9] hover:text-[#3e546e] transition-all duration-300"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-[#d7e3f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#545670] mb-6">
              Our Approach
            </h2>
            <p className="text-2xl text-slate-500 max-w-3xl mx-auto">
              Curious to know what it's like to partner with Nexus Jobs?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="group relative p-8 bg-[#3e546e] backdrop-blur-sm rounded-2xl border border-[#dbdce9]/10 hover:border-[#dbdce9]/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#dbdce9]/2 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#dbdce9] to-[#dbdce9]/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-[#3e546e]" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#dbdce9] mb-4 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#fbfbfc] text-[#3e546e] rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Read More</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#d7e3f1] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 right-10 w-40 h-40 bg-[#dbdce9]/5 rounded-full blur-2xl"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#9ea3ea]">
              Build Your Future Here
            </h2>

            <div className="space-y-4 text-xl text-[#9ea3ea]">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Do you love being at the cutting edge of projects?
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Are you proud of the skills you've built?
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Do you want to be involved in a thriving community?
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-[#fbfbfc] text-[#3e546e] rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span>Join Our Team</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;