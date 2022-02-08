import {Row, Col, Slider, Typography } from 'antd'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { allProfiles } from '../../Redux/actions/profileAction';
import SearchCategory from '../SearchCategory/SearchCategory'
import { MapCollectionTest } from '../SearchMap/MapCollectionTest';
import SearchCheck from './SearchComponents/SearchCheck';
import SearchInput from './SearchComponents/SearchInput';
import SearchSelect from './SearchComponents/SearchSelect';




const SearchLayout = () => {

  const [rows, setRows ] = useState(5)   

  const dispatch = useDispatch()
  
  const users = useSelector(state => state.profile)

  useEffect(() => {
    dispatch(allProfiles())
  }, [])
  
    return (
       
      <>

      <Row xs={24} md={{ span:12, offset:6 }} style={{'margin': '30px', 'justifyContent': 'center'}}>
        <Col>
          <SearchInput md={{ span:12, offset:6 }} style={{'width':'300px'}}/>
        </Col>
        <Col>
          <SearchSelect />
        </Col>
      </Row>

        <Row xs={24} md={{ span:12, offset:6 }} style={{'margin': '30px'}}>
            <Col style={{'margin-right': '60px'}}>
              <SearchCheck />
            </Col>
            <Col>
                <Typography.Title level={4}>Количество пользователей на странице</Typography.Title>
                <Slider min={1} max={10} defaultValue={rows} onChange={setRows}/>
                <SearchCategory rows={rows} users={users} />
            </Col>
        
            <Col style={{'marginLeft': '60px'}}>
              < MapCollectionTest users={users}/>
            </Col>            
        </Row>

        </>

        
    )
}

export default SearchLayout
