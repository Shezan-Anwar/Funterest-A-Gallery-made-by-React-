import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Search = () => {
  return (
    <div className="flex items-center space-x-2">
       <div className="text-gray-900 bg-gray-300 p-2 rounded-md text-lg font-medium"><i class="ri-search-ai-4-line"></i></div>
      <input
        type="text"
        placeholder="whats on your mind?"
        className="w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-300 text-gray-900"
      />
    </div>
  )
}

export default Search
