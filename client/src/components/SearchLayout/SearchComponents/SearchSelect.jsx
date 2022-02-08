import { Select } from 'antd'


const SearchSelect = () => {

  const fruits = [ 'banana', 'pineapple', 'strawberry']

  return (
    <Select mode='multiple'
    maxTagCount={1}
    allowClear
    placeholder='Select option'
      style={{width:150}}>
        { fruits.map((fruit, index) => {
          return <Select.Option key={index} value={fruit}>{fruit}</Select.Option>
        })}
      </Select>      
    
    
  )
}

export default SearchSelect
 