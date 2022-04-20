import React from 'react'
import Photo2 from '../assets/Photo2.jpg'
import Photo3 from '../assets/Photo3.jpg'
import Photo4 from '../assets/Photo4.jpg'
import Photo5 from '../assets/Photo5.jpg'
import Photo6 from '../assets/Photo6.jpg'
import Photo7 from '../assets/Photo7.jpg'




import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

const Ourworks = () => {
    return (

        <div>
            <div className=" bg-slate-100 p-10 ">
                <div className="p-5">
                    <h5 className="text-blue-600 text-2xl">Our works</h5>
                    <h2 className="font-medium text-5xl">Latest Projects</h2>
                </div>
                <div className="w-full">
                    <div className="flex flex-row space-x-5 justify-center my-10 max-w-7xl mx-auto ">
                        <h5>ALL</h5>
                        <h5>CUSTOM SOFTWARE</h5>
                        <h5>MOBILE APPS</h5>
                        <h5>QA & TESTING</h5>
                        <h5>UX & DESIGN</h5>
                    </div>

                    <div className="grid grid-col-1 gab-6  max-w-9xl mx-auto lg:grid-cols-3 gab-6 my-5relative">
                        <div className="flip-card h-96 w-96 ">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={Photo2} className=" h-full w-full object-cover " />
                                    <div className="absolute "></div>
                                </div>
                                <div className="flip-card-back bg-blue-500 flex items-center justify-center flex-col">
                                    <h1>Hello</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card h-96 w-96 ">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={Photo2} className=" h-full w-full object-cover " />
                                    <div className="absolute "></div>
                                </div>
                                <div className="flip-card-back bg-blue-500 flex items-center justify-center flex-col">
                                    <h1>Hello</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card h-96 w-96 ">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={Photo2} className=" h-full w-full object-cover " />
                                    <div className="absolute "></div>
                                </div>
                                <div className="flip-card-back bg-blue-500 flex items-center justify-center flex-col">
                                    <h1>Hello</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card h-96 w-96 ">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={Photo2} className=" h-full w-full object-cover " />
                                    <div className="absolute "></div>
                                </div>
                                <div className="flip-card-back bg-blue-500 flex items-center justify-center flex-col">
                                    <h1>Hello</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center mx-auto">
                        <button className="flex px-11 py-3  items-center border-o outline-none hover:bg-blue-700 font-medium p-2 bg-blue-600 text-white rounded-md my-3">
                            All Projects
                            <ArrowNarrowRightIcon className="h-6 w-6 py-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div >

    );

}

export default Ourworks;
