import { ControlOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { allTags, dellTag } from "../../Redux/actions/userTagsAction";
import style from './CardStyle.css'


const UserCatcard = ({ tagId, title }) => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const dellTagHandelr = (e) => {

    dispatch(dellTag(e.target.id))
    dispatch(allTags(id))
  }



  return (


    <Card  style={{ width: 300 }}>
      <p> {title}</p>
      <button id={tagId} onClick={dellTagHandelr}>удалить тег</button>

    </Card>
  )
}



export default UserCatcard;

