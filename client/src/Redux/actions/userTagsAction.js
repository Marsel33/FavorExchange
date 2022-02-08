import axios from "axios"
import { GET_USER_TAGS } from "../types/types"



export const allTags = (id) => async (dispatch) => {
  
  const res = axios(`/tags/${id}`)
    .then(res => dispatch({ type: GET_USER_TAGS, payload: res.data.allTags }))
}

