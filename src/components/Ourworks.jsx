import React from 'react'
import Photo2 from '../assets/Photo2.jpg'
import Photo3 from '../assets/Photo3.jpg'
import Photo4 from '../assets/Photo4.jpg'
import Photo5 from '../assets/Photo5.jpg'
import Photo1 from '../assets/Photo1.jpg'



import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

const Ourworks =() =>{
return(
     
    <div>
        <div className=" bg-slate-100 p-10 ">
                <div className="p-5">
            <h5 className="text-blue-600 text-2xl">Our works</h5>
            <h2 className="font-medium text-5xl">Latest Projects</h2>
        </div>
        <div className="w-full">
        <div className="grid grid-col-1  my-10 max-w-7xl mx-auto lg:grid-cols-5 ">
           <span>ALL</span>
           <span>CUSTOM SOFTWARE</span>
           <span>MOBILE APPS</span>
           <span>QA & TESTING</span>
           <span>UX & DESIGN</span>
            </div>

            <div className="grid grid-col-1 gab-6  max-w-9xl mx-auto lg:grid-cols-3 gab-6 ">
            <span  className="items-center p-5 rounded-md ">
                <img src={Photo2}/>
                </span>
            <span  className="items-center p-5 rounded-md ">
                <img src={Photo3}/>
                </span>
            <span  className="items-center p-5 rounded-md ">
                <img src={Photo4}/>
                </span>
            <span className="items-center p-5">
                <img src={Photo}/>
                </span>
            <span  className="items-center p-5">
                <img src={Photo}/>
                </span>
            <span  className="items-center p-5">
                <img src={Photo}/>
                </span>
            </div>

            <div className=" flex justify-center items-center mx-auto">
                        <button className="flex px-11 py-3  items-center border-o outline-none hover:bg-blue-700 font-medium p-2 bg-blue-600 text-white rounded-md my-3">
                            All Projects
                            <ArrowNarrowRightIcon className="h-6 w-6 py-1" />
                        </button>
                    </div>

        </div>
    </div>
    </div>

);

}

export default Ourworks;
