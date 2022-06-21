import { combineReducers } from "@reduxjs/toolkit"
import weatherSlice from "../views/apps/weather/store/slice"
import loginSlice from "../views/apps/login/store/slice"
export const rootReducer = combineReducers({
    weatherSlice,
    loginSlice,
})