import {Row, Col, Slider, Typography } from 'antd'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { thunkAllProfiles } from '../../Redux/actions/profileAction';
import SearchCategory from '../SearchCategory/SearchCategory'
import SearchSelect from './SearchComponents/SearchSelect';


const SearchLayout = () => {

  const [rows, setRows ] = useState(5)   

  const [queryData, setQueryData] = useState({category_id: '', tag_id: ''})

  const dispatch = useDispatch()
  
  const users = useSelector(state => state.profile)

  useEffect(() => { 
    dispatch(thunkAllProfiles(queryData))
  }, [])
  
    return (
       
      <>
     
        <Row xs={24} md={{ span:12, offset:6 }} style={{'margin': '45px'}}>            
            <Col>
                <Typography.Title level={4}>Количество пользователей на странице</Typography.Title>
                <Slider min={1} max={10} defaultValue={rows} onChange={setRows}/>
                <SearchCategory rows={rows} users={users} />
            </Col>

            <Col style={{'marginLeft': '60px'}}>
              <SearchSelect users={users}/>
            </Col>                  
        </Row>

      </>

        
    )
}

export default SearchLayout
