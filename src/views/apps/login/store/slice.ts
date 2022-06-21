import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootObject } from "./type";


export const loginSlice = createSlice({
    name: "loginSlice",
    initialState: { isLogin: false },
    reducers: {
        loginCheck: (state: { isLogin: boolean }, action: PayloadAction<boolean>) => {
            state.isLogin = action.payload
        },
        logoutCheck: (state: { isLogin: boolean }) => {
            state.isLogin = false
        },
    }
})
export const { loginCheck, logoutCheck } = loginSlice.actions
export default loginSlice.reducer