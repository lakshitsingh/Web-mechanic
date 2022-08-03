import { configureStore } from "@reduxjs/toolkit";
import registerReducer from './registrationSlice';
import userReducer from "./userSlice";
import authReducer from './authSlice'

const store = configureStore({
    reducer:{
        register: registerReducer,
        user : userReducer,
        auth : authReducer
    }
})

export default store;