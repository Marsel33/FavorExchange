import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { Footer } from 'antd/lib/layout/layout';
import { listData } from '../../listData'



const CardTasck = () => {




  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        footer={
          <Footer style={{ textAlign: 'center' }}>Favor_Exchange ©2022 Created by a group of united thinkers </Footer>
        }
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        renderItem={item => (
          <List.Item

            extra={
              <img
                width={272}
                alt="logo"
                src="https://st2.depositphotos.com/3230977/7864/i/950/depositphotos_78649008-stock-photo-close-up-photos-showing-process.jpg"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />,
    </>
  )
}


export default CardTasck;
