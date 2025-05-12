import { hero, heroM } from "../assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='relative'>
      <div
        className='bg-cover bg-center bg-no-repeat min-h-[800px] w-full flex justify-center px-4 sm:px-6 lg:px-8 overflow-visible'
        style={{ backgroundImage: `url(${hero})` }}
      >
        <motion.div
          className='flex flex-col gap-6 sm:gap-8 mt-[80px] sm:mt-[100px] max-w-6xl w-full'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className='border mx-auto flex items-center justify-center border-white w-[280px] sm:w-[300px] h-[45px] rounded-2xl backdrop-blur-sm bg-white/10'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className='text-white font-medium text-sm sm:text-base'>
              Trusted by 200+ businesses
            </p>
          </motion.div>
          
          <motion.div
            className='text-white w-full text-center sm:text-left'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
              Empowering{" "}
              <span className='text-primary-yellow'>African</span>{" "}
              Businesses with Smart, Scalable{" "}
              <br className='hidden md:block' />
              Solutions. The Future of ERM starts with{" "}
              <span className='text-primary-yellow'>B360</span>
            </h1>
          </motion.div>
          
          <motion.div
            className='text-white text-base sm:text-lg text-center sm:text-left'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <p className='max-w-3xl mx-auto sm:mx-0'>
              Customizable ERM solutions designed to simplify operations,
              drive growth, and <br className='hidden md:block' />
              support the unique needs of African businesses
            </p>
          </motion.div>
          
          <motion.div
            className='flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center sm:justify-start mt-2 sm:mt-4'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.button
              className='text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-white hover:bg-white/10 transition-colors font-medium text-sm sm:text-base'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
            
            <motion.button
              className='bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-gray-800 hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Responsive image container with square shape on mobile */}
      <motion.div
        className='w-full flex justify-center px-4 sm:px-6'
        style={{ marginTop: "-200px" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <motion.div
          className="relative w-[280px] h-[280px] sm:w-auto sm:h-auto md:w-[980px] md:h-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            className='object-cover w-full h-full rounded-xl shadow-2xl z-10 aspect-square sm:aspect-auto'
            src={heroM}
            alt='B360 Dashboard'
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
