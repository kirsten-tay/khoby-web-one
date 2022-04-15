import React from 'react';
import Photo from '../assets/Photo.jpg'


const Whoweare =( ) => {
     return(
  
        <div>

            <div className="p-5 m-10">
                <h5 className="text-blue-500">
                WHO WE ARE</h5>
                <h2 className="font-medium text-4xl">Meet The Team</h2>

                <div className="grid grid-col-1 gab-6  max-w-9xl mx-auto lg:grid-cols-3 gab-6 ">
            <div className="border-2 rounded-md">
            <span  className="items-center  ">
                <img src={Photo} />
                </span></div>
                </div>
            </div>

        </div>
     );

}

export default Whoweare;