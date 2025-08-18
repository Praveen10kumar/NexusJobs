// ...existing code...
import { motion } from 'framer-motion';
import { 
  Network, 
  Users, 
  Target, 
  Award, 
  Handshake,
  Globe,
  TrendingUp,
  Star,
  CheckCircle,
  Building,
  UserCheck,
  Shield,
  Clock,
  ArrowRight
} from 'lucide-react';

const Employer = () => {
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

  const clientHandling = [
    {
      icon: Target,
      title: 'Requirement Analysis',
      description: 'Deep dive into your specific needs, company culture, and role requirements to ensure perfect matches.'
    },
    {
      icon: UserCheck,
      title: 'Dedicated Account Manager',
      description: 'Assigned dedicated account manager for personalized service and seamless communication throughout the process.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Multi-level screening and quality checks to ensure only the best candidates reach your consideration.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Committed to meeting deadlines with our proven track record of on-time candidate submissions.'
    },
    {
      icon: Handshake,
      title: 'Long-term Partnership',
      description: 'Building lasting relationships with ongoing support, market insights, and strategic recruitment advice.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Regular reporting and analytics to track hiring performance and optimize recruitment strategies.'
    }
  ];

  const recruiters = [
    {
      name: 'Tech Solutions Inc.',
      specialization: 'IT & Software Development',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Leading technology recruiter specializing in full-stack developers, DevOps engineers, and technical architects.',
      placements: '150+ placements',
      industries: ['Fintech', 'E-commerce', 'SaaS']
    },
    {
      name: 'Healthcare Staffing Pro',
      specialization: 'Healthcare & Medical',
      image: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Specialized healthcare recruitment covering doctors, nurses, medical technicians, and healthcare administrators.',
      placements: '200+ placements',
      industries: ['Hospitals', 'Clinics', 'Pharma']
    },
    {
      name: 'Finance Talent Hub',
      specialization: 'Finance & Banking',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert recruitment for banking, financial services, accounting, and investment management positions.',
      placements: '120+ placements',
      industries: ['Banking', 'Insurance', 'Investment']
    },
    {
      name: 'Manufacturing Masters',
      specialization: 'Manufacturing & Engineering',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Specialized in manufacturing, mechanical, electrical, and industrial engineering recruitment.',
      placements: '80+ placements',
      industries: ['Automotive', 'Aerospace', 'Industrial']
    },
    {
      name: 'Sales Force Partners',
      specialization: 'Sales & Marketing',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert recruitment for sales professionals, marketing managers, and business development roles.',
      placements: '100+ placements',
      industries: ['FMCG', 'Real Estate', 'Tech']
    },
    {
      name: 'Executive Search Elite',
      specialization: 'Executive & Leadership',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'High-level executive search for C-suite positions, directors, and senior management roles.',
      placements: '50+ placements',
      industries: ['Corporate', 'Startups', 'MNCs']
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Deep domain knowledge across 15+ industries with specialized recruitment teams for each sector.'
    },
    {
      icon: Network,
      title: 'Extensive Network',
      description: 'Access to our vast network of pre-screened candidates and industry professionals across India.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Process',
      description: 'Streamlined recruitment process with defined milestones and transparent communication at every step.'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Regular market intelligence reports, salary benchmarking, and hiring trend analysis for better decisions.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#3e546e] via-[#293748] to-[#1e2a38] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-10 w-40 h-40 bg-[#dbdce9]/8 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-10 w-32 h-32 bg-[#dbdce9]/5 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-[#dbdce9] mb-6"
            >
              For Employers
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Partner with our extensive network of specialized recruiters to find the perfect talent for your organization
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-20 bg-[#293748]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#dbdce9] mb-6">
              Our Network
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging our extensive network to connect you with the best talent across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="text-center p-8 bg-gradient-to-br from-[#3e546e]/40 to-[#3e546e]/20 backdrop-blur-sm rounded-3xl border border-[#dbdce9]/10 hover:border-[#dbdce9]/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#dbdce9] to-[#dbdce9]/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-[#3e546e]" />
                </div>
                
                <h3 className="text-3xl font-bold text-[#dbdce9] mb-2">{stat.number}</h3>
                <p className="text-lg font-medium text-[#dbdce9]/80 mb-2">{stat.label}</p>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Handle Clients */}
      <section className="py-20 bg-[#3e546e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#dbdce9] mb-6">
              How We Handle Clients
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our client-centric approach ensures personalized service and exceptional results for every partnership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientHandling.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="group relative p-8 bg-gradient-to-br from-[#3e546e]/40 to-[#3e546e]/20 backdrop-blur-sm rounded-3xl border border-[#dbdce9]/10 hover:border-[#dbdce9]/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#dbdce9]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
                
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#dbdce9] to-[#dbdce9]/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-[#3e546e]" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#dbdce9] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Recruiters */}
      <section className="py-20 bg-[#293748]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#dbdce9] mb-6">
              Our Recruiter Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Meet our specialized recruiter partners who bring deep industry expertise and proven track records
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recruiters.map((recruiter, index) => (
              <motion.div
                key={recruiter.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-gradient-to-br from-[#3e546e]/40 to-[#3e546e]/20 backdrop-blur-sm rounded-3xl p-8 border border-[#dbdce9]/10 hover:border-[#dbdce9]/30 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src={recruiter.image}
                        alt={recruiter.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-[#dbdce9]/20 group-hover:border-[#dbdce9]/50 transition-all duration-300"
                      />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-[#dbdce9] group-hover:text-white transition-colors">
                        {recruiter.name}
                      </h3>
                      <p className="text-[#dbdce9]/80 font-medium text-sm">
                        {recruiter.specialization}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {recruiter.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">Track Record:</span>
                      <span className="text-[#dbdce9] font-medium">{recruiter.placements}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {recruiter.industries.map((industry) => (
                        <span
                          key={industry}
                          className="px-3 py-1 bg-[#dbdce9]/10 border border-[#dbdce9]/20 rounded-full text-xs text-[#dbdce9]"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#3e546e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#dbdce9] mb-6">
              Why Partner With Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of working with India's most trusted recruitment network
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group text-center p-8 bg-gradient-to-br from-[#3e546e]/40 to-[#3e546e]/20 backdrop-blur-sm rounded-2xl border border-[#dbdce9]/10 hover:border-[#dbdce9]/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#dbdce9] to-[#dbdce9]/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-[#3e546e]" />
                </div>
                
                <h3 className="text-xl font-semibold text-[#dbdce9] mb-4 group-hover:text-white transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Potential */}
      <section className="py-20 bg-[#293748] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 left-10 w-40 h-40 bg-[#dbdce9]/5 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 right-10 w-32 h-32 bg-[#dbdce9]/8 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#dbdce9]">
                Unlock Your Platform's Potential
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                At NEXUS JOBS, our expertise spans the full spectrum of today's technology landscape, 
                with a platform-agnostic approach that ensures we find the perfect fit for your unique 
                business needs.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#dbdce9]" />
                  <span className="text-gray-300">Platform-agnostic recruitment approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#dbdce9]" />
                  <span className="text-gray-300">Technology-first candidate sourcing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#dbdce9]" />
                  <span className="text-gray-300">Custom solutions for unique business needs</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#dbdce9] to-[#dbdce9]/90 text-[#3e546e] rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Partner With Us</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Partner logos placeholder */}
                {[...Array(8)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    className="aspect-square bg-gradient-to-br from-[#3e546e]/40 to-[#3e546e]/20 backdrop-blur-sm rounded-2xl border border-[#dbdce9]/10 hover:border-[#dbdce9]/30 transition-all duration-300 flex items-center justify-center"
                  >
                    <Building className="w-8 h-8 text-[#dbdce9]/60" />
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#dbdce9]/20 rounded-full blur-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3e546e] to-[#293748] relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#dbdce9] mb-6">
              Ready to Scale Your Team?
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our network of successful employers and experience the power of strategic recruitment. 
              Let's build your dream team together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#dbdce9] to-[#dbdce9]/90 text-[#3e546e] rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Partnership</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              
              <motion.a
                href="mailto:info@nexusjobs.in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#dbdce9] text-[#dbdce9] rounded-full font-semibold text-lg hover:bg-[#dbdce9] hover:text-[#3e546e] transition-all duration-300"
              >
                Email: info@nexusjobs.in
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Employer;