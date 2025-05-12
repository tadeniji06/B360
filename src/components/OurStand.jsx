import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

const OurStand = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Values data array with Iconify icons
  const values = [
    {
      icon: "mdi:lightbulb",
      title: "Innovation",
      description: "We embrace creativity and always strive for continuous improvement."
    },
    {
      icon: "mdi:shield-check",
      title: "Integrity",
      description: "We operate transparently, ethically, and with respect for every client."
    },
    {
      icon: "mdi:hand-heart",
      title: "Empowerment",
      description: "We are committed to empowering African businesses to thrive and succeed."
    },
    {
      icon: "mdi:account-group",
      title: "Collaboration",
      description: "We believe in the power of teamwork and working together for success."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div 
      ref={ref}
      className='py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bold-blue relative overflow-hidden'
    >
      {/* Decorative elements for the background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-yellow opacity-10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 opacity-10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
      
      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header Section */}
        <motion.div 
          className='mb-12 md:mb-16 text-center'
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <div className='inline-block mb-2'>
            <div className='h-1 w-20 bg-primary-yellow mx-auto'></div>
          </div>
          <div className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 flex flex-col sm:flex-row justify-center items-center gap-2'>
            <h2 className='text-white'>What we</h2>
            <h2 className='text-primary-yellow'>stand for</h2>
          </div>
          <p className='text-blue-100 text-base sm:text-lg max-w-2xl mx-auto'>
            Our values shape every solution we build and every partnership we grow
          </p>
        </motion.div>
        
        {/* Values Grid */}
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className='bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 hover:bg-white/15'
              variants={itemVariants}
            >
              {/* Icon at the top - larger and more visible */}
              <div className='flex justify-center mb-6'>
                <div className='w-16 h-16 rounded-full bg-primary-yellow/20 flex items-center justify-center'>
                  <Icon 
                    icon={value.icon} 
                    className="text-primary-yellow" 
                    width={32} 
                    height={32} 
                  />
                </div>
              </div>
              
              <h4 className='text-xl font-semibold text-white mb-3 text-center'>{value.title}</h4>
              <p className='text-blue-100 flex-grow text-center'>{value.description}</p>
              
              <div className='mt-4 w-12 h-1 bg-primary-yellow/50 mx-auto'></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurStand;
