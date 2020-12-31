import React from 'react'
import LayoutHeader from "@/pages/layout/layout-header";
import LayoutFooter from "@/pages/layout/layout-footer";
import {ConfigProvider} from "antd";
import zhCN from 'antd/es/locale/zh_CN'
import './index.less'

const Layout:React.FC = (props) =>{
  return (
     <ConfigProvider locale={zhCN}>
       <div className='layout'>
         <div className='layout-header'>
           <LayoutHeader/>
         </div>
         <div className='layout-content'>
           { props.children}
         </div>
         <div className='layout-footer'>
           <LayoutFooter/>
         </div>
       </div>
     </ConfigProvider>
  )
}


export  default Layout;
