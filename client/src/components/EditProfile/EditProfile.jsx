import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAvatar } from "../../Redux/actions/profileAction";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase';



const EditPorofile = ({ id }) => {

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

  const dispatch = useDispatch()
  const [image, setImage] = useState(null)
  const [imgUser, setImgUser] = useState({ description: '', name: '', img: '' });

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleUpload = () => {
    console.log('handleUpload')
    const storageRef = ref(storage, `/images/${image.name}`)
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        console.log('snapshot')
      },
      error => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(url => {
            setImgUser(prev => ({ ...prev, img: url }))
          })
      }
    )

  }

  const imgHandler = (e) => {
    setImgUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const submitHandler = () => {
    dispatch(getAvatar(imgUser, id));
  }

  return (
    <>
      <>
        <Button type="primary" onClick={showModal}>
          редактировать профиль
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <input type='file' name="img"  onChange={handleChange} />
          <input type='text' name="name" placeholder="name" onChange={imgHandler} />
          <input type='text' name="description" placeholder="description" onChange={imgHandler} />
          <button onClick={handleUpload}>go</button>
          <button onClick={submitHandler}>править</button>
        </Modal>
      </>
    </>
  )
}


export default EditPorofile;
