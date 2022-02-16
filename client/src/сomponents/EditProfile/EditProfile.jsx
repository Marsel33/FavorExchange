import {Input} from "antd";
import Modal from "antd/lib/modal/Modal";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAvatar} from "../../Redux/actions/profileAction";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from '../../firebase';

const EditPorofile = ({id}) => {
    const user = useSelector(state => state.user)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const dispatch = useDispatch()
    const [image, setImage] = useState(null)
    const [inputs, setInputs] = useState({description: '', name: '', img: ''});

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = (e) => {
        e.preventDefault()
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
                        setInputs(prev => ({...prev, img: url}))
                        dispatch(getAvatar({...inputs, img: url}, id));
                    })
            }
        )

    }

    const imgHandler = (e) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }


    return (
        <>
            {Number(user?.id) === Number(id) ? <button className='btn' type="primary" onClick={showModal}>
                редактировать профиль
            </button> : ''}

            <Modal className="ant-modal-content" title="Редактировать профиль" visible={isModalVisible}
                   onOk={handleUpload} onCancel={handleCancel}>
                <Input className="ant-input" type='file' name="img" onChange={handleChange}/>
                <Input className="ant-input" type='text' name="name" placeholder="name" onChange={imgHandler}/>
                <Input className="ant-input" type='text' name="description" placeholder="description"
                       onChange={imgHandler}/>
            </Modal>
        </>
    )
}


export default EditPorofile;
