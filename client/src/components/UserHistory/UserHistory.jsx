import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import CardTasck from "../CardTasck/CardTasck";
// import CardTasck from "./CardTasck/CardTasck";

const UserHistory = () => {
  const size = 'large'
  return (
    <>
       <Button type="primary" icon={<DownloadOutlined />} size={size}>
          название таски которую ты завершил
        </Button>

        < CardTasck />
    </>
  )
}


export default UserHistory;
