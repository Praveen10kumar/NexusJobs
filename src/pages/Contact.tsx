import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Send,
  CheckCircle,
  Clock,
  MessageCircle
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '8384935940',
      href: 'tel:8384935940',
      description: 'Monday to Friday, 9AM to 6PM'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@nexusjobs.in',
      href: 'mailto:info@nexusjobs.in',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      value: '1A Prem Nagar Thana, Sanganer, Jaipur 302029',
      href: 'https://maps.google.com',
      description: 'Visit us during business hours'
    }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      name: 'Facebook', 
      href: '#',
      color: 'hover:text-blue-600'
    },
    { 
      icon: Twitter, 
      name: 'Twitter', 
      href: '#',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Linkedin, 
      name: 'LinkedIn', 
      href: '#',
      color: 'hover:text-blue-700'
    },
    { 
      icon: Instagram, 
      name: 'Instagram', 
      href: '#',
      color: 'hover:text-pink-600'
    },
  ];

  const faqs = [
    {
      question: 'How quickly can you fill a position?',
      answer: 'Our average time-to-fill is 2-3 weeks for standard positions and 4-6 weeks for senior/specialized roles.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work across IT, non-IT, healthcare, finance, manufacturing, and various other sectors with specialized expertise.'
    },
    {
      question: 'Do you provide replacement guarantees?',
      answer: 'Yes, we offer replacement guarantees ranging from 30-90 days depending on the position level and agreement terms.'
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-[#3e546e] via-[#293748] to-[#1e2a38] overflow-hidden">
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
            className="absolute top-10 md:top-20 right-2 md:right-10 w-24 md:w-40 h-24 md:h-40 bg-white/8 rounded-full blur-2xl"
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
            className="absolute bottom-10 md:bottom-20 left-2 md:left-10 w-20 md:w-32 h-20 md:h-32 bg-white/5 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-3xl md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6"
            >
              Contact Us
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-2xl md:max-w-4xl mx-auto leading-relaxed"
            >
              Ready to transform your hiring process? Get in touch with our experts today
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group text-center p-6 md:p-8 bg-[#f7f8fa] rounded-2xl md:rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 md:w-16 h-12 md:h-16 bg-[#3e546e] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                
                <h3 className="text-lg md:text-xl font-semibold text-[#3e546e] mb-2 md:mb-4 group-hover:text-[#293748] transition-colors">
                  {info.title}
                </h3>
                
                <a
                  href={info.href}
                  className="block text-gray-600 hover:text-[#3e546e] transition-colors duration-300 mb-1 md:mb-2 font-medium break-all"
                >
                  {info.value}
                </a>
                
                <p className="text-gray-500 text-xs md:text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-20 bg-[#f7f8fa]">
        <div className="max-w-3xl md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-[#3e546e] mb-4 md:mb-6">
                  Send us a Message
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-[#3e546e] font-medium mb-1 md:mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:border-[#3e546e] focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-[#3e546e] font-medium mb-1 md:mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:border-[#3e546e] focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[#3e546e] font-medium mb-1 md:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:border-[#3e546e] focus:outline-none transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-[#3e546e] font-medium mb-1 md:mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:border-[#3e546e] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your requirements or questions..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                  className="group w-full px-6 md:px-8 py-3 md:py-4 bg-[#3e546e] text-white rounded-full font-semibold text-base md:text-lg hover:bg-[#293748] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Business Hours */}
              <div className="p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
                  <Clock className="w-6 md:w-8 h-6 md:h-8 text-[#3e546e]" />
                  <h3 className="text-xl md:text-2xl font-bold text-[#3e546e]">Business Hours</h3>
                </div>
                
                <div className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-[#3e546e] font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-[#3e546e] font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold text-[#3e546e] mb-4 md:mb-6">Follow Us</h3>
                
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {socialLinks.map(({ icon: Icon, name, href, color }) => (
                    <motion.a
                      key={name}
                      href={href}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`flex items-center space-x-2 md:space-x-3 p-3 md:p-4 bg-[#f7f8fa] rounded-xl border border-gray-200 text-gray-600 ${color} hover:shadow-md transition-all duration-300`}
                    >
                      <Icon size={16} />
                      <span className="font-medium text-sm md:text-base">{name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 md:space-x-3 mb-4 md:mb-6">
                  <MessageCircle className="w-6 md:w-8 h-6 md:h-8 text-[#3e546e]" />
                  <h3 className="text-xl md:text-2xl font-bold text-[#3e546e]">Quick Questions</h3>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-1 md:space-y-2"
                    >
                      <h4 className="font-semibold text-[#3e546e] text-xs md:text-sm">{faq.question}</h4>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-10 md:py-16 bg-[#3e546e]">
        <div className="max-w-xl md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-xl md:text-3xl font-bold text-white">
              Feel free to Contact on WhatsApp!
            </h2>
            
            <p className="text-base md:text-xl text-gray-200 max-w-lg md:max-w-2xl mx-auto">
              For instant queries and quick responses, reach out to us on WhatsApp. 
              We're here to help you 24/7.
            </p>

            <motion.a
              href="https://wa.me/918384935940"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 md:space-x-3 px-6 md:px-8 py-3 md:py-4 bg-green-600 hover:bg-green-500 text-white rounded-full font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={24} />
              <span>Contact us on WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;