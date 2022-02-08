import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Button, Input } from "antd";
import { UserOutlined, HomeOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";



const { TextArea } = Input;

const CreateModalForm = ({visible, setVisible, user}) => {
    const navigate = useNavigate()
    return (
        <>
            <Modal
                title="Fill in the data about the service provided and yourself."
                centered
                visible={visible}
                onOk={() => {
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
                    <Input placeholder="Service delivery address" prefix={<HomeOutlined/>}/>
                </p>

                <p>
                    <Input placeholder="Name" prefix={<UserOutlined />}/>
                </p>

                <p>
                    <TextArea rows={4} placeholder="Описание" />
                </p>
            </Modal>
        </>
);
};

export default CreateModalForm;

