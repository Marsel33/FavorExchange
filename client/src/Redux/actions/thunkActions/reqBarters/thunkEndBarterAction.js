import axios from "axios";
import {endBarterAction} from "./endBarterAction";

export const thunkEndBarterAction = (id) => async (dispatch) => {
    // console.log('end rabotaet============', id)
    const response = await axios.put(`/deals/ended/${id}`)
    console.log(response)
    if (response.status === 200) {
        dispatch(endBarterAction(id))
    }

}