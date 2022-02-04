import React from 'react';

import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import {BellOutlined, BellTwoTone} from "@ant-design/icons";
import Paralax from "../Paralax/Paralax";

const { Header, Content, Footer } = Layout;


const HomePage = () => {
    return (
        <Row gutter={24} >
            <Col span={24}>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <div>
                                SigIn
                            </div>
                            <div style={{margin: '0 10px'}}>
                                SigUp
                            </div>
                            <div>
                                <BellOutlined />
                            </div>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 30px' }}>
                        {/*<Breadcrumb style={{ margin: '20px 0' }}>*/}
                        {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                        {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                        {/*</Breadcrumb>*/}

                        <div className="site-layout-content" style={{padding: '20px 0 0 0'}}> <Paralax/> </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Favor_Exchange ©2022 Created by a group of united thinkers </Footer>
                </Layout>
            </Col>
        </Row>

    );
};

export default HomePage;
