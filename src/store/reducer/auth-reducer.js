// Note: All auth cases are defined here...!

import {
    LOG_IN_USER
}
    from "../constant/action-types";

// Note: authReducer initial states...!
const INIT_STATE = {
    authenticationUser: null
};

const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default authReducer;