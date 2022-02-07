import axios from "axios";
import {declinedBarterAction} from "../declinedBarters/declinedBarterAction";

export const thunkDeclineBarterAction = (id) => async (dispatch) => {
    console.log(id)
    const response = await axios.put(`/deals/declined/${id}`)
    console.log(response)
    if (response.status === 200) {
        dispatch(declinedBarterAction(response.data))
    }
}