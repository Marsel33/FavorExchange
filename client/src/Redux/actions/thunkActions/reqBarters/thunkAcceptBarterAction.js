import axios from "axios";
import {acceptBarterAction} from "./acceptBarterAction";

export const thunkAcceptBarterAction = (id) => async (dispatch) => {
    console.log(id)
    const response = await axios.put(`/deals/active/${id}`)
    console.log(response)
    if (response.status === 200) {
        console.log('suka', id)
        dispatch(acceptBarterAction(id))
    }

}