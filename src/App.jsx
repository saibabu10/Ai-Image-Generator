import React from 'react'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import {Home,CreatePost} from './pages'
// import {Home,CreatePost} from './pages/index'
const App = () => {
  return (
   <BrowserRouter>
   <header className='w-full flex justify-between items-center 
    bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
      <div><h1 className="text-2xl font-bold">AI image Generator</h1></div>
      <Link to='/create-post' className='font-inter font-medium  bg-[#6469ff]
       text-white px-4 py-2 rounded-md'>Create</Link>
   </header>
   </BrowserRouter>
  )
}

export default App