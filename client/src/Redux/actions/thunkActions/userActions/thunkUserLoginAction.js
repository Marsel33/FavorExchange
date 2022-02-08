import axios from "axios";
import {userLoginAction} from "./userLoginAction";

export const thunkUserLoginAction = (data) => async(dispatch) => {
    try {
        const response = await axios.post('/user/signin', data)
        console.log(response.data)
        dispatch(userLoginAction(response.data.user))
    }catch (e){
        console.log(e)
    }
}
