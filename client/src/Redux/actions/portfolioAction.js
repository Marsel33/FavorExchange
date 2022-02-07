import axios from "axios"
import { ALL_USER_PORTFOLIO, GET_PORTFOLIO} from "../types/types"



export const setPprtfolio = (value) => {
  return {
    type: GET_PORTFOLIO,
    payload: value
  }

}

export const getPortfolio = (img, id) => async (dispatch) => {
  console.log(img)
  const res = await axios.post(`/portfolio/${id}`, { img })
  dispatch(setPprtfolio(res.data))
}



export const allProfile = (id) => (dispatch) => {
  axios(`/portfolio/${id}`)
    .then(res => dispatch({ type: ALL_USER_PORTFOLIO, payload: res.data.portfolio }))
}

