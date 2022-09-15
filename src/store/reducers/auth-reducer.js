import { createReducer } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../actions/auth-action";

const initialState = {
    isConnected: false,
    token: null,
    userId: null,
    errorMsg: "",

}

// la metheode creete reducer prend en premier aprametre le state initiale.
const authReducer = createReducer(initialState, (builder) => {
    //une action asyuncrhone aura 3 status:
    // -loginUSer.fullfiled
    // -loginUser.pending
    // -loginUser.rejected
    builder
        .addCase(loginUser, (state, action) => {
            console.log(action.payload);
            if (!action.payload.error) {
                state.isConnected = true;
                state.token = action.payload.token;
                state.userId = action.payload.user.userId;
                state.errorMsg = "";
            }
            else {
                state.isConnected = false;
                state.token = null;
                state.userId = null;
                state.errorMsg = "Votre email ou mot de passe est incorrect";
            }

        })
        .addCase(logoutUser, (state, action) => {
            state.isConnected = false;
            state.token = null;
            state.userId = null;
            state.errorMsg = "";

        })

})

export default authReducer;