import React from 'react';

import { LoginIcon, ChevronDownIcon,HeartIcon ,ShoppingCartIcon, SearchIcon} from "@heroicons/react/outline"




const Navbar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 ">
      <div className="max-w-7x1 mx-auto ">
        <div className="flex justify-between items-center py-5 px-10">
          <div className="flex flex-1">
            <img src={'https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/06/logo.svg'} alt={'top'} className="w-90 " />
          </div>


          <nav className="space-x-10  flex ">
            <a href="Hero" className="font-medium flex items-center text-grey-600 hover:text-blue-900">
              <span>Home</span>
              < ChevronDownIcon className="h-4 w-4 text-slate-900 hover:text-blue-900" />
            </a>
            <a href="Phone" className="font-medium flex items-center text-grey-600 hover:text-blue-900">
              <span>Service</span>
              <ChevronDownIcon className="h-4 w-4 text-slate-900 hover:text-blue-900" />
              </a>
            <a href="Sec" className="font-medium flex items-center  text-grey-600 hover:text-blue-900">
              <span>Shop</span>
              <ChevronDownIcon className="h-4 w-4 text-slate-900 hover:text-blue-900"  />
              </a>
            <a href="Table" className="font-medium flex items-center  text-grey-600 hover:text-blue-900">
              <span>Pages</span>
              <ChevronDownIcon className="h-4 w-4 text-slate-900 hover:text-blue-900"  />
              </a>
            <a href="Hero" className="font-medium flex items-center  text-grey-600 hover:text-blue-900">
              <span>News</span>
              <ChevronDownIcon className="h-4 w-4 text-slate-900 hover:text-blue-900"  />
              </a>
            <a href="Hero" className="font-medium flex items-center  text-grey-600 hover:text-blue-900">
              <span>Gallery</span>
              <ChevronDownIcon className="h-4 w-4 text-slate-900 hover:text-blue-900"  /></a>
            <a href="Hero" className="font-medium flex items-center  text-grey-600 hover:text-blue-900">
              <span>Contact Us</span>
              <ChevronDownIcon className="h-4 w-4 text-slate-900 hover:text-blue-900"  /></a>
          </nav>
          <navsvg className="space-x-5 flex px-10">
            <a href="#" className="font-medium text-grey-600 relative hover:text-blue-900">
              <LoginIcon className="h-6 w-6 text-slate-900 hover:text-blue-900" />
            </a>
            <a href="#" className="font-medium text-grey-600 relative hover:text-blue-900">
               <HeartIcon className="h-6 w-6 text-slate-900 hover:text-blue-900" /> 
               <div className=" absolute text-[8px] bg-blue-600 text-white p-1 -top-2 rounded-full -right-2">
                 10
               </div>
               </a>
            <a href="#" className="font-medium text-grey-600 relative hover:text-blue-900">
              <ShoppingCartIcon className="h-6 w-6 text-slate-900 hover:text-blue-900"  /> 
              <div className="absolute text-[10px] p-1 text-white -top-2 rounded-full -right-2 bg-blue-600">
                0
              </div>
              </a>
            <a href="#" className="font-medium text-grey-600 hover:text-blue-900">
              <SearchIcon className="h-6 w-6 text-slate-900 hover:text-blue-900"  />
              </a>
          </navsvg>
        </div>
      </div>
    </div>


  )
};


export default Navbar;