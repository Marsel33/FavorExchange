
import { Carousel } from 'antd';
import { Row, Col } from 'antd';

const CarouselPortfolio = () => {

  const test = <img style={{ height: '400px', width: '400px' }} src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />


  return (
    <>
      <Row>
        <Col sm={8} offset={4} >
          <Carousel autoplay>
            <div>
              <h3 >{test}</h3>
            </div>
            <div>
              <h3 >{test}</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>

          </Carousel>,
        </Col>
        <Col sm={8}>
          <h1>who ds f fdsgt tg egergerg ergreg tger reg egerg erg ergrge</h1>
          <h1>who ds f fdsgt tg egergerg ergreg tger reg egerg erg ergrge</h1>
          <h1>who ds f fdsgt tg egergerg ergreg tger reg egerg erg ergrge</h1>
          <h1>who ds f fdsgt tg egergerg ergreg tger reg egerg erg ergrge</h1>

        </Col>

      </Row>
    </>


  )
}

export default CarouselPortfolio
