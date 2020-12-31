import React from "react";
import './index.less'
import LayoutNav from "@/pages/layout/layout-header/component/layout-nav";

const LayoutHeader:React.FC = () => {
  return (
    <div className='layout-header'>
      <div className='layout-header-content flex'>
         <div className='layout-header-logo'>
           <div className='logo-img'>
             {/* <img src={Logo} alt=''/> */}
             <span className='name'>Logo</span>
           </div>
         </div>
        <div className='ml'>
          <LayoutNav/>
        </div>
      </div>
    </div>
  )
}

export default LayoutHeader
