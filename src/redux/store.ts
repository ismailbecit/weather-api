import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./rootReducer"
import { rootSaga } from "./rootSaga"
import createSagaMiddleware from "redux-saga"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const saga = createSagaMiddleware();
export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga]
})
saga.run(rootSaga)

export const application = {
    api: "https://api.openweathermap.org",
    key: "cfa7be7e6a98bcd9e6bab490d923e87c",
    img: "http://openweathermap.org"
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector