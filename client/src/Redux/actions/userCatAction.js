import axios from 'axios'
import { GET_CAT } from '../types/types';


export const setCat = (value) => {
  console.log(value)
  return {
    type: GET_CAT,
    payload: value
  }
};

export const getCat = (value) => async (dispatch) => {
  console.log(value)
  const res = await axios.post('#', value);
  dispatch(setCat(res.data))
}
