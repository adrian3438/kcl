import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface userState {users : userType}
interface userType {
    users : any
}
const initUserInfo : userType = {
    users : null
}
const initialState : userState = {
    users : initUserInfo
}

export const userInfoReducer = createSlice({
    name : 'userData',
    initialState,
    reducers : {
        setUser : (state, action : PayloadAction<userType>) => {
            state.users = action.payload;
        }
    }
})

export const {setUser} = userInfoReducer.actions;
export default userInfoReducer.reducer