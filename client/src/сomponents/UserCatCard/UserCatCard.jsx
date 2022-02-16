import {Card} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {allTags, dellTag} from "../../Redux/actions/userTagsAction";


const UserCatcard = ({tagId, title}) => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const user = useSelector(state => state.user)
    const dellTagHandelr = (e) => {

        dispatch(dellTag(e.target.id))
        dispatch(allTags(id))
    }


    return (


        <Card style={{width: '100%'}}>
            <p> {title}</p>
            {Number(user?.id) === Number(id) ? <button className='btn' id={tagId} onClick={dellTagHandelr}>удалить</button> : ''}

        </Card>
    )
}


export default UserCatcard;

