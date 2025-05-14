import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import "./Quote.css"; // We'll create this file for custom scrollbar

const Quote = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    requirements: "",
    features: [],
    otherFeatures: "",
  });

  // Reset step when modal is opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData((prev) => {
      const features = [...prev.features];
      if (features.includes(feature)) {
        return {
          ...prev,
          features: features.filter((f) => f !== feature),
        };
      } else {
        return { ...prev, features: [...features, feature] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    // Show success message
    setStep(4);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Project types with icons
  const projectTypes = [
    { id: "web", name: "Web Application", icon: "mdi:web" },
    { id: "mobile", name: "Mobile App", icon: "mdi:cellphone" },
    { id: "desktop", name: "Desktop Software", icon: "mdi:desktop-mac" },
    { id: "ecommerce", name: "E-Commerce", icon: "mdi:cart" },
    { id: "crm", name: "CRM System", icon: "mdi:account-group" },
    { id: "erp", name: "ERP Solution", icon: "mdi:office-building" },
    { id: "custom", name: "Custom Software", icon: "mdi:code-braces" },
    { id: "other", name: "Other", icon: "mdi:dots-horizontal" },
  ];

  // Feature options based on project type
  const getFeatureOptions = () => {
    switch (formData.projectType) {
      case "web":
        return [
          "User Authentication",
          "Payment Integration",
          "Admin Dashboard",
          "Content Management",
          "Analytics",
          "API Integration",
          "Responsive Design",
        ];
      case "mobile":
        return [
          "iOS App",
          "Android App",
          "Push Notifications",
          "Offline Mode",
          "Location Services",
          "Camera Integration",
          "Social Sharing",
        ];
      case "desktop":
        return [
          "Cross-platform",
          "Data Synchronization",
          "Offline Functionality",
          "Automated Updates",
          "Database Integration",
          "Custom Reporting",
        ];
      case "ecommerce":
        return [
          "Product Catalog",
          "Shopping Cart",
          "Payment Gateway",
          "Order Management",
          "Customer Accounts",
          "Inventory Management",
          "Shipping Integration",
        ];
      case "crm":
        return [
          "Contact Management",
          "Lead Tracking",
          "Email Integration",
          "Task Management",
          "Reporting & Analytics",
          "Mobile Access",
          "Third-party Integrations",
        ];
      case "erp":
        return [
          "Accounting",
          "Inventory Management",
          "HR Management",
          "Supply Chain",
          "Project Management",
          "Business Intelligence",
          "Manufacturing",
        ];
      case "custom":
      case "other":
        return [
          "User Management",
          "Data Analytics",
          "API Development",
          "Third-party Integration",
          "Automation",
          "Reporting",
          "Custom Workflows",
        ];
      default:
        return [];
    }
  };

  // Budget options
  const budgetOptions = [
    "Less than $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
  ];

  // Timeline options
  const timelineOptions = [
    "Less than 1 month",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "More than 12 months",
  ];

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
  };

  // Step content animation variants
  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  // WhatsApp message
  const whatsappMessage = encodeURIComponent(
    "Hello B360! I'm interested in discussing a custom software project that isn't covered in your quote form."
  );

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 overflow-hidden'>
      <motion.div
        className='bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto custom-scrollbar text-black'
        variants={modalVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {/* Header - Fixed at top */}
        <div className='bg-bold-blue text-white p-4 sm:p-6 rounded-t-xl flex justify-between items-center sticky top-0 z-10'>
          <h2 className='text-xl sm:text-2xl font-bold'>Request a Quote</h2>
          <button
            onClick={onClose}
            className='text-white hover:text-primary-yellow transition-colors'
            aria-label="Close modal"
          >
            <Icon icon='mdi:close' width={24} />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className='px-4 sm:px-6 pt-4 sm:pt-6 sticky top-[60px] sm:top-[76px] bg-white z-[5]'>
          <div className='w-full bg-gray-200 h-2 rounded-full mb-3 sm:mb-4'>
            <motion.div
              className='bg-primary-yellow h-2 rounded-full'
              initial={{ width: "0%" }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </div>
          <div className='flex justify-between text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6'>
            <span
              className={step >= 1 ? "text-bold-blue font-medium" : ""}
            >
              Project Type
            </span>
            <span
              className={step >= 2 ? "text-bold-blue font-medium" : ""}
            >
              Features
            </span>
            <span
              className={step >= 3 ? "text-bold-blue font-medium" : ""}
            >
              Details
            </span>
            <span
              className={step >= 4 ? "text-bold-blue font-medium" : ""}
            >
              Complete
            </span>
          </div>
        </div>
        
        {/* Form content */}
        <div className='px-4 sm:px-6 pb-6 text-black'>
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode='wait'>
              {step === 1 && (
                <motion.div
                  key='step1'
                  variants={contentVariants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  className='text-black'
                >
                  <h3 className='text-lg sm:text-xl font-semibold mb-4 text-black'>
                    What type of software do you need?
                  </h3>
                  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 mb-6'>
                    {projectTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`border rounded-lg p-3 sm:p-4 cursor-pointer transition-all text-black ${
                          formData.projectType === type.id
                            ? "border-primary-yellow bg-primary-yellow/10 shadow-md"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            projectType: type.id,
                          })
                        }
                      >
                        <div className='flex flex-col items-center text-center'>
                          <Icon
                            icon={type.icon}
                            width={30}
                            height={30}
                            className={
                              formData.projectType === type.id
                                ? "text-primary-yellow"
                                : "text-gray-500"
                            }
                          />
                          <span className='mt-2 font-medium text-black text-sm sm:text-base'>
                            {type.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='flex justify-between mt-8'>
                    <button
                      type='button'
                      onClick={onClose}
                      className='px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm sm:text-base'
                    >
                      Cancel
                    </button>
                    <button
                      type='button'
                      onClick={nextStep}
                      disabled={!formData.projectType}
                      className={`px-4 sm:px-6 py-2 bg-bold-blue text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm sm:text-base ${
                        !formData.projectType
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      Next
                      <Icon icon='mdi:arrow-right' className='ml-2' width={18} height={18} />
                    </button>
                  </div>
                </motion.div>
              )}
              
              {step === 2 && (
                <motion.div
                  key='step2'
                  variants={contentVariants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  className='text-black'
                >
                  <h3 className='text-lg sm:text-xl font-semibold mb-4 text-black'>
                    What features do you need for your{" "}
                    {
                      projectTypes.find(
                        (t) => t.id === formData.projectType
                      )?.name
                    }
                    ?
                  </h3>
                  <div className='space-y-4 mb-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3'>
                      {getFeatureOptions().map((feature) => (
                        <div
                          key={feature}
                          className={`border rounded-lg p-2 sm:p-3 cursor-pointer transition-all flex items-center text-black ${
                            formData.features.includes(feature)
                              ? "border-primary-yellow bg-primary-yellow/10"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => handleFeatureToggle(feature)}
                        >
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center mr-2 sm:mr-3 ${
                              formData.features.includes(feature)
                                ? "border-primary-yellow bg-primary-yellow"
                                : "border-gray-400"
                            }`}
                          >
                            {formData.features.includes(feature) && (
                              <Icon
                                icon='mdi:check'
                                className='text-white'
                                width={14}
                              />
                            )}
                          </div>
                          <span className='text-black text-sm sm:text-base'>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className='mt-4'>
                      <label className='block text-black font-medium mb-2 text-sm sm:text-base'>
                        Other features or requirements (optional)
                      </label>
                      <textarea
                        name='otherFeatures'
                        value={formData.otherFeatures}
                        onChange={handleChange}
                        className='w-full resize-none border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-bold-blue focus:border-transparent text-black text-sm sm:text-base'
                        rows='3'
                        placeholder='Describe any additional features you need...'
                      ></textarea>
                    </div>
                  </div>
                  <div className='flex justify-between mt-8'>
                    <button
                      type='button'
                      onClick={prevStep}
                      className='px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors flex items-center text-sm sm:text-base'
                    >
                      <Icon icon='mdi:arrow-left' className='mr-1 sm:mr-2' width={18} height={18} />
                      Back
                    </button>
                    <button
                      type='button'
                      onClick={nextStep}
                      className='px-4 sm:px-6 py-2 bg-bold-blue text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm sm:text-base'
                    >
                      Next
                      <Icon icon='mdi:arrow-right' className='ml-1 sm:ml-2' width={18} height={18} />
                    </button>
                  </div>
                </motion.div>
              )}
              
              {step === 3 && (
                <motion.div
                  key='step3'
                  variants={contentVariants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  className='text-black'
                >
                  <h3 className='text-lg sm:text-xl font-semibold mb-4 text-black'>
                    Project Details
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6'>
                    <div>
                      <label className='block text-black font-medium mb-1 sm:mb-2 text-sm sm:text-base'>
                        Your Name *
                      </label>
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-bold-blue focus:border-transparent text-black text-sm sm:text-base'
                        placeholder='Enter your full name'
                      />
                    </div>
                    <div>
                      <label className='block text-black font-medium mb-1 sm:mb-2 text-sm sm:text-base'>
                        Email Address *
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-bold-blue focus:border-transparent text-black text-sm sm:text-base'
                        placeholder='Enter your email'
                      />
                    </div>
                    <div>
                      <label className='block text-black font-medium mb-1 sm:mb-2 text-sm sm:text-base'>
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-bold-blue focus:border-transparent text-black text-sm sm:text-base'
                        placeholder='Enter your phone number'
                      />
                    </div>
                    <div>
                      <label className='block text-black font-medium mb-1 sm:mb-2 text-sm sm:text-base'>
                        Company/Organization
                      </label>
                      <input
                        type='text'
                        name='company'
                        value={formData.company}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-bold-blue focus:border-transparent text-black text-sm sm:text-base'
                        placeholder='Enter your company name'
                      />
                    </div>
                    <div>
                      <label className='block text-black font-medium mb-1 sm:mb-2 text-sm sm:text-base'>
                        Budget Range
                      </label>
                      <select
                        name='budget'
                        value={formData.budget}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-bold-blue focus:border-transparent text-black text-sm sm:text-base'
                      >
                        <option value=''>Select budget range</option>
                        {budgetOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                            className='text-black'
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className='block text-black font-medium mb-1 sm:mb-2 text-sm sm:text-base'>
                        Timeline
                      </label>
                      <select
                        name='timeline'
                        value={formData.timeline}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-bold-blue focus:border-transparent text-black text-sm sm:text-base'
                      >
                        <option value=''>Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                            className='text-black'
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='mb-6'>
                    <label className='block text-black font-medium mb-1 sm:mb-2 text-sm sm:text-base'>
                      Project Requirements
                    </label>
                    <textarea
                      name='requirements'
                      value={formData.requirements}
                      onChange={handleChange}
                      className='w-full border resize-none border-gray-300 rounded-lg p-2 sm:p-3 focus:ring-2 focus:ring-bold-blue focus:border-transparent text-black text-sm sm:text-base'
                      rows='3'
                      placeholder='Describe your project requirements in detail...'
                    ></textarea>
                  </div>
                  <div className='flex justify-between mt-8'>
                    <button
                      type='button'
                      onClick={prevStep}
                      className='px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors flex items-center text-sm sm:text-base'
                    >
                      <Icon icon='mdi:arrow-left' className='mr-1 sm:mr-2' width={18} height={18} />
                      Back
                    </button>
                    <button
                      type='submit'
                      className='px-4 sm:px-6 py-2 bg-bold-blue text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm sm:text-base'
                    >
                      Submit Request
                      <Icon icon='mdi:check' className='ml-1 sm:ml-2' width={18} height={18} />
                    </button>
                  </div>
                </motion.div>
              )}
              
              {step === 4 && (
                <motion.div
                  key='step4'
                  variants={contentVariants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  className='text-center py-6 sm:py-8 text-black'
                >
                  <div className='inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 mb-4 sm:mb-6'>
                    <Icon
                      icon='mdi:check'
                      className='text-green-600'
                      width={28}
                      height={28}
                    />
                  </div>
                  <h3 className='text-xl sm:text-2xl font-bold text-black mb-2'>
                    Request Submitted Successfully!
                  </h3>
                  <p className='text-black mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base'>
                    Thank you for your interest! Our team will review your
                    request and get back to you within 24-48 hours.
                  </p>
                  <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4'>
                    <button
                      type='button'
                      onClick={onClose}
                      className='w-full sm:w-auto px-6 py-2 bg-bold-blue text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base'
                    >
                      Close
                    </button>
                    <a
                      href={`https://wa.me/2348064968725?text=${whatsappMessage}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center text-sm sm:text-base'
                    >
                      <Icon
                        icon='mdi:whatsapp'
                        className='mr-2'
                        width={18}
                        height={18}
                      />
                      Chat on WhatsApp
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
          
          {/* WhatsApp fallback option */}
          {step < 4 && (
            <div className='mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 text-center'>
              <p className='text-black mb-2 text-sm sm:text-base'>
                Don't see what you're looking for? Let's discuss your
                specific needs.
              </p>
              <a
                href={`https://wa.me/2348064968725?text=${whatsappMessage}`}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center text-green-600 font-medium hover:text-green-700 text-sm sm:text-base'
              >
                <Icon icon='mdi:whatsapp' className='mr-2' width={18} height={18} />
                Chat with us on WhatsApp
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Quote;
