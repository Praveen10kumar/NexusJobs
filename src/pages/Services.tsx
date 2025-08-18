import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  Award,
  Shield,
  Clock,
  Zap,
  Globe,
  HeadphonesIcon,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Project Work Outsourcing (PWO)',
      description: 'Complete project outsourcing solutions with dedicated teams and flexible engagement models.',
      features: ['Dedicated project teams', 'Flexible engagement models', 'End-to-end project delivery', 'Cost-effective solutions']
    },
    {
      icon: Users,
      title: 'Resource Process Outsourcing (RPO)',
      description: 'Comprehensive recruitment process outsourcing to scale your hiring operations efficiently.',
      features: ['Full recruitment cycle management', 'Scalable hiring solutions', 'Advanced screening processes', 'Technology-driven approach']
    },
    {
      icon: Target,
      title: 'Manpower Recruitment',
      description: 'Expert recruitment services for permanent, temporary, and contract staffing across all industries.',
      features: ['Permanent staffing', 'Temporary placements', 'Contract hiring', 'Industry expertise']
    },
    {
      icon: Star,
      title: 'HR Consultancy',
      description: 'Strategic HR consulting services to optimize your human resource management and processes.',
      features: ['HR strategy development', 'Policy formulation', 'Performance management', 'Compliance support']
    },
    {
      icon: CheckCircle,
      title: 'Placement Services',
      description: 'Specialized placement services connecting the right talent with the right opportunities.',
      features: ['Executive search', 'Talent mapping', 'Cultural fit assessment', 'Long-term partnerships']
    },
    {
      icon: TrendingUp,
      title: 'Training Model',
      description: 'Comprehensive training programs to upskill candidates and enhance organizational capabilities.',
      features: ['Skills development', 'Leadership training', 'Technical certifications', 'Custom programs']
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Guaranteed Quality',
      description: 'Rigorous screening and quality assurance processes ensure top-tier talent delivery.'
    },
    {
      icon: Clock,
      title: 'Faster Hiring',
      description: 'Reduced time-to-hire with our streamlined processes and extensive talent database.'
    },
    {
      icon: Zap,
      title: 'Cost Efficiency',
      description: 'Significant cost savings on recruitment and HR operations with our optimized solutions.'
    },
    {
      icon: Globe,
      title: 'Pan-India Network',
      description: 'Extensive network coverage across India with local market expertise in each region.'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock support and assistance for all your HR and recruitment needs.'
    },
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Deep domain knowledge across IT, non-IT, healthcare, finance, and manufacturing sectors.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Understanding Requirements',
      description: 'We analyze your specific needs, company culture, and job requirements in detail.'
    },
    {
      step: '02',
      title: 'Talent Sourcing',
      description: 'Using our extensive network and advanced tools to identify the best candidates.'
    },
    {
      step: '03',
      title: 'Screening & Assessment',
      description: 'Comprehensive evaluation including technical skills, cultural fit, and behavioral assessment.'
    },
    {
      step: '04',
      title: 'Client Presentation',
      description: 'Present shortlisted candidates with detailed profiles and assessment reports.'
    },
    {
      step: '05',
      title: 'Interview Coordination',
      description: 'Seamless coordination of interview processes and feedback collection.'
    },
    {
      step: '06',
      title: 'Onboarding Support',
      description: 'Complete support during offer negotiation, acceptance, and smooth onboarding.'
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
              Our Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Comprehensive HR solutions designed to transform your recruitment process and drive organizational success
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#293748]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#dbdce9] mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive recruitment and HR solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                    <service.icon className="w-8 h-8 text-[#3e546e]" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#dbdce9] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#dbdce9]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-[#3e546e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#dbdce9] mb-6">
              How We Help
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We transform your recruitment process through innovative solutions and expert guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-[#dbdce9]">For Candidates</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>We empower job seekers by providing access to exclusive opportunities and career guidance:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#dbdce9] mt-0.5" />
                      <span>Access to hidden job markets and exclusive opportunities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#dbdce9] mt-0.5" />
                      <span>Professional resume optimization and interview coaching</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#dbdce9] mt-0.5" />
                      <span>Career counseling and skill development guidance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#dbdce9] mt-0.5" />
                      <span>Long-term career planning and growth strategies</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-[#dbdce9]">For Companies</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>We help organizations build high-performing teams through strategic recruitment:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#dbdce9] mt-0.5" />
                      <span>Reduce time-to-hire by 50% with our streamlined processes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#dbdce9] mt-0.5" />
                      <span>Access to pre-screened, qualified talent pools</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#dbdce9] mt-0.5" />
                      <span>Cost optimization with flexible engagement models</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#dbdce9] mt-0.5" />
                      <span>Market insights and salary benchmarking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Process Steps */}
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-[#3e546e]/30 rounded-xl border border-[#dbdce9]/10 hover:border-[#dbdce9]/20 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#dbdce9] to-[#dbdce9]/80 rounded-full flex items-center justify-center font-bold text-[#3e546e]">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#dbdce9] mb-2">{step.title}</h4>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#293748]">
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
              Experience the benefits of working with India's leading HR consultancy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#dbdce9] mb-6">
              Ready to Transform Your Hiring?
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join 50+ companies who trust Nexus Jobs for their recruitment needs. 
              Let's discuss how we can help you build your dream team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#dbdce9] to-[#dbdce9]/90 text-[#3e546e] rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              
              <motion.a
                href="tel:8384935940"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#dbdce9] text-[#dbdce9] rounded-full font-semibold text-lg hover:bg-[#dbdce9] hover:text-[#3e546e] transition-all duration-300"
              >
                Call Us: 8384935940
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;