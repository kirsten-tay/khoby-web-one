import React from 'react'
import { LocationMarkerIcon ,DeviceMobileIcon, MailIcon} from '@heroicons/react/outline';


const Footer= ()=> {
return(
    <div>
 
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
         </div>
         
         <div className="p-10">
             <hr  /> 
          <span className="justify-begin">Terms and conditions</span>
          <span>Privacy policy</span>
          <span>&copy 2021 Pathsoft. All rights reserved</span>
         </div>
         
      </div>
    </div>
)

}

export default Footer;