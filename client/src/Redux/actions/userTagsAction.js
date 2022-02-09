import { async } from "@firebase/util"
import axios from "axios"
import { DELL_TAG, GET_USER_TAGS } from "../types/types"



export const allTags = (id) => (dispatch) => {

  const res = axios(`/tags/${id}`)
    .then(res => dispatch({ type: GET_USER_TAGS, payload: res.data.allTags }))
}

export const dellTag = (id) => (dispatch) => {
  const res = axios.delete(`/tags/${id}`, {id})
    .then(res => dispatch({ type: DELL_TAG, payload: id }))
}

