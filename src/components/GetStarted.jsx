import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const GetStarted = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + (i * 0.2),
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  return (
    <div 
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bold-blue via-blue-900 to-blue-900 text-white overflow-hidden"
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Shape the future of your business <br className="hidden md:block" /> with B360
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              From startup to scale-up, B360 gives you the flexibility and insight <br className="hidden md:block" />
              to lead in your industry
            </p>
            
            <motion.button 
              className="bg-white text-bold-blue px-8 py-2 shadow-lg rounded-xl font-medium hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
          
          {/* Right Content - Staggered Metrics (hidden on mobile) */}
          <div className="hidden md:block w-full lg:w-1/2 relative h-[350px]">
            {/* First card (positioned to the right) */}
            <motion.div 
              className="absolute top-20 right-0 bg-white/10 backdrop-blur-sm rounded-xl p-6 w-[320px]"
              variants={cardVariants}
              custom={0}
              whileHover={{ 
                scale: 1.05,
                zIndex: 20,
                backgroundColor: "rgba(255, 255, 255, 0.15)"
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-blue-100">
                Our AI-powered platform continuously evolves to meet the changing needs of African businesses.
              </p>
            </motion.div>
            
            {/* Second card (positioned to the left) */}
            <motion.div 
              className="absolute top-0 left-0 bg-white/10 backdrop-blur-sm rounded-xl p-6 w-[320px] z-10"
              variants={cardVariants}
              custom={1}
              whileHover={{ 
                scale: 1.05,
                zIndex: 20,
                backgroundColor: "rgba(255, 255, 255, 0.15)"
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Scalability</h3>
              <p className="text-blue-100">
                Grow your business without limits - our platform scales seamlessly with your ambitions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStarted;
