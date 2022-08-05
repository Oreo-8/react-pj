import { Outlet, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Footer } = Layout;

export default function User() {
    const navigate = useNavigate();

    const click = ({ item, key, keyPath, domEvent }) => {
        if (key !== "1") {
            navigate("tab", { replace: true })
        }
    }
    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"

                        defaultSelectedKeys={['1']}
                        items={new Array(3).fill(null).map((_, index) => ({
                            key: String(index + 1),
                            label: `nav ${index + 1}`,
                        }))}

                        onSelect={click}

                    />
                </Header>
                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                        marginTop: 64,
                    }}
                >
                    <Outlet />
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>

        </>
    )
}