import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getBlogPosts, searchPosts, client } from '../utils/sanity'
import BlogCard from '../components/BlogCard'
import BlogSearch from '../components/BlogSearch'
import { BlogListSkeleton } from '../components/BlogSkeleton'
import SEO from '../components/SEO'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchLoading, setSearchLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [activeFilter, setActiveFilter] = useState('')
  const postsPerPage = 9

  useEffect(() => {
    fetchInitialData()
  }, [])

  const fetchInitialData = async () => {
    try {
      setLoading(true)
      const [postsData, categoriesData] = await Promise.all([
        getBlogPosts(postsPerPage, 0),
        client.fetch('*[_type == "category"] { _id, title }')
      ])
      
      setPosts(postsData)
      setFilteredPosts(postsData)
      setCategories(categoriesData)
      setHasMore(postsData.length === postsPerPage)
    } catch (error) {
      console.error('Error fetching blog data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredPosts(posts)
      return
    }

    try {
      setSearchLoading(true)
      const searchResults = await searchPosts(searchTerm)
      setFilteredPosts(searchResults)
    } catch (error) {
      console.error('Error searching posts:', error)
    } finally {
      setSearchLoading(false)
    }
  }

  const handleFilter = (category) => {
    setActiveFilter(category)
    if (!category) {
      setFilteredPosts(posts)
    } else {
      const filtered = posts.filter(post =>
        post.categories?.some(cat => cat.title === category)
      )
      setFilteredPosts(filtered)
    }
  }

  const loadMorePosts = async () => {
    try {
      const newPosts = await getBlogPosts(postsPerPage, currentPage * postsPerPage)
      if (newPosts.length > 0) {
        const updatedPosts = [...posts, ...newPosts]
        setPosts(updatedPosts)
        if (!activeFilter) {
          setFilteredPosts(updatedPosts)
        }
        setCurrentPage(prev => prev + 1)
        setHasMore(newPosts.length === postsPerPage)
      } else {
        setHasMore(false)
      }
    } catch (error) {
      console.error('Error loading more posts:', error)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      <SEO
        title="Blog"
        description="Stay updated with the latest insights on business automation, technology trends, and industry best practices from Business 360."
        url="/blog"
        type="website"
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-bold-blue mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover insights, tips, and trends in business automation and technology
              that can help transform your business operations.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <BlogSearch
            onSearch={handleSearch}
            onFilter={handleFilter}
            categories={categories}
          />

          {/* Loading State */}
          {(loading || searchLoading) && <BlogListSkeleton count={6} />}

          {/* Blog Posts Grid */}
          {!loading && !searchLoading && (
            <>
              {filteredPosts.length > 0 ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                >
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={post._id} post={post} index={index} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-2xl font-bold text-bold-blue mb-2">
                    No posts found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria.
                  </p>
                </motion.div>
              )}

              {/* Load More Button */}
              {hasMore && !activeFilter && filteredPosts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={loadMorePosts}
                    className="bg-primary-yellow text-bold-blue px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                  >
                    Load More Posts
                  </motion.button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Blog
