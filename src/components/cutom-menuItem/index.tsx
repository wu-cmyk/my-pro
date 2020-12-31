import React from "react";
import {history} from "@@/core/history";
import './index.less';

interface MenuItemProps{
  icon?:()=>React.ReactNode
  url?:string
  className?:string
}
const CustomMenuItem:React.FC<MenuItemProps> = (props) =>{
  const { url } = props;
  const currentUrl = history.location.pathname;
  const isActive = currentUrl.includes(url!)? 'active' : ''
  const toPath = () => {
    if(url) history.push(url)
  }
  return (
    <div className={`${isActive} ${props.className || ''} menu-item flex`} onClick={toPath}>
      <div className='menu-item-icon'>
        {props.icon?.()}
      </div>
      <div className='menu-item-content flex-1'>
        {props.children}
      </div>
    </div>
  )
}

export default CustomMenuItem
