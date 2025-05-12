import { vision } from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Vision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className='bg-gray-50'>
      <div ref={ref} className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image Section */}
          <motion.div
            className='w-full md:w-1/2 flex justify-center'
            initial={{ opacity: 0, x: -50 }}
            animate={
              inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={vision}
              alt='B360 Vision Illustration'
              className='max-w-full h-auto object-cover'
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className='w-full md:w-1/2 flex flex-col space-y-4'
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-bold-blue mb-2'>
                Our Vision is{" "}
                <span className='text-primary-yellow'>Clear</span>
              </h2>
              <div className='w-20 h-1 bg-primary-yellow mb-6'></div>
            </motion.div>

            <motion.p
              className='text-base md:text-lg text-gray-700 leading-relaxed'
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              To empower African businesses with smart, scalable digital
              solutions that drive growth, efficiency, and global impact.
              We envision a future where technology removes barriers and
              unlocks potential across the continent.
            </motion.p>

            <motion.p
              className='text-base md:text-lg text-gray-700 leading-relaxed'
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Through innovation and collaboration, we aim to shape a
              digitally inclusive and prosperous Africa where businesses of
              all sizes can thrive in the global marketplace.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
