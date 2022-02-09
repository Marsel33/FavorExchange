import {useNavigate} from 'react-router-dom'
import React, { useState} from "react"
import {
  Form,
  Input,
  Row,
  Col,
  Button,
} from "antd"
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../Redux/actions/userAction";
import CreateModalForm from "../CreateModalForm/CreateModalForm";
import {thunkUserRegisterAction} from "../../Redux/actions/thunkActions/userActions/thunkUserRegisterAction";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

const SigUp = () => {
  const [inputs, setInputs] = useState({name: '', email:'', password:''})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(false);

  const user = useSelector(state => state.user )
  const [isModalActive, setIsModalActive] = useState(false)

  const onFinish = (values) => {
    dispatch(thunkUserRegisterAction(inputs))
    setInputs({name: '', email:'', password:''})
    setVisible(true)
  }

  const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>

  const inputHandler = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <>
      <Row>
        <Col span={10} offset={6}>
          <DemoBox value={50} />
          {user ? <CreateModalForm visible={visible} setVisible={setVisible} user={user}/> : <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
                prefix: "86",
              }}
              scrollToFirstError
          >
            <Form.Item
                name="name"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true,
                  },
                ]}
            >
              <Input
                  id='name'
                  type='text'
                  name='name'
                  onChange={inputHandler}
                  value={inputs.name}
              />
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
            >
              <Input
                  id='email'
                  type='email'
                  name='email'
                  onChange={inputHandler}
                  value={inputs.email}
              />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
            >
              <Input.Password
                  id='password'
                  type='password'
                  name='password'
                  onChange={inputHandler}
                  value={inputs.password}
              />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>}
        </Col>
      </Row>
    </>
  )
}

export default SigUp;
