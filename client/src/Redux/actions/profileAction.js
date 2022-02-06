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
  // console.log(res.data.allProfiles);
  dispatch(setProfiles(res.data.allProfiles))

}

// export const getCoordinates = () => async(dispatch) => {
//   const res = await axios('https://geocode-maps.yandex.ru/1.x/?apikey=5a0ef838-8ef3-4449-8f30-5a93bdf47ddd&geocode=Москва,Тверская+улица,+дом+7&format=json')
//   console.log(res.response);
// }
