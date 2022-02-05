import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Input, Row, Form, Button } from 'antd';
import { useState } from 'react';
import { getCat } from "../../Redux/actions/userCatAction";




const UserCat = () => {

  const dispatch = useDispatch();

  const [inputValue, setDropInput] = useState('');
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(prev => !prev)
  }

  const inputHendler = (e) => {
    setDropInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getCat(inputValue))
  }

  console.log(inputValue)




  return (
    <>

      {click ?
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onSubmitCapture={submitHandler}
        >
          <Form.Item
            label="title"
            name="title"
            rules={[{ required: true, message: 'Please input your title!' }]}
          >
            <Input
              name="title"
              style={{ width: '200px' }}
              onChange={inputHendler} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="submit" htmlType="submit">
              добавить
            </Button>
          </Form.Item>
        </Form>

        : <Button onClick={clickHandler}>добавить категорию</Button>}



    </>
  )
}

export default UserCat;
