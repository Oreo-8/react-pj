
import "./style/index.scss"
import { Tabs } from 'antd';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

export default function LoginForm(props) {

    let { onFinish } = props

    return (
        <Card className="form-card"
            style={{
                width: 430,
            }}
        >

            <Tabs defaultActiveKey="1" >
                <TabPane tab="登录" key="1">

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>

                        </Form.Item>
                    </Form>
                </TabPane>
            </Tabs>

        </Card>
    )
}