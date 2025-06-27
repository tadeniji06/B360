import { ene, work, region, smart } from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

const WhyUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Features data for the stacked sections
  const features = [
    {
      image: ene,
      title: "Scalability That Matches Your Ambition",
      description: "Whether you're a small startup or a growing enterprise, We provide scalable and seamlessly strategy to support your growth.",
      imagePosition: "right", // Image on right side
    },
    {
      image: region,
      title: "Tailored to Your Region",
      description: "Enjoy tools that work with your local currency, compliance rules, and business workflows for a perfect regional fit.",
      imagePosition: "left", // Image on left side
    },
    {
      image: work,
      title: "Make Work More Rewarding",
      description: "We provide solutions that increase productivity with game-like features that motivate users and keep your teams engaged.",
      imagePosition: "right", // Image on right side
    },
    {
      image: smart,
      title: "Work Faster and Smarter",
      description: "Our AI-powered features help automate tasks, improve decisions, and drive efficiency in your daily operations.",
      imagePosition: "left", // Image on left side
    }
  ];

  return (
    <div
      ref={ref}
      className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-bold-blue via-blue-900 to-blue-900 text-white overflow-hidden relative'
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-yellow opacity-5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
      
      <div className='container mx-auto relative z-10'>
        {/* Header Section */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className='text-lg sm:text-xl font-semibold tracking-wider mb-4 text-primary-yellow inline-block'
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            WHY Tech360
          </motion.span>
          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight max-w-3xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Smart, Adaptable, and Built for your business,{" "}
            <br className='hidden md:block' />
            We deliver real{" "}
            <span className='text-primary-yellow'>Value </span>
            where it matters most
          </motion.h2>
        </motion.div>

        {/* Stacked Features with Alternating Layout */}
        <div className="relative">
          {/* Curved connecting arrows - Changed from yellow to white */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/20 hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
          
          {features.map((feature, index) => {
            // Determine if this is the last item
            const isLast = index === features.length - 1;
            
            return (
              <div key={index} className="relative">
                {/* Curved arrow (except for the last item) - Changed from yellow to white */}
                {!isLast && (
                  <div className="hidden md:block absolute left-1/2 z-10" style={{ bottom: '-40px', transform: 'translateX(-50%)' }}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 * (index + 1) }}
                    >
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                          d={feature.imagePosition === "right"
                            ? "M40 0 C60 20, 60 40, 40 60 C20 80, 60 80, 80 60"
                            : "M40 0 C20 20, 20 40, 40 60 C60 80, 20 80, 0 60"}
                          stroke="#FFFFFF" // Changed from #FFC107 to #FFFFFF
                          strokeWidth="2"
                          strokeDasharray="4,4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={inView ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0 }}
                          transition={{ duration: 1, delay: 0.3 * (index + 1) }}
                        />
                        <motion.path
                          d={feature.imagePosition === "right"
                            ? "M75 55 L80 60 L75 65"
                            : "M5 55 L0 60 L5 65"}
                          stroke="#FFFFFF" // Changed from #FFC107 to #FFFFFF
                          strokeWidth="2"
                          fill="none"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 * (index + 1) + 1 }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                )}
                
                {/* Feature row with alternating layout */}
                <motion.div
                  className={`flex flex-col ${feature.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16 py-12 md:py-16`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                >
                  {/* Image Column */}
                  <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: feature.imagePosition === "left" ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: feature.imagePosition === "left" ? -30 : 30 }}
                    transition={{ duration: 0.8, delay: 0.2 * index + 0.3 }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute transform scale-95 -z-10"></div>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="max-w-full h-auto relative z-10"
                      />
                    </motion.div>
                  </motion.div>
                  
                  {/* Content Column */}
                  <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: feature.imagePosition === "left" ? 30 : -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: feature.imagePosition === "left" ? 30 : -30 }}
                    transition={{ duration: 0.8, delay: 0.2 * index + 0.5 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <span className="text-white font-bold">0{index + 1}</span>
                      </div>
                      <div className="h-1 flex-grow bg-white/30 rounded-full"></div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                    
                    <motion.button
                      className="mt-6 flex items-center text-white hover:text-primary-yellow group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Learn more
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <Icon icon="mdi:arrow-right" width={20} />
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
