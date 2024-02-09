import React from 'react'
import Logo from '../../assets/bag.png'

const Navbar = () => {
  return (
    <div className=' shadow-md bg-white
    dark:bg-gray-900 dark:text-white duration-200
    relative z-40
    '>
      {/* upper Navbar */}
      <div className=' bg-primary/40 py-2'>
        <div className='container flex 
        justify-between items-center'>
          <div>
            <a href="#" className='font-bond text-2xl
             sm:text-3xl flex gap-2'>
              <img src={Logo} alt="Logo" 
              className='w-10 uppercase'
              />
              Shoply
            </a>
          </div>
          {/* search bar and order button */}
         <div>
          <div className='relative group hidden
          sm:block'>
          <input type="text" placeholder='search'
            className='w-[200px] sm:w-[200px]
            group-hover:w-[300px] 
            transition-all duration-300 rounded-full border 
            border-gray-300 px-2 py-1 focus:outline-none focus:border-1
            focus:border-orange-400'
            />
          </div>
         </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div></div>
    </div>
  )
}

export default Navbar