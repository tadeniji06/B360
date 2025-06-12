import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PortableText } from '@portabletext/react'
import { getBlogPost, getRelatedPosts, urlFor } from '../utils/sanity'
import { BlogDetailSkeleton } from './BlogSkeleton'
import BlogCard from './BlogCard'
import SEO from './SEO'
import { format } from 'date-fns'

const ViewBlog = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (slug) {
      fetchBlogPost()
    }
  }, [slug])

  const fetchBlogPost = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const postData = await getBlogPost(slug)
      
      if (!postData) {
        setError('Post not found')
        return
      }
      
      setPost(postData)
      
      // Fetch related posts
      const related = await getRelatedPosts(
        postData.categories,
        postData._id,
        3
      )
      setRelatedPosts(related)
      
    } catch (error) {
      console.error('Error fetching blog post:', error)
      setError('Failed to load post')
    } finally {
      setLoading(false)
    }
  }

  const portableTextComponents = {
    types: {
      image: ({ value }) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="my-8"
        >
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Blog image'}
            className="w-full rounded-lg shadow-lg"
          />
          {value.caption && (
            <p className="text-center text-gray-600 text-sm mt-2 italic">
              {value.caption}
            </p>
          )}
        </motion.div>
      ),
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold text-bold-blue mt-8 mb-4">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-bold text-bold-blue mt-6 mb-3">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-bold text-bold-blue mt-4 mb-2">
          {children}
        </h3>
      ),
      normal: ({ children }) => (
        <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-primary-yellow pl-6 py-2 my-6 bg-light-blue rounded-r-lg">
          <div className="text-bold-blue italic">{children}</div>
        </blockquote>
      ),
    },
    marks: {
      link: ({ children, value }) => (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-yellow hover:text-yellow-600 underline"
        >
          {children}
        </a>
      ),
      strong: ({ children }) => (
        <strong className="font-bold text-bold-blue">{children}</strong>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
      ),
    },
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <BlogDetailSkeleton />
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-3xl font-bold text-bold-blue mb-4">
              {error === 'Post not found' ? 'Post Not Found' : 'Something went wrong'}
            </h1>
            <p className="text-gray-600 mb-6">
              {error === 'Post not found' 
                ? "The blog post you're looking for doesn't exist or has been moved."
                : 'We encountered an error while loading the blog post.'
              }
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/blog')}
              className="bg-primary-yellow text-bold-blue px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Back to Blog
            </motion.button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.body?.[0]?.children?.[0]?.text?.slice(0, 150) || ''}
        image={post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined}
        type="article"
        url={`/blog/${post.slug.current}`}
      >
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author?.name} />
        {post.categories?.map((category) => (
          <meta key={category._id} property="article:tag" content={category.title} />
        ))}
      </SEO>

      <article className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link to="/" className="hover:text-primary-yellow">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/blog" className="hover:text-primary-yellow">Blog</Link>
                </li>
                <li>/</li>
                <li className="text-bold-blue font-medium truncate">
                  {post.title}
                </li>
              </ol>
            </motion.nav>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <img
                src={urlFor(post.mainImage).width(1200).height(600).url()}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Article Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories?.map((category) => (
                  <span
                    key={category._id}
                    className="bg-primary-yellow text-bold-blue px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {category.title}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bold-blue mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Author and Meta Info */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  {post.author?.image && (
                    <img
                      src={urlFor(post.author.image).width(48).height(48).url()}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-bold-blue">
                      {post.author?.name}
                    </p>
                    {post.author?.bio && (
                      <p className="text-sm text-gray-600">
                        {post.author.bio[0]?.children?.[0]?.text}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 md:ml-auto">
                  <span>{format(new Date(post.publishedAt), 'MMMM dd, yyyy')}</span>
                  <span>•</span>
                  <span>{post.estimatedReadingTime} min read</span>
                </div>
              </div>
            </motion.header>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-lg max-w-none mb-12"
            >
              <div className="text-lg leading-relaxed">
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              </div>
            </motion.div>

            {/* Share Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 py-6 border-t border-b border-gray-200 mb-12"
            >
              <span className="font-semibold text-bold-blue">Share this article:</span>
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-bold-blue mb-6">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <BlogCard
                      key={relatedPost._id}
                      post={relatedPost}
                      index={index}
                    />
                  ))}
                </div>
              </motion.section>
            )}

            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/blog')}
                className="bg-primary-yellow text-bold-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </motion.button>
            </motion.div>
          </div>
        </div>
      </article>
    </>
  )
}

export default ViewBlog
