import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk pour faire unn a ction asynchone pour faire une requete a une base de données

// export const loginUser = createAsyncThunk("userLogin", (data, thunkAPI) => {
//     const response = await axios.post("API-URL", data)
//     return response.data
// });

export const registerUser = createAsyncThunk("userRegister", (data, thunkAPI) => { });
//action sans base de données ( pas asynchrone)
export const logoutUser = createAction("userLogout");

export const loginUser = createAction("userLogin", (data) => {


    if (data) {

        return { payload: { token: "token", user: { userId: "uoiaea" } } }

    }
    else {
        return { payload: { error: "oui" } }
    }

});