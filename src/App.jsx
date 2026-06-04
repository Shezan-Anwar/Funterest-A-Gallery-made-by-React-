import React from 'react'
import Navbar from './assets/components/Navbar'
import axios from 'axios'
async function getData(){
      const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
       console.log(response.data)
       
      }
const App = () => {
  return (
    <div>
      <Navbar />
     <button onClick={getData}>Get Data</button>
     <div>
      
     </div>
    </div>
  )
}

export default App
