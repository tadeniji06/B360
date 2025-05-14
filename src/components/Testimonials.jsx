import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react/dist/iconify.js";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Adebola M",
      company: "Founder of NovaTech Supplies",
      testimonial: `"Before B360, we juggled multiple tools just to stay on top of our operations. Now, everything from inventory tracking to sales analytics is centralized and automated. It feels like we gained a full operations team overnight. B360 has truly transformed how we run our business."`,
    },
    {
      id: 2,
      name: "Ifeanyi O.",
      position: "COO",
      company: "BrightPath Innovations",
      testimonial:
        "B360 gave us the structure and clarity we were missing. As a fast-growing startup, we needed more than just spreadsheets—we needed smart automation. From task management to CRM, B360 scaled with us every step of the way.",
    },
    {
      id: 3,
      name: "John E.A",
      position: "CTO",
      company: "HexaTech Systems",
      testimonial:
        "The level of customer support from B360 is exceptional. Their team doesn't just provide a product—they partner with you to ensure your success. The platform's flexibility allowed us to customize workflows that perfectly match our unique business processes.",
    },
    {
      id: 4,
      name: "Dave M.F",
      position: "CEO",
      company: "Kira Logistics",
      testimonial:
        "The level of customer support from B360 is exceptional. Their team doesn't just provide a product—they partner with you to ensure your success. The platform's flexibility allowed us to customize workflows that perfectly match our unique business processes.",
    },
    {
      id: 5,
      name: "Tobi F.E",
      position: "CTO",
      company: "DDA Corp",
      testimonial: `B360 helped us break down silos across departments. Before, our teams worked in isolated systems, and it slowed everything down—from project execution to reporting. Now, marketing, sales, and operations are fully connected on one intuitive platform. Communication has improved, tasks are clearly tracked, and decision-making is faster. It's been a total game changer for team collaboration and productivity`,
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className='py-16 bg-gray-50' ref={ref}>
      <motion.div
        className='container mx-auto px-4 sm:px-6 lg:px-8'
        variants={containerVariants}
        initial='hidden'
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className='text-center mb-12' variants={itemVariants}>
          <motion.h2
            className='text-3xl font-bold text-gray-900 mb-4'
            variants={itemVariants}
          >
            Join Other Companies who trust in B360
          </motion.h2>
          <motion.p
            className='text-lg text-gray-600 max-w-3xl mx-auto'
            variants={itemVariants}
          >
            See what our clients have to say about their experience with
            our solutions
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {/* Quote Icon */}
              <div className='mb-4 text-primary-yellow'>
                <Icon icon='fa6-solid:quote-left' className='text-3xl' />
              </div>

              {/* Testimonial Text */}
              <p className='text-gray-700 italic leading-relaxed mb-6 text-sm'>
                {testimonial.testimonial}
              </p>

              {/* Divider */}
              <div className='w-16 h-1 bg-gray-200 mb-4'></div>

              {/* Person Info */}
              <div className='flex items-center'>
                <div className='h-10 w-10 rounded-full bg-bold-blue text-white flex items-center justify-center text-lg font-bold'>
                  {testimonial.name.charAt(0)}
                </div>
                <div className='ml-3'>
                  <h3 className='font-semibold text-gray-900'>
                    {testimonial.name}
                    {testimonial.position && (
                      <span className='text-primary-yellow'>
                        {" "}
                        • {testimonial.position}
                      </span>
                    )}
                  </h3>
                  <p className='text-gray-600 text-sm'>
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className='mt-4 flex'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className='h-4 w-4 text-yellow-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
