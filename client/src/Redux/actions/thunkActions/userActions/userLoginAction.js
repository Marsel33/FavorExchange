import {USER_LOGIN} from "../../../types/types";

export const userLoginAction = (data) => {
    return {
        type: USER_LOGIN,
        payload: data
    }
}
