import { List, Avatar, Space } from 'antd';
import React from 'react';
import { Footer } from 'antd/lib/layout/layout';
import { listData } from '../../listData'



const ActivCardTasck = () => {

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        style={{width:'400', height: '500px'}}
       
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 1,
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
        footer={
          <Footer style={{ textAlign: 'center' }}>Favor_Exchange ©2022 Created by a group of united thinkers </Footer>
        }
      />,
    </>
  )
}


export default ActivCardTasck;
