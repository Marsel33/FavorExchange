import axios from "axios";
import {setUser} from "../../userAction";

export const thunkUserCheckAction = () => async (dispatch) => {
    const response = await axios.post('/user/check')
    console.log(response.data)
    dispatch(setUser(response.data.user))
}