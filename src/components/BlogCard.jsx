import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { urlFor } from '../utils/sanity'
import { format } from 'date-fns'

const BlogCard = ({ post, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/blog/${post.slug.current}`} className="block">
        <div className="relative overflow-hidden h-48">
          <motion.img
            variants={imageVariants}
            whileHover="hover"
            src={urlFor(post.mainImage).width(400).height(200).url()}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            {post.categories?.slice(0, 1).map((category) => (
              <span
                key={category._id}
                className="bg-primary-yellow text-bold-blue px-3 py-1 rounded-full text-sm font-medium"
              >
                {category.title}
              </span>
            ))}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            {post.author?.image && (
              <img
                src={urlFor(post.author.image).width(24).height(24).url()}
                alt={post.author.name}
                className="w-6 h-6 rounded-full"
              />
            )}
            <span>{post.author?.name}</span>
            <span>•</span>
            <span>{format(new Date(post.publishedAt), 'MMM dd, yyyy')}</span>
            <span>•</span>
            <span>{post.estimatedReadingTime} min read</span>
          </div>
          
          <h3 className="text-xl font-bold text-bold-blue mb-3 line-clamp-2 hover:text-primary-yellow transition-colors">
            {post.title}
          </h3>
          
          {post.body && (
            <p className="text-gray-600 line-clamp-3 mb-4">
              {post.body[0]?.children?.[0]?.text || ''}
            </p>
          )}
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              {post.categories?.length > 1 && `+${post.categories.length - 1} more`}
            </span>
            <motion.span
              whileHover={{ x: 5 }}
              className="text-primary-yellow font-medium inline-flex items-center gap-1"
            >
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default BlogCard
