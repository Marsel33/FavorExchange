import axios from 'axios'
import {GET_ALL_PROFILES, GET_PROFILE, SET_IMG} from '../types/types';


export const setProfiles = (value) => {
    return {
        type: GET_ALL_PROFILES,
        payload: value
    }
}

export const oneProfile = (id) => (dispatch) => {
    axios(`/myprofile/${id}`)
        .then(res => dispatch({type: GET_PROFILE, payload: res.data.profile}))

}
//
export const setAvatar = (value) => {
    return {
        type: SET_IMG,
        payload: value
    }
}

export const getAvatar = (value, id) => async (dispatch) => {
    const res = await axios.put(`/myprofile/${id}`, value)
    dispatch(setAvatar(value))
}

export const thunkAllProfiles = (data) => async (dispatch) => {
    const res = await axios.post('/find/categories', data)
    dispatch(setProfiles(res.data))
}

