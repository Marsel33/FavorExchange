import { useDispatch, useSelector } from "react-redux";
import { Input, Form, Button, Select, Row } from 'antd';
import { useState } from 'react';
import { allCat, getCat } from "../../Redux/actions/userCatAction";
import { Option } from "antd/lib/mentions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserCatcard from "../UserCatCard/UserCatCard";
import { allTags } from "../../Redux/actions/userTagsAction";
import style from './style.css'

const UserCat = () => {

  const allUserTags = useSelector(state => state.userTags)
  const allcat = useSelector(state => state.userCat)

  const dispatch = useDispatch();
  const { id } = useParams();

  const [inputValue, setInputValue] = useState({ title: '', catId: '' });
  const [click, setClick] = useState(false);

  const selectHandler = (value) => {
    setInputValue(prev => ({ ...prev, catId: value }))
  }

  const clickHandler = () => {
    setClick(prev => !prev)
  }

  const inputHendler = (e) => {
    setInputValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitHandler = (e) => {
    console.log('12345');
    e.preventDefault();
    dispatch(getCat(inputValue, id))


    console.log(inputValue)
  }

  useEffect(() => {
    dispatch(allCat())
  }, [])


  useEffect(() => {
    dispatch(allTags(id))

  }, [])

  return (
    <>
      {click ?
        <form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}

        >
          <Form.Item>
            <Select
              onChange={selectHandler}
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }

            >
              {allcat.map(el =>
                <Option name='catId' value={el.id}>{el.title}</Option>
              )}
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


          <Button className="ant-btn-primary" type="primary" onClick={submitHandler}>
            добавить
          </Button>


          <Button className="ant-btn-primary" type="primary" onClick={clickHandler}>
            отмена
          </Button>
        </form>

        :
        <Button  type="primary" onClick={clickHandler}>добавить категорию</Button>}
      <div>

        {allUserTags.map(el =>
          < UserCatcard key={el.id} title={el.title} />
        )}
      </div>

    </>
  )
}




export default UserCat;
