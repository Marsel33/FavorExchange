import style from './style.css'
import { List, Avatar, Space, Button } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllActiveBartersAction } from '../../Redux/actions/thunkActions/activeBarters/thunkGetAllActiveBartersAction';
import { thunkGetAllEndedBarterAction } from '../../Redux/actions/thunkActions/endedBarters/thunkGetAllEndedBarterAction';
import { thunkEndBarterAction } from '../../Redux/actions/thunkActions/reqBarters/thunkEndBarterAction';





const ActivCardTasck = () => {
  const user = useSelector(state => state.user)

  const activeBarters = useSelector(state => state.activeBarters)

  const dispatch = useDispatch()

  console.log('123================>', activeBarters)
  function endHandler(e) {
    e.preventDefault()
    dispatch(thunkEndBarterAction(e.target.id))
    dispatch(thunkGetAllEndedBarterAction(user))
    dispatch(thunkGetAllActiveBartersAction(user)) ////toto не забыть поменять user в init!!!!!!!
  }
console.log(user)



  useEffect(() => {
    if (user) {
      dispatch(thunkGetAllActiveBartersAction(user.id))
    }
  }, [activeBarters.length])

  return (
    <>
   

      <List
        itemLayout="vertical"
        size="large"
        // style={{ width: '300', height: '500px' }}
        className='ant-list'
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 1,
        }}
        dataSource={activeBarters}
        renderItem={item => (
          <List.Item

            extra={
              <img
                width={300}
                alt="logo"
                src='https://images.vector-images.com/clp5/267794/clp3825734.jpg'
              />
            }
          >


            {item.status == 'active' ?
              (<div>
                <List.Item.Meta

                  avatar={<Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-_pyhGQLZr-h5MZSHo1lCWCaMtLCsDehPg&usqp=CAU'} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.service}
                  
                />
                {console.log(item.barterId)}
                <button id={item.barterId} onClick={endHandler}>заввершить сделку</button>
              </div>)
              :
              ''
            }
            {item.content}
          </List.Item>
        )}
      />

    </>
  )
}


export default ActivCardTasck;
