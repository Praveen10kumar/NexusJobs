import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp, Heart, Star, CheckCircle, Briefcase } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Ruchika Gupta',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Ruchika is a visionary leader with over 15 years of experience in human resources and talent acquisition. She founded Nexus Jobs with the mission to revolutionize recruitment processes and create meaningful connections between employers and job seekers.',
      specialties: ['Strategic HR Planning', 'Talent Acquisition', 'Leadership Development']
    },
    {
      name: 'Naresh Gupta',
      position: 'Co-Founder & COO',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Amit brings extensive operational expertise and business development experience. His innovative approach to HR technology and process optimization has been instrumental in Nexus Jobs\' growth and success.',
      specialties: ['Operations Management', 'Business Development', 'HR Technology']
    },  
  ];

  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices at every level.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from candidate screening to client service delivery.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build long-term partnerships with our clients and candidates, focusing on mutual growth and success.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace innovative technologies and methodologies to stay ahead in the evolving HR landscape.'
    }
  ];

  const achievements = [
    { number: '2018', label: 'Company Founded' },
    { number: '500+', label: 'Successful Placements' },
    { number: '50+', label: 'Partner Companies' },
    { number: '98%', label: 'Client Retention Rate' }
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
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-10 w-32 h-32 bg-[#dbdce9]/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-10 w-24 h-24 bg-[#dbdce9]/5 rounded-full blur-xl"
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
              About Nexus Jobs
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Transforming careers and businesses through innovative HR solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#d7e3f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#545670]">
                Our Story
              </h2>
              
              <div className="space-y-6 text-gray-500 leading-relaxed">
                <p className="text-lg">
                  NEXUS Jobs is an employment agency in India that specializes in providing businesses 
                  and corporations with the best recruitment services in IT technical and non-IT fields. 
                  Founded in 2023, we've grown from a small startup to a leading HR consultancy firm 
                  in Jaipur.
                </p>
                
                <p className="text-lg">
                  Our journey began with a simple vision: to bridge the gap between talented 
                  professionals and organizations seeking exceptional talent. We recognized the 
                  challenges both job seekers and employers face in finding the perfect match, 
                  and we set out to solve this problem through innovative solutions and 
                  personalized service.
                </p>
                
                <p className="text-lg">
                  Today, we're proud to have facilitated over 500 successful placements and 
                  built lasting partnerships with more than 50 companies across various 
                  industries. The team has received high praise from satisfied customers 
                  and top-rated Google reviews, making us a cost-effective solution for 
                  all employment needs throughout India.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-4 bg-[#3e546e] rounded-lg border border-[#dbdce9]/10"
                  >
                    <div className="text-2xl font-bold text-[#dbdce9]">{achievement.number}</div>
                    <div className="text-sm text-gray-300">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#3e546e]/40 to-[#3e546e]/20 backdrop-blur-sm rounded-3xl p-8 border border-[#dbdce9]/10">
                <div className="absolute inset-0 bg-[#3e546e] to-transparent rounded-3xl" />
                
                <div className="relative z-10 space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#dbdce9] to-[#dbdce9]/80 rounded-2xl flex items-center justify-center mx-auto">
                    <Briefcase className="w-10 h-10 text-[#3e546e]" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#dbdce9] mb-4">Our Mission</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To be the leading HR consultancy that creates meaningful connections between 
                      exceptional talent and forward-thinking organizations, fostering growth and 
                      success for both parties through innovative recruitment solutions.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#dbdce9]/20 rounded-full blur-sm"
              />
              
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#dbdce9]/15 rounded-full blur-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#3e546e]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#dbdce9] mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and define our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="group text-center p-8 bg-gradient-to-br from-[#3e546e]/40 to-[#3e546e]/20 backdrop-blur-sm rounded-2xl border border-[#dbdce9]/10 hover:border-[#dbdce9]/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#dbdce9] to-[#dbdce9]/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-[#3e546e]" />
                </div>
                
                <h3 className="text-xl font-semibold text-[#dbdce9] mb-4 group-hover:text-white transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-[#d7e3f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#545670] mb-6">
              Our Team
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Meet the passionate professionals who make Nexus Jobs a success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-[#3e546e] backdrop-blur-sm rounded-3xl p-8 border border-[#dbdce9]/10 hover:border-[#dbdce9]/30 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-2xl object-cover border-4 border-[#dbdce9]/20 group-hover:border-[#dbdce9]/50 transition-all duration-300"
                    />
                  </motion.div>
                  
                  <div className="flex-1 text-center sm:text-left space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#dbdce9] group-hover:text-white transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-[#dbdce9]/80 font-medium">
                        {member.position}
                      </p>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 bg-[#dbdce9]/10 border border-[#dbdce9]/20 rounded-full text-sm text-[#dbdce9]"
                        >
                          {specialty}
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

      {/* Company Culture */}
      <section className="py-20 bg-[#d7e3f1] relative overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#545670] mb-6">
              Why Choose Nexus Jobs?
            </h2>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At NEXUS JOBS, our expertise spans the full spectrum of today's technology landscape, 
              with a platform-agnostic approach that ensures we find the perfect fit for your unique 
              business needs. We are committed to delivering exceptional results while maintaining the 
              highest standards of professionalism and integrity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 bg-[#3e546e] backdrop-blur-sm rounded-xl border border-[#dbdce9]/20"
              >
                <CheckCircle className="w-12 h-12 text-[#dbdce9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#dbdce9] mb-2">Proven Track Record</h3>
                <p className="text-gray-300">500+ successful placements with 98% client satisfaction rate</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 bg-[#3e546e] backdrop-blur-sm rounded-xl border border-[#dbdce9]/20"
              >
                <Award className="w-12 h-12 text-[#dbdce9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#dbdce9] mb-2">Industry Recognition</h3>
                <p className="text-gray-300">Top-rated Google reviews and industry awards</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 bg-[#3e546e] backdrop-blur-sm rounded-xl border border-[#dbdce9]/20"
              >
                <TrendingUp className="w-12 h-12 text-[#dbdce9] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#dbdce9] mb-2">Continuous Growth</h3>
                <p className="text-gray-300">Expanding network of 50+ partner companies across India</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;