import React, { Fragment } from 'react'
import { OfficeBuildingIcon, ArrowNarrowRightIcon,  } from '@heroicons/react/outline';


const Hero2 = () => {
    return (
        <Fragment>
            <div className="flex flex-col space-y-10 mx-6 lg:m-20">
                <div className="py-6 ">
                    <h5 className="text-blue-600">
                        AREAS WHAT WE SERV
                    </h5>
                    <h2 className="font-medium text-5xl">Our Services</h2>
                </div>

                <div className="w-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className=" flex flex-col justify-cente items-center border p-5 border-gray-300 hover:bg-blue-500 rounded-md">
                            <div className="relative w-full p-5">
                                <div className="bg-blue-600 p-3 rounded-full  w-20 h-20  mx-auto hover:bg-white flex items-center justify-center">
                                    <OfficeBuildingIcon className="h-11 w-11 text-white hover:text-blue-600" />
                                </div>
                                <span className="font-medium text-3xl ">Corporate Solution</span><br />
                                <span>contrary to popular believe, Lorem Ipsum is not simply random text.</span>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-cente items-center border p-5 border-gray-300 hover:bg-blue-500 rounded-md">
                            <div className="relative w-full p-5">
                                <div className="bg-blue-600 p-3 rounded-full  w-20 h-20  mx-auto hover:bg-white hover:text-blue-500 flex items-center justify-center">
                                    <OfficeBuildingIcon className="h-11 w-11 text-white" />
                                </div>
                                <span className="font-medium text-3xl ">Call Center Solutions</span><br />
                                <span>contrary to popular believe, Lorem Ipsum is not simply random text.</span>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-cente items-center border p-5 border-gray-300 hover:bg-blue-500 rounded-md">
                            <div className="relative w-full p-5">
                                <div className="bg-blue-600 p-3 rounded-full  w-20 h-20  mx-auto hover:bg-white hover:text-blue-500 flex items-center justify-center">
                                    <OfficeBuildingIcon className="h-11 w-11 text-white" />
                                </div>
                                <span className="font-medium text-3xl ">Cloud Development</span><br />
                                <span>There are many variations of passages of Lorem Ipsum available.</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 flex justify-center items-center mx-auto">
                        <button className="flex px-11 py-3  items-center border-o outline-none hover:bg-blue-700 font-medium p-2 bg-blue-600 text-white rounded-md my-3">
                            All Services
                            <ArrowNarrowRightIcon className="h-6 w-6 py-1" />
                        </button>
                    </div>

                </div>

            </div>


        </Fragment>

    )
}

export default Hero2;