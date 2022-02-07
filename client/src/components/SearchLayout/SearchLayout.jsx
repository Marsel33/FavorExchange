import { ContainerFilled } from '@ant-design/icons';
import {Row, Col, Slider, Typography, Container } from 'antd'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { allProfiles } from '../../Redux/actions/profileAction';
// import SearchCategory from '../SearchCategory/SearchCategory';
import SearchCategory from '../SearchCategory/SearchCategory'
import SearchMap from '../SearchMap/SearchMap';
import { MapCollectionTest } from '../SearchMap/MapCollectionTest';
import { TestMap } from '../SearchMap/TestMap';




const SearchLayout = () => {

  const [rows, setRows ] = useState(5)  
  
    return (
      

        <Row>
            <Col xs={24} md={{ span:12, offset:6 }}>
                <Typography.Title level={4}>Количество пользователей на странице</Typography.Title>
                <Slider min={1} max={10} defaultValue={rows} onChange={setRows}/>
                <SearchCategory rows={rows}/>
            </Col>

            <Col >
              {/* <SearchMap /> */}
              < MapCollectionTest />
              {/* <TestMap /> */}
            </Col>
        </Row>

        
    )
}

export default SearchLayout
