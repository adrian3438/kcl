import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./Slices/adminInfoSlice";

export const store = configureStore({
    reducer : {
        userData : userInfoReducer,
    },
    middleware : getMiddleware => getMiddleware().concat(),
    devTools : process.env.NODE_ENV === 'production'
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;