import axios from 'axios'
import { GET_PROFILE } from '../types/types'




export const oneBox = (id) => async (dispatch) => {
  axios(`myprofile/${id}`)
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data}))
}

