import axios from "axios";
import {acceptBarterAction} from "../../acceptBarterAction";

export const thunkDeclineBarterAction = (id) => async (dispatch) => {
    console.log(id)
    const response = await axios.put(`/deals/ended/${id}`)
    console.log(response)
    if (response.status === 200) {
        dispatch(acceptBarterAction(id))
    }
}