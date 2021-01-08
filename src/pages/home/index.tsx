import React from "react";
// import CalendarComponent from "@/pages/home/Calendar";
import './index.less';
import CardContentItem from "@/pages/home/component/card-content-item";

const mockData=[
  {
    title:'标题文字标题文字',
    description:'描述文字描述文字描述文字描述文字描述文字描述文字',
    commentNum:0,
    date:'2020年03月21日',
    userName:'Jack'
  },
  {
    title:'标题文字标题文字',
    description:'描述文字描述文字描述文字描述文字描述文字描述文字',
    commentNum:0,
    date:'2020年03月21日',
    userName:'Jack'
  },
  {
    title:'标题文字标题文字',
    description:'描述文字描述文字描述文字描述文字描述文字描述文字',
    commentNum:0,
    date:'2020年03月21日',
    userName:'Jack'
  },
  {
    title:'标题文字标题文字',
    description:'描述文字描述文字描述文字描述文字描述文字描述文字',
    commentNum:0,
    date:'2020年03月21日',
    userName:'Jack'
  }
]

const contentElement = mockData?.map(item=>{
  return <CardContentItem
           title={item.title}
           userName={item.userName}
           date={item.date}
           description={item.description}
           commentNum={item.commentNum}
           headImg={''}
         />
})

const HomePage:React.FC = () => {
  return (
    <div>
      { contentElement }
    </div>
  )
}

export default HomePage
