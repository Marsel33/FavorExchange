import { Button, Select } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkGetAllCategoriesAction } from '../../../Redux/actions/search/thunkGetAllCategoriesAction'
import { thunkSearchForCategories } from '../../../Redux/actions/search/thunkSearchForCategories'

const SearchSelect = () => {

  const [ input, setInput ] = useState(null)

  const dispatch = useDispatch()

  const categories = useSelector(state=>state.categories)

  useEffect(()=>{
    dispatch(thunkGetAllCategoriesAction())
  },[])

  const clickHandler = (e) =>{    
    setInput(prev => (prev = e))
  }
  
  const submitHandler = (e) =>{
    dispatch(thunkSearchForCategories(input))
  }


  return (
    <>
    <Select 
      maxTagCount={1}
      allowClear
      placeholder='Select option'
      onChange={clickHandler}
      style={{width:150}}>
          { categories.map((category, index) => {
            return <Select.Option  value={category.id} key={index}>{category.title}</Select.Option>
        })}
      </Select>  
  <Button onClick={submitHandler}>find</Button>
    </>
    
  )
}

export default SearchSelect
 