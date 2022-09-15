import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth-reducer";

const store = configureStore({
    reducer: {
        auth: authReducer
    },
    //a modifier quand jaurai le backend :process.env.NODE_ENV !== "production"
    devTools: true

})



export default store;