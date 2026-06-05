import React, { useEffect, useState } from 'react'
import Navbar from './assets/components/Navbar'
import axios from 'axios'
import {Bookmark, Scale} from 'lucide-react'
import {MessageCircleHeart} from 'lucide-react'
import { Loader } from 'lucide-react'

const App = () => {
  
  const [index,setIndex] = useState(1);
  const [userData, setUserData] = useState([]);
  const getData = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
      setUserData(response.data)
      console.log(response.data)
      console.log(index)
      }
  let printData = "Loading..."
  if (userData.length > 0){
    printData = userData.map(function(elem){
      return <div key={elem.idx} className='h-77 w-63 bg-white rounded-2xl '>
        <a href={elem.url} target='_blank' >
        <img src={elem.download_url} alt="" className='w-full h-[85%] object-cover rounded-t-2xl' />
        <div className='flex justify-between'>
          <h2 className='font-bold  pl-2'>{elem.author}</h2>
          <h4 className='pr-2 text-gray-700'>{elem.height}x{elem.width}</h4>
          
        </div>
        </a>
        <div className='flex flex-wrap justify-between gap-2 pb-1'>
           <MessageCircleHeart color="#000000" /> <Bookmark color="#000000" />
          </div>
       
      </div>
    })
  }
  useEffect(function(){
    getData()
  },[index])
  return (
    <div>
      <Navbar />
     <div className='flex flex-wrap gap-6 w-screen  justify-center overflow-hidden  pt-22 '>
      {printData}
     </div>
     <div className=' flex flex-row justify-center gap-5 m-10 '>
      <button
      style={{opacity : index==1 ? 0.5 : 1}}
      onClick={()=>{
        if (index > 1){
        setIndex(index-1)
        setUserData([])
        }
      }} 
      className='bg-red-600 text-white font-semibold h-12 w-15 active:scale-95'>Prev</button>
      <button 
       onClick={()=>{
        
        setIndex(index+1)
        setUserData([])
       
      }} 
      className='bg-red-600 text-white font-semibold h-12 w-15'>Next</button>
     </div>
    </div>
  )
}

export default App
