import { ene } from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bold-blue via-blue-900 to-blue-900 text-white overflow-hidden'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
          {/* Left Column */}
          <motion.div
            className='flex flex-col lg:w-1/2'
            initial={{ opacity: 0, x: -30 }}
            animate={
              inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
            }
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className='text-lg sm:text-xl font-semibold tracking-wider mb-4'
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              WHY B360
            </motion.span>

            <motion.h2
              className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Smart, Adaptable, and Built for your business,{" "}
              <br className='hidden md:block' />
              We deliver real{" "}
              <span className='text-primary-yellow'>Value </span>
              where it matters most
            </motion.h2>

            <motion.div
              className='flex flex-col space-y-6'
              initial={{ opacity: 0, y: 30 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div>
                <h3 className='text-xl sm:text-2xl font-semibold mb-3'>
                  Scalability That Matches Your Ambition
                </h3>
                <p className='text-gray-200 leading-relaxed max-w-xl'>
                  Whether you're a small startup or a growing enterprise,
                  We provide scalable and seamlessly strategy to support
                  your growth.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className='lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0'
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={ene}
              alt='B360 Business Solutions'
              className='max-w-full h-auto'
              initial={{ scale: 0.9 }}
              animate={inView ? { scale: 1 } : { scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
