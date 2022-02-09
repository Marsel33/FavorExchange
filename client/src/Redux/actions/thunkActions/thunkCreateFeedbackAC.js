import axios from "axios";

export const thunkCreateFeedbackAC = (data) => async (dispatch) => {
    // console.log('otpravliaem na back')
    const response = await axios.post('/comment', {data})
    console.log(response.data)
}