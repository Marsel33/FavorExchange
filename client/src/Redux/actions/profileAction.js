import axios from 'axios'
import { GET_ALL_PROFILES, GET_PROFILE } from '../types/types'

export const setProfiles = (value) => {
  return {
    type: GET_ALL_PROFILES,
    payload: value
  }
}

export const oneProfile = (id) => async (dispatch) => {
  axios(`/myprofile/${id}`)
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data.profile}))
}

//
export const allProfiles = () => async(dispatch) => {
  const res = await axios('/myprofile')
  dispatch(setProfiles(res.data))
}
