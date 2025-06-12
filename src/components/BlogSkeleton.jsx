import { motion } from 'framer-motion'

const BlogCardSkeleton = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <div className="h-48 bg-gray-200 animate-pulse" />
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse" />
        <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
        <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="w-full h-6 bg-gray-200 rounded animate-pulse mb-3" />
      <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse mb-4" />
      <div className="space-y-2">
        <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
        <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" />
        <div className="w-4/6 h-4 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
        <div className="w-16 h-8 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  </motion.div>
)

export const BlogListSkeleton = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, index) => (
      <BlogCardSkeleton key={index} />
    ))}
  </div>
)

export const BlogDetailSkeleton = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-4xl mx-auto"
  >
    <div className="h-64 md:h-96 bg-gray-200 rounded-lg animate-pulse mb-8" />
    <div className="space-y-4 mb-8">
      <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse" />
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
        <div className="space-y-2">
          <div className="w-32 h-4 bg-gray-200 rounded animate-pulse" />
          <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
    <div className="space-y-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="space-y-2">
          <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
          <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" />
          <div className="w-4/6 h-4 bg-gray-200 rounded animate-pulse" />
        </div>
      ))}
    </div>
  </motion.div>
)
