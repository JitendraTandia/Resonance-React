import React from 'react'


const Navbar = () => {
  return (
    <div className='flex justify-between bg-[#0A557D] mt-6 h-20' >
        <img className='text-white w-20 h-20 bg-red-300' src="" alt="LOGO" />
        <div className='flex items-center justify-center gap-10 text-lg text-white'>
            <h4>Home</h4>
            <h4>About Us</h4>
            <h4>Contact Us</h4>
            <h4>Results</h4>
            <h4>Courses</h4>
            <h4>ResoSAT</h4>
            <h4>Admission</h4>
        </div>
        <div className='flex justify-center items-center' >
        <button className=' h-10 w-32 rounded-full bg-[#B5C800] flex justify-center  items-center gap-1'>Call Now
        <i class="ri-phone-fill"></i>
        </button>
        </div>  
    </div>
  )
}

export default Navbar