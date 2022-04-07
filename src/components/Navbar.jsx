import React from 'react';
import Loginsvg from '../assets/Loginsvg'
import Heartsvg from '../assets/Heartsvg';
import Cartsvg from '../assets/Cartsvg';
import Searchsvg from '../assets/Searchsvg'
import Arrowdown from '../assets/Arrowdown'



const Navbar =() =>{
    return(
        <div className="w-full bg-white border-b border-gray-200 ">
                  <div className="max-w-7x1 mx-auto ">
           <div className="flex justify-between items-center py-5 px-10">
            <div className="flex flex-1">          
                  <img src={'https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/06/logo.svg'}  alt={'top'} className="w-90 " />
            </div>
        

          <nav className="space-x-10  flex ">
            <a  href="Hero" className="font-medium text-grey-600 hover:text-blue-900 space-x-3">Home</a><Arrowdown/>
            <a  href= "Phone" className="font-medium text-grey-600 hover:text-blue-900">Service<Arrowdown/></a>
            <a href= "Sec" className="font-medium text-grey-600 hover:text-blue-900">Shop<Arrowdown/></a>
            <a href= "Table" className="font-medium text-grey-600 hover:text-blue-900">Pages<Arrowdown/></a>
            <a href= "Hero" className="font-medium text-grey-600 hover:text-blue-900">News<Arrowdown/></a>
            <a href= "Hero" className="font-medium text-grey-600 hover:text-blue-900">Gallery<Arrowdown/></a>
            <a href= "Hero" className="font-medium text-grey-600 hover:text-blue-900">Contact Us<Arrowdown/></a>
             </nav>
             <navsvg className="space-x-5 flex px-10">
              <a href="#" className="font-medium text-grey-600 hover:text-blue-900"> <Loginsvg/> </a>
              <a href="#" className="font-medium text-grey-600 hover:text-blue-900"> <Heartsvg/> </a>
              <a href="#" className="font-medium text-grey-600 hover:text-blue-900"> <Cartsvg/> </a>
              <a href="#" className="font-medium text-grey-600 hover:text-blue-900"><Searchsvg/></a>
             </navsvg>
          </div>
        </div>
        </div>
        
        
    )
};


export default Navbar;