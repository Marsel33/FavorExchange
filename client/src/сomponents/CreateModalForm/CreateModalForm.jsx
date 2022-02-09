import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import { Modal, Button, Input } from "antd";
import {UserOutlined, HomeOutlined, EditOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {thunkModalFormAction} from "../../Redux/actions/thunkActions/profileActions/thunkModalFormAction";



const { TextArea } = Input;

const CreateModalForm = ({visible, setVisible}) => {
    const navigate = useNavigate()
    const [adress, setAdress] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
useEffect(()=>{
    console.log(user)
}, user)

    function nameHandler(e) {
        e.preventDefault()
        setName(e.target.value)
    }
    function adressHandler(e) {
        e.preventDefault()
        setAdress(e.target.value)
    }
    function descriptionHandler(e) {
        e.preventDefault()
        setDescription(e.target.value)
    }
    return (
        <>
            <Modal
                title="Fill in the data about the service provided and yourself."
                centered
                visible={visible}
                onOk={() => {
                    setAdress(adress)
                    setName(name)
                    setDescription(description)
                    console.log(adress, name, description)
                    dispatch(thunkModalFormAction({adress, name, description, id: user.id}))
                    setVisible(false)
                    navigate(`/user/${user.id}`) // доделать параметризированный запрос
                }}
                onCancel={() => {
                    setVisible(false)
                    navigate('/') // смотри выше тут надо доделать
                }}
                width={1000}
            >
                <p>
                    <Input
                        onChange={adressHandler}
                        value={adress}
                        placeholder="Service delivery address" prefix={<HomeOutlined/>}/>
                </p>

                <p>
                    <Input
                        onChange={nameHandler}
                        value={name}
                        placeholder="Name" prefix={<UserOutlined />}/>
                </p>

                <p>
                    <Input
                        size="large"
                        onChange={descriptionHandler}
                        value={description}
                        placeholder="Description" prefix={<EditOutlined />}
                    />
                </p>
            </Modal>
        </>
);
};

export default CreateModalForm;

