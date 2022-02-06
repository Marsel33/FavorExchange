import { Image, Table, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allProfiles } from '../../Redux/actions/profileAction'
// import { users } from '../../data'

const columns = [
    {
        title: 'Имя',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
        title: 'Описание',
        dataIndex: 'description',
        key: 'description',
    },
    // {
    //     title: 'Email',
    //     dataIndex: 'email',
    //     key: 'email',
    //     filters: [
    //         {
    //             text:'Nathan@yesenia.net' ,
    //             value: 'Nathan@yesenia.net'
    //         },
    //         {
    //             text:'Telly.Hoeger@billy.biz' ,
    //             value: 'Telly.Hoeger@billy.biz'
    //         }
    //     ], 
    //     onFilter: (value, item) => item.email.includes(value)
    // },
    {
        title: 'Address',
        dataIndex: '',
        key: '',
        // render: (website) => <Image src={image} alt="" width={150} />
    },
    {
        title: 'Фото',
        dataIndex: 'img',
        key: 'img',
        // sorter: (a, b) => a.phone - b.phone,
        render: (img) => <Image src={img} alt="Your photo" width={100}/>
    },

]





const SearchCategory = ({rows = 5}) => {

  const dispatch = useDispatch()
  
  const users = useSelector(state => state.profile)

  const dataSource = users.map(item => (item))

  // const dataSource = {item}


 
  useEffect(() => {
    dispatch(allProfiles())
  }, [])

    return (
        <Table 
            dataSource={dataSource}
            columns = {columns}
            pagination = {{
                // pageSize: rows,
                // pageSize: '5', 
                showSizeChanger: true, 
                pageSizeOptions: [2, 3, 5, 10]
            }}
        />
    )
}

export default SearchCategory
