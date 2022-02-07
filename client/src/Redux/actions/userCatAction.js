import { async } from '@firebase/util';
import axios from 'axios'
import { GET_CAT } from '../types/types';


export const setCat = (value) => {
  return {
    type: GET_CAT,
    payload: value
  }
};

export const getCat = (value) => async (dispatch) => {
  const res = await axios.post('#', value);
  dispatch(setCat(res.data))
}


export const allCat = () =>  async (dispatch) =>{
  const res = await axios('/')
}
