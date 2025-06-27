import { red } from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className='mt-6 relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bold-blue via-blue-900 to-blue-900 text-white overflow-hidden'>
      {/* Background Image */}
      <div 
        className='absolute top-0 right-0 h-full w-1/2 bg-cover bg-center bg-no-repeat opacity-80'
        style={{ backgroundImage: `url(${red})` }}
      />
      
      {/* Content Container */}
      <motion.div
        ref={ref}
        className='container mx-auto relative z-10 max-w-4xl'
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <div className='text-center'>
          <motion.h2 
            className='text-2xl sm:text-2xl md:text-3xl font-bold mb-6 leading-tight'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to take your business to the next level?
          </motion.h2>
          
          <motion.p 
            className='text-lg sm:text-xl md:text-xl mb-10 text-gray-200'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join over 20+ businesses using Tech360 today
          </motion.p>
          
        <Link to={'/contact'}>
            <motion.button
              className='bg-white text-bold-blue px-8 py-4 rounded-xl font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg'
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Book A Session
            </motion.button>
        </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStarted;
