import {Row, Col, Slider, Typography } from 'antd'
import { useState } from "react";
import SearchCategory from '../SearchCategory/SearchCategory'
import { MapCollectionTest } from '../SearchMap/MapCollectionTest';




const SearchLayout = () => {

  const [rows, setRows ] = useState(5)   
  
    return (
      

        <Row xs={24} md={{ span:12, offset:6 }} style={{'margin': '30px'}}>
            <Col >
                <Typography.Title level={4}>Количество пользователей на странице</Typography.Title>
                <Slider min={1} max={10} defaultValue={rows} onChange={setRows}/>
                <SearchCategory rows={rows}/>
            </Col>
        
            <Col style={{'margin-left': '60px'}}>
              < MapCollectionTest />
            </Col>            
        </Row>

        
    )
}

export default SearchLayout
