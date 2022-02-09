import axios from "axios";
import {userRegisterAction} from "./userRegisterAction";


export const thunkUserRegisterAction = (data) => async (dispatch) => {
    try {
        const response = await axios.post('/user/signup', data)
        console.log(response.data)
        dispatch(userRegisterAction(response.data.user))
    }catch (e){
        console.log(e)
    }
}
