import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Building, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => { 
  const serviceCategories = [
    {
      icon: Code,
      title: "IT Recruitment",
      description: "Expert solutions for technical roles",
      services: [
        "Software Development",
        "Data Science & Analytics",
        "Cloud & DevOps",
        "Cybersecurity",
        "Product Management",
        "UI/UX Design"
      ]
    },
    {
      icon: Building,
      title: "Non-IT Recruitment",
      description: "Talent acquisition across sectors",
      services: [
        "Finance & Accounting",
        "Sales & Marketing",
        "Human Resources",
        "Operations & Supply Chain",
        "Legal & Compliance",
        "Administrative Support"
      ]
    },
    {
      icon: Briefcase,
      title: "Executive Search",
      description: "Leadership talent solutions",
      services: [
        "C-Suite Executives",
        "Department Heads",
        "Board Members",
        "Regional Directors",
        "Senior Managers",
        "Technical Leadership"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirement Analysis",
      description: "We work closely with you to understand your hiring needs, company culture, and specific role requirements."
    },
    {
      number: "02",
      title: "Candidate Sourcing",
      description: "Our specialized recruiters leverage various channels to identify suitable candidates from our extensive network."
    },
    {
      number: "03",
      title: "Screening & Assessment",
      description: "Rigorous evaluation including technical assessments, behavioral interviews, and reference checks."
    },
    {
      number: "04",
      title: "Presentation & Selection",
      description: "We present you with a shortlist of qualified candidates, along with detailed assessment reports."
    },
    {
      number: "05",
      title: "Offer & Onboarding",
      description: "Support throughout the offer negotiation process and initial onboarding phase."
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
              Our Recruitment Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8"
            >
              Comprehensive HR solutions designed to transform your recruitment process and drive organizational success
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
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#3e546e] rounded-full font-semibold text-sm sm:text-base inline-flex items-center"
                >
                  Discuss Your Requirements
                  <ArrowRight size={18} className="ml-2" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
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
              Specialized Recruitment Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Tailored services to meet diverse hiring needs across industries and organizational levels
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f7f8fa] p-6 sm:p-8 rounded-2xl border border-gray-200 group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#3e546e] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#3e546e] mb-3 group-hover:text-[#293748] transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  {category.description}
                </p>
                
                <ul className="space-y-2 sm:space-y-3 mb-8">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={16} className="text-[#3e546e] mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm sm:text-base">{service}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <button className="flex items-center text-[#3e546e] text-sm sm:text-base font-medium group-hover:text-[#293748] group-hover:underline transition-all">
                    Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
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
              Our Recruitment Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            >
              A streamlined, transparent approach designed to identify the perfect match for your needs
            </motion.p>
          </div>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 relative group hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#3e546e] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-[#3e546e] mb-3 mt-2 group-hover:text-[#293748] transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional HR Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Beyond recruitment, we offer comprehensive HR services to support your organization
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "HR Consulting",
                description: "Strategic guidance on workforce planning, compensation structures, and HR policies.",
                features: [
                  "Organizational assessment",
                  "HR strategy development",
                  "Policy formulation"
                ]
              },
              {
                title: "Skills Assessment",
                description: "Comprehensive evaluation of technical and soft skills through proven assessment methods.",
                features: [
                  "Technical skill testing",
                  "Behavioral assessments",
                  "Competency mapping"
                ]
              },
              {
                title: "Outplacement Services",
                description: "Support for organizations and employees during workforce transitions.",
                features: [
                  "Career counseling",
                  "Resume preparation",
                  "Interview coaching"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f7f8fa] p-6 sm:p-8 rounded-xl border border-gray-200 group hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#3e546e] mb-3 group-hover:text-[#293748] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={16} className="text-[#3e546e] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <button className="flex items-center text-[#3e546e] text-sm sm:text-base font-medium group-hover:text-[#293748] group-hover:underline transition-all">
                    Enquire now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
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
              Industries We Serve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Specialized recruitment solutions across diverse sectors
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          >
            {[
              "Information Technology",
              "Healthcare",
              "Financial Services",
              "Manufacturing",
              "E-commerce",
              "Education",
              "Retail",
              "Telecommunications",
              "Construction",
              "Hospitality",
              "Logistics",
              "Energy"
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 sm:p-5 rounded-lg border border-gray-200 text-center hover:shadow-md transition-all duration-300"
              >
                <p className="text-[#3e546e] text-sm sm:text-base font-medium">{industry}</p>
              </motion.div>
            ))}
          </motion.div>
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
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                  Ready to Transform Your Hiring Process?
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-10">
                  Get in touch with our recruitment experts to discuss how we can help you find the perfect talent for your organization.
                </p>
                
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 md:px-10 py-3 md:py-4 bg-white text-[#3e546e] rounded-full font-semibold text-base md:text-lg flex items-center justify-center mx-auto"
                  >
                    Contact Us Today
                    <ArrowRight size={20} className="ml-2" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;