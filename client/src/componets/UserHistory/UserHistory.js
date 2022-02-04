import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

const UserHistory = () => {
  const size = 'large'
  return (
    <>
       <Button type="primary" icon={<DownloadOutlined />} size={size}>
          название таски которую ты завершил
        </Button>
    </>
  )
}


export default UserHistory;
