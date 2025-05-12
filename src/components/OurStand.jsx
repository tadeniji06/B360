import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurStand = () => {
  // Values data array for easier management
  const values = [
    {
      number: "01",
      title: "Innovation",
      description: "We embrace creativity and always strive for continuous improvement."
    },
    {
      number: "02",
      title: "Integrity",
      description: "We operate transparently, ethically, and with respect for every client."
    },
    {
      number: "03",
      title: "Empowerment",
      description: "We are committed to empowering African businesses to thrive and succeed."
    },
    {
      number: "04",
      title: "Collaboration",
      description: "We believe in the power of teamwork and working together for success."
    }
  ];

  // Create ref for section animation
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-200 to-blue-900/20 overflow-hidden'
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header Section with Animation */}
        <motion.div 
          className='mb-10 text-center md:text-left'
          initial={{ y: 50, opacity: 0 }}
          animate={sectionInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 flex flex-col md:flex-row md:items-center gap-2'>
            <motion.h2 
              className='text-bold-blue'
              initial={{ x: -20, opacity: 0 }}
              animate={sectionInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              What we
            </motion.h2>
            <motion.h2 
              className='text-gray-500'
              initial={{ x: 20, opacity: 0 }}
              animate={sectionInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              stand for
            </motion.h2>
          </div>
          <motion.p 
            className='text-gray-600 text-base sm:text-lg max-w-2xl'
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Our values shape every solution we build and every partnership we grow
          </motion.p>
        </motion.div>
        
        {/* Values Grid with Staggered Animation */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full relative overflow-hidden group'
              initial={{ opacity: 0, y: 50 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + (index * 0.2),
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Animated background element */}
              <motion.div 
                className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-light-blue opacity-0 group-hover:opacity-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1, transition: { duration: 0.3 } }}
              />
              
              <motion.h3 
                className='text-2xl font-bold text-primary-yellow mb-3 relative z-10'
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
              >
                {value.number}
              </motion.h3>
              
              <motion.h4 
                className='text-xl font-semibold text-bold-blue mb-3 relative z-10'
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
              >
                {value.title}
              </motion.h4>
              
              <motion.p 
                className='text-gray-600 flex-grow relative z-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OurStand;
