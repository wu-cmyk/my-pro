import React from 'react'
import {Card, Col, Row} from "antd";
import {HistoryOutlined, UserOutlined,MessageOutlined} from "@ant-design/icons";
import './index.less'


interface CardContentItemProps {
    userName: string
    date: string
    commentNum: number | string,
    headImg: string
    title: string
    description: string
}


const CardContentItem:React.FC<CardContentItemProps> = (props) =>{
  const {date,commentNum,userName,headImg,title,description} = props
  return (
    <Row className='mt-16'>
      <Col span={24}>
        <Card title={
          (
            <div className='title-content flex'>
              <div className='title-content-head-img'>
                <img src={headImg} alt='头像' />
              </div>
              <div className='title-content-right'>
                <div className='title-content-title'>{title}</div>
                <div className='title-content-describe'>
                  {description}
                </div>
              </div>
            </div>
          )
        }>
          <div className='flex'>
            <div className='user'>
              <UserOutlined />
              <span className='ml-6'>{userName}</span>
            </div>
            <div className='date ml-16'>
              <HistoryOutlined />
              <span className='ml-6'>{date}</span>
            </div>
            <div className='comment ml-16'>
              <MessageOutlined />
              <span className='ml-6'>评论：{commentNum}</span>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default CardContentItem
