import {USER_REGISTER} from "../../../types/types";

export const userRegisterAction = (data) => {
    return {
        type: USER_REGISTER,
        payload: data
    }
}
