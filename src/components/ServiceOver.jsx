const ServiceOver = () => {
  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8 bg-light-blue/10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12'>
          {/* Title Section */}
          <div className='md:w-1/3'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-bold-blue leading-tight mb-4'>
              Our Service <br />
              <span className='text-primary-yellow'>Overview</span>
            </h2>
          </div>

          {/* Content Section */}
          <div className='md:w-2/3'>
            <p className='text-gray-700 leading-relaxed text-base sm:text-lg'>
              We specialize in building smart, scalable digital solutions
              that power modern businesses
            </p>

            <p className='text-gray-700 leading-relaxed text-base sm:text-lg mt-4'>
              From enterprise resource planning and customer relationship
              management to web and mobile app development, our modular
              tools are designed to simplify operations, enhance
              productivity, and drive growth across various industries.
              Whether you're looking to automate tasks, manage teams,
              analyze data, or deliver seamless customer experiences, B360
              equips you with the technology and support to thrive in a
              fast-changing digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceOver;
