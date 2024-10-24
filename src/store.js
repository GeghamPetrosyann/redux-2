import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./feautures/users/users.slice";


export const store = configureStore({
    reducer,
    
})