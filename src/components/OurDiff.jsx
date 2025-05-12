import { apart, tailor, scale, rewards, speed } from "../assets";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OurDiff = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + (i * 0.2),
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: scale,
      title: "Scalability That Matches Your Ambition",
      description: "Whether you're a small startup or a growing enterprise, our platform scales seamlessly to support your growth."
    },
    {
      icon: tailor,
      title: "Tailored to Your Region",
      description: "Enjoy tools that work with your local currency, compliance rules, and business workflows for a perfect regional fit."
    },
    {
      icon: rewards,
      title: "Make Work More Rewarding",
      description: "Increase productivity with game-like features that motivate users and keeps teams engaged."
    },
    {
      icon: speed,
      title: "Work Faster and Smarter",
      description: "Our AI-powered features help automate tasks, improve decisions, and drive efficiency in your daily operations."
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-1/2 max-w-[500px]"
            variants={imageVariants}
          >
            <motion.img 
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
              src={apart}
              alt="What sets B360 apart"
              whileHover={{ 
                scale: 1.03, 
                rotate: 1,
                transition: { duration: 0.3 } 
              }}
            />
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <motion.div className="mb-10" variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                What Sets Us Apart: The B360 Difference
              </h2>
              <p className="text-lg text-gray-600">
                Smart, adaptable, and built for your business, here's how B360 delivers 
                real value where it matters most.
              </p>
            </motion.div>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-card p-5 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  variants={featureVariants}
                  custom={index}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <img src={feature.icon} alt="" className="w-[70px] md:w-[60px]" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurDiff;
