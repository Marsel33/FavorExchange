import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import { BellOutlined, BellTwoTone } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;


const HomePage = () => {
  return (
    <Layout className="layout">

      <Content style={{ padding: '0 30px' }}>
        {/*<Breadcrumb style={{ margin: '20px 0' }}>*/}
        {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
        {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
        {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
        {/*</Breadcrumb>*/}

        <div className="site-layout-content" style={{ padding: '20px 0 0 0' }}><img src='https://cs8.pikabu.ru/post_img/2016/02/19/12/og_og_1455914844272938586.jpg' /></div>

      </Content>





      <Footer style={{ textAlign: 'center' }}>Favor_Exchange ©2022 Created by a group of united thinkers </Footer>
    </Layout>
  );
};

export default HomePage;
