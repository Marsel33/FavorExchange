import React from 'react';
import { Layout } from 'antd';
import Text from '../Paralax/Text/Text'
import ParalaxBoxOne from "../Paralax/ParalaxBoxOne/ParalaxBoxOne";
import ParalaxBoxTwo from "../Paralax/ParalaxBoxTwo/ParalaxBoxTwo";
import ParalaxBoxThree from "../Paralax/ParalaxBoxThree/ParalaxBoxThree";
import {Footer} from "antd/es/layout/layout";
const { Content} = Layout;


const HomePage = () => {
  return (
    <Layout className='layout'>
      <Content style={{ padding: '0 10px' }}>
          <Text/>
          <ParalaxBoxOne/>
          <Text/>
          <ParalaxBoxTwo/>
          <Text/>
          <ParalaxBoxThree/>
      </Content>

    </Layout>
  );
};

export default HomePage;
