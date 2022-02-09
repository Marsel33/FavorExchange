
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { allProfile } from '../../Redux/actions/portfolioAction';
import ActivCardTasck from '../ActivCardTusk/ActivCardTusk';
import CardTasck from '../CardTasck/CardTasck';
import NewPortfoliio from '../NewPortfolio/NewPortfolio';

const CarouselPortfolio = ({ id }) => {

  const dispatch = useDispatch()
  const userPortfolio = useSelector(state => state.portfolio)

  console.log(userPortfolio)
  useEffect(() => {

    dispatch(allProfile(id))
  }, [])

  return (
    <>
        <Col sm={12} >
        < NewPortfoliio />

          <Carousel autoplay>
            {userPortfolio.map(el =>

              <div>
                <img src={el.img} style={{ height: '400px', width: '400px' }} />
              </div>

            )}
          </Carousel>,
        </Col>
        <Col sm={12}>
          < ActivCardTasck />
        </Col>

    </>


  )
}

export default CarouselPortfolio
