import { Table, Typography } from 'antd'
import { users } from '../../data'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        filters: [
            {
                text:'Nathan@yesenia.net' ,
                value: 'Nathan@yesenia.net'
            },
            {
                text:'Telly.Hoeger@billy.biz' ,
                value: 'Telly.Hoeger@billy.biz'
            }
        ], 
        onFilter: (value, item) => item.email.includes(value)
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        sorter: (a, b) => a.phone - b.phone,
    },
    {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
        // render: (website) => <Image src={image} alt="" width={150} />
    },

]

const dataSource = users.map(item => ({...item, key: item.id}))


const SearchCategory = ({rows = 5}) => {
    return (
        <Table 
            dataSource={dataSource}
            columns = {columns}
            pagination = {{
                // pageSize: rows,
                pageSize: '5', 
                showSizeChanger: true, 
                pageSizeOptions: [2, 3, 5, 10]
            }}
        />
    )
}

export default SearchCategory
