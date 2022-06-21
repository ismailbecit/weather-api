import axios, { AxiosResponse } from "axios"
import { toast } from "react-toastify"
import { call, all, put, takeEvery } from "redux-saga/effects"
import { delSessionStorage, setSessionStorage } from "../../../../functions/sessionStorage"
import { application } from "../../../../redux/store"
import { LoginType, ILogin, LogoutType } from "./actions"
import { loginCheck, logoutCheck } from "./slice"

function* loginHandler({ payload }: ILogin) {
    try {
        yield call(() => axios.get(`${application.api}/data/2.5/weather`, {
            params: {
                appid: payload.apikey,
                q: "Istanbul",
                lang: "tr",
                units: "metric"
            }
        }
        ))
        yield setSessionStorage("apikey", payload.apikey)
        toast.success("Giriş Başarılı")
        yield put(loginCheck(true))
    } catch (error) {
        toast.error("Apikey Hatalı")
        yield put(loginCheck(false))

    }
}
function* logoutHandler({ payload }: ILogin) {
    yield delSessionStorage("apikey")
    yield put(logoutCheck())
}

export function* loginSagas() {
    yield all([
        takeEvery(LoginType().type, loginHandler),
        takeEvery(LogoutType().type, logoutHandler)
    ])
}