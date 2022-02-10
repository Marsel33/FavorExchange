import { Image, Table, Typography } from 'antd'


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
        title: 'Адрес',
        dataIndex: 'adress',
        key:'adress',
    },
    {
        title: 'Фото',
        dataIndex: 'img',
        key: 'img',
        // sorter: (a, b) => a.phone - b.phone,
        render: (img) => <Image src={img} alt="Your photo" width={100}/>
    },

]





const SearchCategory = ({rows = 5, users, key}) => {
 
  const dataSource = users.map(item => (item))    

    return (
        <Table 
            dataSource={dataSource}
            columns = {columns}
            pagination = {{
                // pageSize: rows,
                // pageSize: '5', 
                showSizeChanger: true, 
                pageSizeOptions: [1, 2, 3, 5, 10]
            }}
        />
    )
}

export default SearchCategory
