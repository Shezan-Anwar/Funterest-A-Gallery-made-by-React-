import React from 'react'

const RightNav = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-black text-white p-2 rounded-md font-medium w-auto">
        CREATE <i class="ri-add-large-fill"></i>
      </div>
      <i class="ri-chat-unread-line"></i>
      <div className='flex items-center gap-1'><img src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-10 h-10 rounded-full" />
        <i class="ri-arrow-down-s-line"></i></div>
    </div>
  )
}

export default RightNav
