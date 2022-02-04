import {Row, Col, Slider, Typography } from 'antd'
import { useState } from "react";
import SearchCategory from '../SearchCategory.js/SearchCategory';




const SearchLayout = () => {

    const [rows, setRows ] = useState(5)


    return (
        <Row>
            <Col xs={24} md={{ span:12, offset:6 }}>
                <Typography.Title level={4}>Количество пользователей на странице</Typography.Title>
                <Slider min={1} max={10} defaultValue={rows} onChange={setRows}/>
                <SearchCategory rows={rows}/>
            </Col>
        </Row>
    )
}

export default SearchLayout
