import { useDispatch, useSelector } from "react-redux";
import { Input, Form, Button, Select } from 'antd';
import { useState } from 'react';
import { getCat } from "../../Redux/actions/userCatAction";
import { Option } from "antd/lib/mentions";







const UserCat = () => {

  const dispatch = useDispatch();

  const [inputValue, setDropInput] = useState({});
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
          onSubmit={submitHandler}
        >
          <Form.Item>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
            </Select>
          </Form.Item>
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
