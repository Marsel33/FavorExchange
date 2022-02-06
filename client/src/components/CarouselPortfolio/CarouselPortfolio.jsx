
import { Carousel } from 'antd';
import { Row, Col } from 'antd';

const CarouselPortfolio = () => {

  // const test = <img style={{ height: '400px', width: '400px' }} src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />

const userPortfolio = [
  {img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'},
  {img: 'https://assets.gq.ru/photos/5d9f42af3a54c0000840d313/16:9/w_2560%2Cc_limit/01.jpg'},

]
  return (
    <>
      <Row>
        <Col sm={8} offset={2} >
          <Carousel autoplay>
            {userPortfolio.map(el => 
            <div>
              <h3 > <img src={el.img} style={{ height: '400px', width: '400px' }}/></h3>
            </div>
              
              )}
           

          </Carousel>,
        </Col>
        {/* <Col sm={8}>
          <h1>who ds f fdsgt tg egergerg ergreg tger reg egerg erg ergrge</h1>
          <h1>who ds f fdsgt tg egergerg ergreg tger reg egerg erg ergrge</h1>
          <h1>who ds f fdsgt tg egergerg ergreg tger reg egerg erg ergrge</h1>
          <h1>who ds f fdsgt tg egergerg ergreg tger reg egerg erg ergrge</h1>

        </Col> */}

      </Row>
    </>


  )
}

export default CarouselPortfolio
