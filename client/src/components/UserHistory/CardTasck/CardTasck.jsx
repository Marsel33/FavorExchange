import { Card, Avatar } from 'antd';

const { Meta } = Card;



const CardTasck = () => {
  return (
    <>
    все это дело будет подтягиваться с базы 
      <Card
        style={{ width: 700 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="название таски"
          description="описание работы которую ты сделал"
        />
      </Card>,
    </>
  )
}


export default CardTasck;
