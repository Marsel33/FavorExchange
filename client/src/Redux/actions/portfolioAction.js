import axios from "axios"
import { GET_PORTFOLIO } from "../types/types"



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
