import axios from "axios";
import {userRegisterAction} from "./userRegisterAction";


export const thunkUserRegisterAction = (data) => async (dispatch) => {
    try {
        const response = await axios.post('/user/signup', data)
        dispatch(userRegisterAction(data))
    }catch (e){
        console.log(e)
    }
}
