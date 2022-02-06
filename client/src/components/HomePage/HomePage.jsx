import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import { BellOutlined, BellTwoTone } from "@ant-design/icons";
import ParalaxBoxOne from '../Paralax/ParalaxBoxOne'
import ParalaxBoxTwo from '../Paralax/ParalaxBoxTwo'
import ParalaxBoxThree from '../Paralax/ParalaxBoxThree'
import Text from '../Paralax/Text/Text'

const { Header, Content, Footer } = Layout;


const HomePage = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 30px' }}>
          <ParalaxBoxOne/>
          <Text/>
          <ParalaxBoxTwo/>
          <Text/>
          <ParalaxBoxThree/>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Favor_Exchange ©2022 Created by a group of united thinkers </Footer>
    </Layout>
  );
};

export default HomePage;
