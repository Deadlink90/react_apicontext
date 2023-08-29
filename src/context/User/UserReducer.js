import * as types from "../types";

const userReducer = (state, action) => {
    const {payload,type} = action;

    switch (type) {
        case types.GET_USERS:
            return {
              ...state,  
              users:payload
            }
            break;

            case types.GET_PROFILE:
            return {
            ...state,
            selectedUser:payload
            }
            break;
    
        default:
            break;
    }

};

export default userReducer;
