import React from "react";
import CalendarComponent from "@/pages/home/Calendar";
import './index.less'
import defaultImg from '@/assets/img4.jpg'



const HomePage:React.FC = () => {
  return (
    <div>
      <div>
        <img src={defaultImg} />
      </div>
      <div className='calendar-card'>
        <CalendarComponent/>
      </div>
    </div>
  )
}

export  default HomePage
