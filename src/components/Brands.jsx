import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Brands = () => {
  const industries = [
    "Retail & E-commerce",
    "Manufacturing & Production",
    "Hospitality & Tourism",
    "Logistics & Transportation",
    "Education & Training",
    "Financial Services",
    "Agriculture & Agribusiness",
    "Construction & Real Estate",
    "Professional Services",
    "Healthcare & Life Sciences"
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // Calculate the width of the carousel content minus the visible width
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tailored solutions for every sector
          </p>
        </div>

        {/* Animated Carousel - SLOWED DOWN */}
        <motion.div 
          className="overflow-hidden cursor-grab"
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 0 }}
            animate={{ 
              x: [-width, 0, -width],
            }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 200, 
                ease: "linear"
              }
            }}
            whileDrag={{ scale: 0.98 }}
          >
            {/* First set of industries */}
            {industries.map((industry, index) => (
              <motion.div
                key={`first-${index}`}
                className="min-w-max px-4"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="border border-gray-200 rounded-lg py-3 px-6 hover:border-primary-yellow hover:shadow-md transition-all duration-300 bg-white">
                  <span className="whitespace-nowrap font-medium text-gray-800">
                    {industry}
                  </span>
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {industries.map((industry, index) => (
              <motion.div
                key={`second-${index}`}
                className="min-w-max px-4"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="border border-gray-200 rounded-lg py-3 px-6 hover:border-primary-yellow hover:shadow-md transition-all duration-300 bg-white">
                  <span className="whitespace-nowrap font-medium text-gray-800">
                    {industry}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Second row moving in opposite direction - SLOWED DOWN */}
        <motion.div 
          className="overflow-hidden cursor-grab mt-6"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: -width }}
            animate={{ 
              x: [0, -width, 0],
            }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 200, 
                ease: "linear"
              }
            }}
            whileDrag={{ scale: 0.98 }}
          >
            {/* First set of industries (reversed) */}
            {[...industries].reverse().map((industry, index) => (
              <motion.div
                key={`third-${index}`}
                className="min-w-max px-4"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="border border-gray-200 rounded-lg py-3 px-6 hover:border-primary-yellow hover:shadow-md transition-all duration-300 bg-white">
                  <span className="whitespace-nowrap font-medium text-gray-800">
                    {industry}
                  </span>
                </div>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless looping (reversed) */}
            {[...industries].reverse().map((industry, index) => (
              <motion.div
                key={`fourth-${index}`}
                className="min-w-max px-4"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="border border-gray-200 rounded-lg py-3 px-6 hover:border-primary-yellow hover:shadow-md transition-all duration-300 bg-white">
                  <span className="whitespace-nowrap font-medium text-gray-800">
                    {industry}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
