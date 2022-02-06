import axios from 'axios'
import { GET_PROFILE, SET_IMG } from '../types/types';





export const oneProfile = (id) => async (dispatch) => {
  axios(`/myprofile/${id}`)
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data.profile }))
}

export const setAvatar = (value) => {
  return {
    type: SET_IMG,
    payload: value
  }
}

export const getAvatar = (value, id) => async (dispatch) => {
  console.log('2')
  console.log('value ====================>',value)
  const res = await axios.put(`/myprofile/${id}`, value)
  dispatch(setAvatar(res.data))
}


//


