import React from 'react';
import Bio1 from '../assets/Bio1.jpg'
import Bio2 from '../assets/Bio2.jpg'
import Bio3 from '../assets/Bio3.jpg'



const Whoweare =( ) => {
     return(
  
        <div>

            <div className="p-5 m-10">
                <h5 className="text-blue-500">
                WHO WE ARE</h5>
                <h2 className="font-medium text-4xl">Meet The Team</h2>

                <div className="grid grid-col-1 gab-6  max-w-9xl mx-auto space-x-7 lg:grid-cols-4 gab-6 ">
            <div className="border-2  rounded-md">
            <span className="items-center  ">
                <img src={Bio1} />
                <span className=" text-2xl font-medium">
                Mary Lee
                </span><br/>
                <span>software Developer</span>
                </span>
                </div>

                <div className="border-2 rounded-md">
            <span  className="items-center   ">
                <img src={Bio3} />
                <span className=" text-2xl font-medium">
                Ryan Wilson                </span><br/>
                <span>CEO</span>
                </span></div>

                <div className="border-2 rounded-md">
            <span  className="items-center  ">
                <img src={Bio3} />
                <span className=" text-2xl font-medium">
                Sam Robinson
               </span><br/>
                <span>Senior Developer</span>
                </span></div>

                <div className="border-2 rounded-md">
            <span  className="items-center  ">
                <img src={Bio2} />
                <span className=" text-2xl font-medium">
                Jill Peterson               </span><br/>
                <span>Project Manager</span>
                </span></div>
                </div>
</div>

                <div className="my-10 p-5">
                 <h5 className="text-blue-500">REVIEWS FROM OUR CLIENTS</h5>
                <h2 className="font-medium text-5xl">What People Say</h2>
                </div>

                <div className="grid grid-col-1 gab-6  max-w-9xl mx-auto space-x-7 p-5 lg:grid-cols-3 gab-6 ">
                    <div className="border-2 p-5 rounded-md text-center">
                     <span>Catherine Williams</span><br/>
                     <span>Regular client</span><br/>
                     <span>PathSoft offers a high caliber of resources 
                         skilled in Microsoft Azure.NET, mobile and Quality Assurance. 
                         They became our true business partners over the past three years.</span>
                    </div>

                    <div className="border-2 p-5 rounded-md">
                     <span>Rupert Wood</span><br/>
                     <span>Regular client</span><br/>
                     <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                          Suscipit consequuntur sequi eos beatae deleniti culpa
                           cupiditate rerum. Similique, blanditiis rem perspiciatis 
                           fugiat voluptatem quas officiis ducimus reprehenderit.</span>
                    </div>

                    <div className="border-2 p-5 rounded-md">
                     <span>Samantha Brown</span><br/>
                     <span>Regular client</span><br/>
                     <span>We sincerely hope that each and every user entering 
                         our website will find exactly. With advanced features of 
                         activating account and new login widgets, you will definitely 
                         have a great experience of using our web page.</span>
                    </div>
                </div>
            
        </div>
     );

}

export default Whoweare;