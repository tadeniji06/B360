import { facebook, mac, slack } from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

const Building = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // More diverse set of logos using Iconify for additional brands
  const logos = [
    {
      src: slack,
      alt: "Slack Logo",
      description: "Collaboration Platform",
    },
    {
      icon: "simple-icons:binance",
      alt: "Binance Logo",
      color: "#F0B90B",
      description: "Cryptocurrency Exchange",
    },
    {
      src: facebook,
      alt: "Facebook Logo",
      description: "Social Media Giant",
    },
    {
      icon: "mdi:wind-energy",
      alt: "ExxonMobil Logo",
      color: "#FF0000",
      description: "Energy Corporation",
    },
    {
      src: mac,
      alt: "Apple Logo",
      description: "Technology Innovator",
    },
    {
      icon: "simple-icons:samsung",
      alt: "Samsung Logo",
      color: "#1428A0",
      description: "Global Electronics",
    },
  ];

  return (
    <motion.div
      ref={ref}
      className='p-4 sm:p-8 bg-gray-50 mt-4'
      initial='hidden'
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Top */}
      <motion.div
        className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-8'
        variants={itemVariants}
      >
        <motion.div
          className='hidden md:block'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon
            icon='simple-icons:binance'
            className='text-[#F0B90B] text-5xl'
          />
        </motion.div>
        <motion.div className='text-center' variants={itemVariants}>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-bold-blue'>
            Building Trust With Brands
          </h2>
          <p className='text-gray-600 text-sm sm:text-base mt-2 max-w-md mx-auto'>
            Trusted by industry leaders across Africa and beyond
          </p>
        </motion.div>
        <motion.img
          src={mac}
          alt='Apple Logo'
          className='hidden md:block'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </motion.div>

      {/* Grid */}
      <motion.div
        className='grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 mx-auto max-w-3xl'
        variants={containerVariants}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className='flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-sm'
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className='h-16 flex items-center justify-center mb-3'>
              {logo.src ? (
                <motion.img
                  src={logo.src}
                  alt={logo.alt}
                  className='w-auto h-12 max-w-full'
                />
              ) : (
                <Icon
                  icon={logo.icon}
                  style={{ color: logo.color }}
                  className='text-4xl'
                />
              )}
            </div>
            <p className='text-xs sm:text-sm text-gray-600 text-center'>
              {logo.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className='flex flex-wrap justify-center gap-8 mt-12'
        variants={containerVariants}
      >
        {[
          { number: "20+", label: "Business Partners" },
          { number: "10+", label: "Countries Served" },
          { number: "98%", label: "Client Satisfaction" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className='text-center'
            variants={itemVariants}
          >
            <h3 className='text-2xl sm:text-3xl font-bold text-bold-blue'>
              {stat.number}
            </h3>
            <p className='text-sm text-gray-600'>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Building;
