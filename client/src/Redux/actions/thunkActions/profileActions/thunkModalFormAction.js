import axios from "axios";
import {setProfileAction} from "./setProfileAction";

export const thunkModalFormAction = (data) => async (dispatch) => {
    console.log(data)
    try {
        const response = await axios.post(`/myprofile/${data.id}`, data)
        dispatch(setProfileAction(response.data.newProfile))
    } catch (e) {
        console.log(e)
    }
}
