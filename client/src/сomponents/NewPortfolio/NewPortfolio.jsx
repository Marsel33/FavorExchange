import { Button, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPortfolio } from "../../Redux/actions/portfolioAction";
import { storage } from "../../firebase";

const NewPortfoliio = () => {

  const {id} = useParams();
  console.log(id)
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [image, setImage] = useState(null)
  const user = useSelector(state => state.user)


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }


  const handleUpload = () => {
    console.log('handleUpload')
    const storageRef = ref(storage, `/imagesPortfolio/${image.name}`)
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
            dispatch(getPortfolio(url, id))
            setIsModalVisible(false)
          })
      }
    )

  }


  
  
  return (
    <>
    {user ? <Button type="primary" onClick={showModal}>
          добавить фото в портфолио
        </Button> : ''}
      
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleUpload} onCancel={handleCancel}>
          <Input type='file' name="img" onChange={handleChange} />
        </Modal>
    </>
  )
}

export default NewPortfoliio;
