// Note: All auth action functions are defined here...!

import {
    SIGN_UP_USER
}
    from "../constant/action-types";
import axios from "axios";
import { ToastAndroid } from "react-native";

// Note: Function to show message...!
const showToast = (value) => {
    ToastAndroid.show(value, ToastAndroid.LONG);
};

/***** Note: SignUpUser action function *****/
const signUpUser = (data) => {
    return async (dispatch) => {
        console.log(data);

        let api = 'http://10.192.33.135:8081/api/customers/registerCustomer';

        try {
            let response = await axios.post(api, data);
            console.log(response);

            if (response.data.success === true) {
                showToast('You have Logged In Successfully!');
            }

            else {
                showToast(response.data.message);
                console.log(response.data.message);
            }
        }

        catch (error) {
            console.log(error);
        }
    }
}

/***** Note: SignUpUser action function *****/

export {
    signUpUser
};