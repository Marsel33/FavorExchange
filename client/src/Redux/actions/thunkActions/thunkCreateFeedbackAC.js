import axios from "axios";
import { CREATE_COMMENT } from "../../types/types";

export const thunkCreateFeedbackAC = (data) => async (dispatch) => {
    // console.log('otpravliaem na back')
    console.log(data,'/////////////////////=> data')
    const response = await axios.post('/comment', {data})
    console.log(response, '----------------=======>res')
    dispatch({type: CREATE_COMMENT, payload: response.data })
}
