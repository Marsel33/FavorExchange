import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getAvatar } from "../../Redux/actions/profileAction";

const EditPorofile = ({name, description}) => {



  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const inputRef = useRef(null);

  const dispatch = useDispatch()
  const [imgUser, setImgUser] = useState({ img: '', name: '', description: '' });

  const imgHandler = (e) => {
    let imgUrl = inputRef.current.files[0];
    console.log('------------>', inputRef.current.files[0])
    console.log(imgUrl)
    if (imgUrl) {
      const img = URL.createObjectURL(imgUrl);
      console.log('img-------------__>', img)
      setImgUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
  }

  console.log(imgUser)


  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(getAvatar(imgUser));
  }
  return (
    <>

      <>

        <Button type="primary" onClick={showModal}>
          редактировать профиль
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

          <form onSubmit={submitHandler}>

            <input type='file' name="img" ref={inputRef} onChange={imgHandler} />
            <input type='text' name="name" placeholder="name" onChange={imgHandler} value={name} />
            <input type='text' name="description" placeholder="description" onChange={imgHandler} value={description} />

          </form>
        </Modal>
      </>

    </>
  )
}


export default EditPorofile;
