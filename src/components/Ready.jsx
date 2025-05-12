import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Ready = () => {
  const componentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.2 1"],
  });

  // Transform values based on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  // State for hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='relative py-20 overflow-hidden' ref={componentRef}>
      <motion.div
        className='relative bg-bold-blue flex flex-col gap-4 text-white text-center py-10 w-[90%] max-w-[600px] h-auto mx-auto p-8 rounded-xl mb-10 z-10'
        style={{
          scale,
          opacity,
          y,
          boxShadow: isHovered
            ? "0 0 40px 5px rgba(218, 238, 254, 0.5)"
            : "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
        }}
        initial={{ scale: 0.8, opacity: 0, y: 100 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.2,
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background elements */}
        <motion.div
          className='absolute -top-10 -left-10 w-20 h-20 rounded-full bg-light-blue opacity-30 z-0'
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className='absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-blue-400 opacity-20 z-0'
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        {/* Text elements with staggered animations */}
        <motion.span
          className='text-2xl font-bold'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.6 },
          }}
        >
          Ready to take your business to the next level?
        </motion.span>

        <motion.small
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.6 },
          }}
        >
          Join over 200+ businesses using B360 today
        </motion.small>

        {/* Animated button */}
        <motion.button
          className='bg-white px-3 py-3 w-[200px] mx-auto text-bold-blue rounded-2xl relative overflow-hidden group'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.7, duration: 0.6 },
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.2 },
          }}
        >
          <motion.span
            className='absolute inset-0 bg-light-blue'
            initial={{ x: "-100%" }}
            whileHover={{
              x: "0%",
              transition: { duration: 0.3 },
            }}
            exit={{ x: "100%" }}
          />
          <span className='relative z-10 group-hover:text-bold-blue transition-colors'>
            Book A Session
          </span>
        </motion.button>
      </motion.div>

      {/* Radial gradient background effect */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-r from-transparent via-light-blue/10 to-transparent'
        style={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};

export default Ready;
