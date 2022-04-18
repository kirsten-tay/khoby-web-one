import React from 'react'


const Footer= ()=> {
return(
    <div>
 
      <div className="bg-slate-600 p-10">
      <div className="grid grid-col-1 gab-6  max-w-9xl mx-auto space-x-7 p-5 lg:grid-cols-3 gab-6 ">
           
      <div className="flex flex-1">
            <img src={'https://pathsoft.kovalweb.com/full/wp-content/uploads/2021/06/logo.svg'} alt={'top'} className="w-90 " />
          </div>

           <div className="col-1">
            <span>Menu 1</span>
            <span>About Us</span>
           </div>
         </div>
      </div>
    </div>
)

}

export default Footer;