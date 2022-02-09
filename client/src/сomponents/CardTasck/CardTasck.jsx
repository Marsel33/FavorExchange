import { List, Avatar, Space } from 'antd';
import React from 'react';
import { listData } from '../../listData'
import { useSelector } from 'react-redux';



const CardTasck = ({ title }) => {
  const endedBarters = useSelector(state => state.endedBarters)
  console.log(endedBarters, '333333333333333333')
  const meProfile = useSelector(state => state.profile);
  console.log('-----> progile', meProfile)


  return (
    <>
    </>
  )

}

export default CardTasck;
