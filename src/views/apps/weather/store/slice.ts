import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootObject } from "./type";


export const weatherSlice = createSlice({
    name: "weatherSlice",
    initialState: <RootObject>{},
    reducers: {
        getWeather: (state: RootObject, action: PayloadAction<any>) => {
            state.weather = action.payload
        }
    }
})
export const { getWeather } = weatherSlice.actions
export default weatherSlice.reducer