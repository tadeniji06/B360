const Cause = () => {
  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8 bg-light-blue/10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12'>
          {/* Title Section */}
          <div className='md:w-1/3'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-bold-blue leading-tight mb-4'>
              We Do This For a <br />
              <span className='text-primary-yellow'>Single Cause</span>
            </h2>
          </div>
          
          {/* Content Section */}
          <div className='md:w-2/3'>
            <p className='text-gray-700 leading-relaxed text-base sm:text-lg'>
              At Business360 (B360), our mission is to empower businesses in
              emerging markets—especially across Africa—by providing
              intelligent, adaptable, and affordable software solutions. We
              design tools that simplify everyday operations, foster
              efficiency, and eliminate manual bottlenecks.
            </p>
            
            <p className='text-gray-700 leading-relaxed text-base sm:text-lg mt-4'>
              Through powerful automation, real-time data insights, and modular features, we
              enable organizations to make smarter decisions, respond quickly
              to market demands, and scale confidently at every stage of
              their journey. Our goal is to be a true digital growth partner,
              helping businesses thrive in today's fast-evolving economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cause;
