import axios from "axios";
import {userLogoutAction} from "./userLogoutAction";

export const thunkLogoutAction = () => async(dispatch) => {
    try {
        await axios.post('/user/logout')
        dispatch(userLogoutAction())
    } catch (e) {
        console.log(e)
    }
}
