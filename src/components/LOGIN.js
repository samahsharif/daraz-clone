import React from 'react'

function LOGIN() {
  return (
    
   <>
   
   <section className="text-gray-600 body-font relative pt-24">
  <div className="container  mx-auto">
    <div className="w-res flex justify-between text-center lg:w-2/3 mt-12 mb-2">
      <h1 className=" sm:text-xl text-2xl font-medium title-font ">Welcome to Daraz! Please login.</h1>
      <p className=" delivery-heading ml-0 leading-9 text-xs">New member? Register here.</p>
    </div>
    <div className="lg:w-2/3 md:w-2/3 mx-auto mb-5 mt-0 bg-white px-10 pt-3 pb-4">
      <div className="flex  justify-between  -m-2">
        <div className=" w-1/2 mr-7 mt-0">
          <div className="relative mb-3">
            <label for="name" className="leading-7 text-xs ">Phone Number or Email*</label>
            <input type="text" id="name" name="name" placeholder='Please enter your Phone Number or Email ' className="w-full  rounded border border-gray-300  text-sm outline-none  py-1 px-3 leading-8 transition-colors "/>
          </div>
          <span></span>
          <div className='relative'>
          <label for="email" className="leading-7 text-sm text-gray-600">Password*</label>
          <input type="text" id="name" name="name" placeholder='Please enter your Password ' className="w-full  rounded border border-gray-300  text-sm outline-none  py-1 px-3 leading-8 transition-colors "/>
          </div>
        </div>
        <div className=" w-1/2 mt-4">    
    
        <button className="flex justify-center w-full text-white bg-clr border-0 py-3 px-8 focus:outline-none hover:bg-orange-500  rounded text-lg mb-2">Login</button>
        <span className=' delivery-heading text-xs mb-2'>Or, login with</span>
        <button className="flex  justify-center w-full  text-white fb-clr border-0 py-2 px-8 focus:outline-none hover:bg-indigo-500 rounded text-lg mb-3">Facebook</button>
        <button className="flex justify-center w-full text-white google-clr border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded text-lg">Google</button>
        </div>
        
      </div>
    </div>
  </div>
</section>
   
   </>
  )
}

export default LOGIN