import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { ChevronDown } from 'lucide-react'
import { MessageSquareDot } from 'lucide-react'
const RightNav = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-black text-white p-2 rounded-md font-medium w-auto">
        CREATE <i class="ri-add-large-fill"></i>
      </div>
      <MessageSquareDot color="#000000" />
      <div className='flex items-center gap-1'><img src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-10 h-10 rounded-full" />
       <ChevronDown color="#000000" /></div>
    </div>
  )
}

export default RightNav
