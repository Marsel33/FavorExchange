import React from 'react';
import {Layout} from 'antd';
import Text from '../Paralax/Text/Text'
import ParalaxBoxOne from "../Paralax/ParalaxBoxOne/ParalaxBoxOne";
import ParalaxBoxTwo from "../Paralax/ParalaxBoxTwo/ParalaxBoxTwo";
import ParalaxBoxThree from "../Paralax/ParalaxBoxThree/ParalaxBoxThree";
import Text2 from "../Paralax/Text/Text2";

const { Content} = Layout;


const HomePage = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '0 30px' }}>
          <Text/>
          <ParalaxBoxOne/>
          <Text2/>

          <ParalaxBoxTwo/>
          <ParalaxBoxThree/>
      </Content>
    </Layout>
  );
};

export default HomePage;
