import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Input, Select} from 'antd';
import {useEffect, useState} from 'react';
import {allCat, getCat} from "../../Redux/actions/userCatAction";
import {Option} from "antd/lib/mentions";
import {useParams} from "react-router-dom";
import UserCatcard from "../UserCatCard/UserCatCard";
import {allTags} from "../../Redux/actions/userTagsAction";

const UserCat = () => {
    const user = useSelector(state => state.user)

    const allUserTags = useSelector(state => state.userTags)
    const allcat = useSelector(state => state.userCat)
    console.log('_-----------------> allcat', allcat)
    const dispatch = useDispatch();
    const {id} = useParams();

    const [inputValue, setInputValue] = useState({title: '', catId: ''});
    const [click, setClick] = useState(false);

    const selectHandler = (value) => {
        setInputValue(prev => ({...prev, catId: value}))
    }

    const clickHandler = () => {
        setClick(prev => !prev)
    }

    const inputHendler = (e) => {
        setInputValue(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const submitHandler = (e) => {
        console.log('12345');
        e.preventDefault();
        dispatch(getCat(inputValue, id))
        setClick(false)

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
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    className="formCat"
                >
                    <Form.Item>
                        <Select
                            onChange={selectHandler}
                            showSearch
                            placeholder="Добавить категорию"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            style={{width: 200}}
                        >
                            {allcat.map(el =>
                                <Option name='catId' value={el.id}>{el.title}</Option>
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Мои навыки"
                        name="title"
                        rules={[{required: true, message: 'Please input your title!'}]}
                    >
                        <Input
                            name="title"
                            style={{width: '200px'}}
                            onChange={inputHendler}/>
                    </Form.Item>

                    <div style={{dispaly: 'flex'}}>

                        <Button className="ant-btn-primary" type="primary" onClick={submitHandler}>
                            Разместить
                        </Button>


                        <Button className="ant-btn-primary" type="primary" onClick={clickHandler}>
                            закрыть
                        </Button>
                    </div>
                </form>

                :
                <Button type="primary" onClick={clickHandler}>Я профи в ...</Button>}

            <div>

                {allUserTags.map(el =>
                    < UserCatcard key={el.id} title={el.title} tagId={el.id}/>
                )}
            </div>

        </>
    )
}


export default UserCat;
