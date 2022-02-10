import axios from "axios";
import { getAllBartersAction } from './getAllBartersAction'
export const thunkSetNewBarterAction = (data) => async (dispatch) => {
  console.log(data)
  const response = await axios.post(`/deals/newbarter/${data.id}`, { data })
  console.log(response.data)
  // dispatch(getAllBartersAction(response.data))
}
