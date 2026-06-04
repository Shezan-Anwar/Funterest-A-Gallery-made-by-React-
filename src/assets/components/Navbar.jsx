import React from 'react'
import Search from './Search'
import RightNav from './RightNav'
const Navbar = () => {
  return (
    <div className = 'bg-gray-800 text-white p-4 flex items-center justify-between'>
      <Search />
      <RightNav />
    </div>
  )
}

export default Navbar
