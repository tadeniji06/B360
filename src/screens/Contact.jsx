import { hero, contact } from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Ready from "../components/Ready";
import { Icon } from "@iconify/react";

const Contact = () => {
	const [heroRef, heroInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [formRef, formInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// Encode the WhatsApp message
	const whatsappMessage = encodeURIComponent(
		"Hello B360! I'm interested in your services and would like to learn more."
	);

	return (
		<div className='relative'>
			{/* Hero Section */}
			<motion.div
				ref={heroRef}
				className='text-white bg-cover bg-center bg-no-repeat min-h-[300px] sm:min-h-[350px] md:min-h-[300px] w-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-visible'
				style={{
					backgroundImage: `linear-gradient(to right, rgba(0, 6, 71, 0.85), rgba(0, 6, 71, 0.7)), url(${hero})`,
					backgroundAttachment: "fixed",
				}}
				initial={{ opacity: 0 }}
				animate={{ opacity: heroInView ? 1 : 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className='max-w-4xl mx-auto md:ml-16 lg:ml-24'>
					<motion.h1
						className='text-xl sm:text-2xl md:text-3xl font-bold tracking-wider mb-4'
						initial={{ y: 20, opacity: 0 }}
						animate={{
							y: heroInView ? 0 : 20,
							opacity: heroInView ? 1 : 0,
						}}
						transition={{
							duration: 0.6,
							delay: 0.2,
						}}
					>
						GET IN TOUCH
					</motion.h1>
					<motion.p
						className='text-lg sm:text-xl md:text-2xl max-w-2xl'
						initial={{ y: 20, opacity: 0 }}
						animate={{
							y: heroInView ? 0 : 20,
							opacity: heroInView ? 1 : 0,
						}}
						transition={{
							duration: 0.6,
							delay: 0.4,
						}}
					>
						Have questions or need assistance? We are here to help
						you.
					</motion.p>
				</div>
			</motion.div>

			{/* Image Section */}
			<div className='w-full'>
				<img
					className='w-full object-cover h-[350px]'
					src={contact}
					alt='Contact B360'
				/>
			</div>

			{/* Contact Form and Options */}
			<div
				className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50'
				ref={formRef}
			>
				<div className='max-w-7xl mx-auto'>
					<motion.div
						className='grid grid-cols-1 md:grid-cols-2 gap-12'
						initial={{ opacity: 0, y: 30 }}
						animate={{
							opacity: formInView ? 1 : 0,
							y: formInView ? 0 : 30,
						}}
						transition={{ duration: 0.8 }}
					>
						{/* Contact Form */}
						<div className='bg-white p-8 rounded-lg shadow-lg'>
							<h2 className='text-2xl font-bold text-bold-blue mb-6'>
								Send Us a Message
							</h2>
							<form>
								<div className='mb-4'>
									<label
										htmlFor='name'
										className='block text-gray-700 mb-2'
									>
										Your Name
									</label>
									<input
										type='text'
										id='name'
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bold-blue'
										placeholder='Enter your name'
									/>
								</div>
								<div className='mb-4'>
									<label
										htmlFor='email'
										className='block text-gray-700 mb-2'
									>
										Email Address
									</label>
									<input
										type='email'
										id='email'
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bold-blue'
										placeholder='Enter your email'
									/>
								</div>
								<div className='mb-4'>
									<label
										htmlFor='subject'
										className='block text-gray-700 mb-2'
									>
										Subject
									</label>
									<input
										type='text'
										id='subject'
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bold-blue'
										placeholder='Enter subject'
									/>
								</div>
								<div className='mb-6'>
									<label
										htmlFor='message'
										className='block text-gray-700 mb-2'
									>
										Message
									</label>
									<textarea
										id='message'
										rows='5'
										className='w-full resize-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bold-blue'
										placeholder='Enter your message'
									></textarea>
								</div>
								<motion.button
									type='submit'
									className='w-full bg-bold-blue text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-300'
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.97 }}
								>
									Send Message
								</motion.button>
							</form>
						</div>

						{/* Direct Contact Options */}
						<div>
							<h2 className='text-2xl font-bold text-bold-blue mb-6'>
								Reach Us Directly
							</h2>

							{/* WhatsApp Contact */}
							<motion.div
								className='bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow duration-300'
								whileHover={{ y: -5 }}
								transition={{
									type: "spring",
									stiffness: 300,
								}}
							>
								<div className='flex items-center'>
									<div className='bg-green-500 p-3 rounded-full mr-4'>
										<Icon
											icon='logos:whatsapp-icon'
											className='h-6 w-6'
										/>
									</div>
									<div>
										<h3 className='text-lg font-semibold text-gray-800'>
											WhatsApp
										</h3>
										<p className='text-gray-600'>
											Chat with us directly
										</p>
										<a
											href={`https://wa.me/2348064968725?text=${whatsappMessage}`}
											target='_blank'
											rel='noopener noreferrer'
											className='text-green-600 font-medium hover:underline mt-2 inline-block'
										>
											Click here
										</a>
									</div>
								</div>
							</motion.div>

							{/* Email Contact */}
							<motion.div
								className='bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow duration-300'
								whileHover={{ y: -5 }}
								transition={{
									type: "spring",
									stiffness: 300,
								}}
							>
								<div className='flex items-center'>
									<div className='bg-blue-500 p-3 rounded-full mr-4'>
										<Icon
											icon='material-symbols:mail'
											className='h-6 w-6 text-white'
										/>
									</div>
									<div>
										<h3 className='text-lg font-semibold text-gray-800'>
											Email
										</h3>
										<p className='text-gray-600'>Send us an email</p>
										<a
											href='mailto:info@b360.com'
											className='text-blue-600 font-medium hover:underline mt-2 inline-block'
										>
											tech@theb360.com
										</a>
									</div>
								</div>
							</motion.div>

							{/* Office Location */}
							<motion.div
								className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
								whileHover={{ y: -5 }}
								transition={{
									type: "spring",
									stiffness: 300,
								}}
							>
								<div className='flex items-center'>
									<div className='bg-purple-500 p-3 rounded-full mr-4'>
										<Icon
											icon='material-symbols:location-on'
											className='h-6 w-6 text-white'
										/>
									</div>
									<div>
										<h3 className='text-lg font-semibold text-gray-800'>
											Visit Us
										</h3>
										<p className='text-gray-600'>
											Our office location
										</p>
										<p className='text-gray-800 mt-2'>
											426a Damilola Fashade street, Omole Phase 1{" "}
											<br />
											Lagos, Nigeria
										</p>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			<Ready />
		</div>
	);
};

export default Contact;
