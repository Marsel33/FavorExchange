import axios from 'axios'
import { GET_PROFILE, SET_IMG, GET_ALL_PROFILES} from '../types/types';



export const setProfiles = (value) => {
  return {
    type: GET_ALL_PROFILES,
    payload: value
  }
}

export const oneProfile = (id) => (dispatch) => {
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
  const res = await axios.put(`/myprofile/${id}`,  value )
  dispatch(setAvatar(value))
}


export const allProfiles = () => async(dispatch) => {
  const res = await axios('/myprofile')
  dispatch(setProfiles(res.data))
}
