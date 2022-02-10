import {Card} from "antd";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {allTags, dellTag} from "../../Redux/actions/userTagsAction";


const UserCatcard = ({tagId, title}) => {
    const dispatch = useDispatch()
    const {id} = useParams()

    const dellTagHandelr = (e) => {

        dispatch(dellTag(e.target.id))
        dispatch(allTags(id))
    }


    return (


        <Card style={{width: 300}}>
            <p> {title}</p>
            <button id={tagId} onClick={dellTagHandelr}>удалить</button>

        </Card>
    )
}


export default UserCatcard;

