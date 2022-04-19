import React from 'react'
import { LocationMarkerIcon ,DeviceMobileIcon,ArrowNarrowRightIcon, MailIcon} from '@heroicons/react/outline';
import Photo2 from "../assets/Photo2.jpg"
import Photo5 from "../assets/Photo5.jpg"
import Photo4 from "../assets/Photo4.jpg"



const Footer= ()=> {
return(
    <div>
 <div className="bg-slate-300 p-10">
     <div className="p-5">
     <h5 className="text-blue-500">MORE INFO ABOUT</h5>
     <h2 className="font-medium text-5xl"> Latest News</h2>
     </div>
      <div className="grid grid-col-1 gab-6  max-w-9xl mx-auto space-x-7 p-5 lg:grid-cols-3 gab-6 p-10">
          <div className="border-2 p-1 bg-white rounded-md">
          <img src={Photo2} />
          <h2 className="font-medium text-2xl">Key Considerstions Of IPaaS</h2>
          <h5>Whenever I'm TA for a introductory CSS class where students learn [..]</h5>
          </div>

          <div className="border-2 p-1 bg-white rounded-md">
          <img src={Photo5} />
          <h2 className="font-medium text-2xl">Benefitsb Of Async/Await</h2>
          <h5>Whenever I'm TA for a introductory CSS class where students learn [..]   
          </h5>
          </div>

          <div className="border-2 p-1 bg-white rounded-md">
          <img src={Photo4} />
          <h2 className="font-medium text-2xl">Hibernate Query Language</h2>
          <h5>Whenever I'm TA for a introductory CSS class where students learn [..]</h5>
          </div>

</div>
<div className=" flex justify-center items-center mx-auto">
                        <button className="flex px-11 py-3  items-center border-o outline-none hover:bg-blue-700 font-medium p-2 bg-blue-600 text-white rounded-md my-3">
                            All News
                            <ArrowNarrowRightIcon className="h-6 w-6 py-1" />
                        </button>
                    </div>

 </div>
      <div className="bg-slate-700 ">
      <div className="grid grid-col-1 gab-6  max-w-9xl mx-auto space-x-7 p-5 lg:grid-cols-4 gab-6 p-10">
           
      <div className=" " >
            <img src={'https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/06/logo.svg'} alt={'top'} className="w-90 " />
          <span className="m-5">Our company has been developing high-quality and 
              reliable software for corporate needs since 2008. 
              We are renowned professionals of software development.</span>
          </div>

           <div className=" flex flex-col text-left space-y-5">
            <span className="font-medium">Menu 1</span>
            <span>About us</span>
            <span>Services</span>
            <span>Pricing</span>
            <span>Projects</span>
            <span>Contact US</span>
           </div>

           <div className="flex flex-col text-left space-y-5">
              <span className="font-medium">Menu 2</span>
              <span>Testimonials</span>
              <span>FAQ</span>
              <span>Brands</span>
              <span>Coming soon</span>
              <span>Gallery Grid Padding</span>
           </div>

           <div className="flex flex-col text-left space-y-5 ">
              <span className="font-medium">Contacts</span>
              <div className=" flex items-center">
                  <LocationMarkerIcon className="h-6 w-6 "/>  
              <span className="items-center">301 S Irving Blvd Los Angeles, CA 90020
              </span>
              </div>
             <div className="flex items-center">
                 <DeviceMobileIcon className="h-6 w-6"/> 
             <span>+ 1 323-913-4688 <br/> + 1 323-888-4554
              </span>
             </div>
              <div className="flex items-center">
                  <MailIcon className="h-6 w-6"/>
                  <span>hello@example.com<br/> info@example.com
              </span>
              </div>
              
              
           </div>
         </div> <hr  /> 
         
         <div className="p-7">
            
          <span className="">Terms and conditions</span>
          <span>Privacy policy</span>
          <span>&copy; 2021 Pathsoft. All rights reserved</span>
         </div>
         
      </div>
    </div>
)

}

export default Footer;