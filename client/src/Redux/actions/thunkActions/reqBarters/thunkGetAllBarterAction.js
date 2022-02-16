import axios from "axios";
import {getAllBartersAction} from "./getAllBartersAction";

export const thunkGetAllBarterAction = (id) => async (dispatch) => {
    const response = await axios(`/deals/all-barters/${id}`)
    dispatch(getAllBartersAction(response.data.barters))
}
