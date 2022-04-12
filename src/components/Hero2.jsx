import React, { Fragment } from 'react'
import { OfficeBuildingIcon } from '@heroicons/react/outline';


const Hero2 = ()=> {
    return(
        <Fragment>
        <div className="flex flex-row space-x-10 m-20">

        <div className="flex flex-col justify-center  w-screen md:w-1/2 items-center border-2 p-5 border-gray-200">
      <div className="relative w-full">
                <OfficeBuildingIcon className="h-6 w-6"/>
                <span>Corporate Solution</span>
                <span>contrary to popular believe, Lorem Ipsum is not simply random text.</span>
                </div>
                </div>
                <div className=" flex flex-col justify-center w-screen md:w-1/2 items-center border-2 p-5 border-gray-200">
      <div className="relative w-full">  
      <OfficeBuildingIcon className="h-6 w-6"/>
      <span>Corporate Solution</span>
                <span>contrary to popular believe, Lorem Ipsum is not simply random text.</span>
                </div>
                </div>
                <div className="flex flex-col justify-center  w-screen md:w-1/2 items-center border-2 p-5 border-gray-200">
      <div className="relative w-full"> 
      <OfficeBuildingIcon className="h-6 w-6"/>
                <span className="font-medium text-4xl">Corporate Solution</span><br/>
                <span>contrary to popular believe, Lorem Ipsum is not simply random text.</span>                </div>
                </div>   

            </div>
        

        </Fragment>

    )
}

export default Hero2;