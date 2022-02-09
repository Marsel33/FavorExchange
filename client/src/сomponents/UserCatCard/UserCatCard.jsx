import { ControlOutlined } from "@ant-design/icons";
import style from './CardStyle.css'
const UserCatcard = ({ title }) => {
  return (
      <p className={'wrapper-p'}>
        {title}
      </p>
  )
}

// style={{display:'flex', flexDirection: 'column'}}


export default UserCatcard;

