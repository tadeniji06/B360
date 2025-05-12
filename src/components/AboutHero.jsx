import { hero, about, abH } from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutHero = () => {
  // Create refs for animation triggers
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className='relative'>
      {/* Hero Section with Background and Animations */}
      <motion.div
        ref={heroRef}
        className='bg-cover bg-center bg-no-repeat min-h-[200px] sm:min-h-[250px] md:min-h-[300px] w-full flex justify-center px-4 sm:px-6 lg:px-8 overflow-visible'
        style={{ backgroundImage: `url(${hero})` }}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className='text-white flex flex-start items-center gap-2 max-w-6xl w-full py-8 md:py-12'>
          <div>
            <motion.h1 
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Driven by Innovation.{" "}
              </motion.span>
              <motion.span 
                className='text-primary-yellow whitespace-nowrap'
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Designed for Growth.
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                Built for Africa.
              </motion.span>
            </motion.h1>
          </div>
        </div>
      </motion.div>

      {/* About Section with Image and Right-Aligned Glassy Text Overlay */}
      <div className='relative' ref={imageRef}>
        <motion.img
          className='w-full object-cover h-[300px] sm:h-[400px] md:h-[500px]'
          src={about}
          alt='About B360'
          initial={{ opacity: 0, scale: 1.05 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Glassy Text Overlay - Right Aligned with Animation */}
        <motion.div 
          className='absolute top-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10 max-w-full sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] h-full flex items-center'
          initial={{ opacity: 0, x: 50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.div 
            className='bg-bold-blue/70 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg text-white'
            whileHover={{ 
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h2 
              className='text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4'
              initial={{ opacity: 0, y: 10 }}
              animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              About Business360
            </motion.h2>
            <motion.p 
              className='text-sm sm:text-base leading-relaxed'
              initial={{ opacity: 0 }}
              animate={imageInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Business360 (B360) is a leading provider of innovative, scalable,
              and localized enterprise solutions designed to empower African
              SMEs. We deliver intelligent software that simplifies operations,
              boosts productivity, and supports businesses at every stage of
              their growth.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
