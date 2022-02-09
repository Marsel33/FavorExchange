import { ControlOutlined } from '@ant-design/icons';
import { async } from '@firebase/util';
import axios from 'axios'
import { GET_ALL_CAT, SET_CAT } from '../types/types';


export const setCat = (value) => {
  console.log('value----->',value);
  return {
    type: SET_CAT,
    payload: value
  }
};

export const getCat = (value, id) => async (dispatch) => {
  console.log('valie get Cat --------_>', value)
  const res = await axios.post(`/tags/${id}`,  value );
  console.log('res new tag------>',res)
  dispatch(setCat(res.data.tag))
}


export const allCat = () => (dispatch) => {
  const res = axios('/tags')
    .then(res => dispatch({ type: GET_ALL_CAT, payload: res.data.allCategories }))
}
