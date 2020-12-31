import React from "react";
import {
   HomeOutlined,
   CloudOutlined,
   UserOutlined
} from '@ant-design/icons'

import './layout-nav.less'
import CustomMenuItem from "@/components/cutom-menuItem";

const LayoutNav:React.FC = () => {

  return (
    <div className='layout-header-nav flex' >
      <CustomMenuItem url='/index' icon={()=><HomeOutlined/>}>Home</CustomMenuItem>
      <CustomMenuItem url='/find' icon={()=><CloudOutlined/>}>Find</CustomMenuItem>
      <CustomMenuItem url='/about' icon={()=><UserOutlined/>}>About</CustomMenuItem>
    </div>
  )
}

export default LayoutNav
