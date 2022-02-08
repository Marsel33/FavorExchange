import React, {useState} from "react"
import { Form, Input, Button, Checkbox, Row, Col } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import {useDispatch} from "react-redux";
import {signUpUser} from "../../Redux/actions/userAction";

const SigIn = () => {

  const [inputs, setInputs] = useState({email:'', password:''});
  const dispatch = useDispatch();


  const inputsHandler = (e) => {

    setInputs( prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const onFinish = (values) => {
    dispatch(signUpUser(inputs))
    console.log("Received values of form: ", values)

  }


  const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>

  return (
    <Row justify="space-between">
      <Col span={8} offset={8}>
        <DemoBox value={50} />
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
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />}
                   placeholder="E-mail"
                   id='email'
                   type='email'
                   name='email'
                   value={inputs.name}
                   onChange={inputsHandler}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              id='password'
              type='password'
              name='password'
              value={inputs.password}
              onChange={inputsHandler}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to="/signup">register now!</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default SigIn
