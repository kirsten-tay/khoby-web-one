import React,{Component} from 'react'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

const Hero = () => {
  return (
    <div className="max-w-7x1 mx-auto ">

    <div  className="photo w-full relative">
    <div className="flex flex-col absolute text-left text-black p-1 rounded-full ">
              <span className=" text-blue-600 text-[15px] my-2">
                MULTIPURPOSE
                </span>
  
              <span className=" text-4xl font-medium ">#1 The Fastest</span>
              <span className=" text-4xl font-medium my-2">Worldpress theme</span>
          
              <span>You can create a website for any business. The template</span>
              <span>has many different sections and section types from which</span>
              <span>you can create your own unique website.</span>
              
              <div className="flex flex-row space-x-5"> 
                <button className="flex  items-center border-o outline-none hover:bg-blue-700 font-medium p-2 bg-blue-600 text-white rounded-xl my-3">
              About Us
              <ArrowNarrowRightIcon className="h-6 w-6 py-1"/>
            </button>
            <button className="flex  border-2 items-center outline-none hover:bg-grey-700 font-medium p-2 bg-white text-black rounded-xl my-3">
              Contact Us
              <ArrowNarrowRightIcon className="h-6 w-6 py-1"/>
              </button>
            </div>
             
               </div>
      </div>
      <div className="my-15">
        <hi>AREAS WHAT WE SERV</hi>
       <h6>Our Services</h6>
      </div>
      </div>
  );
}


export default Hero;