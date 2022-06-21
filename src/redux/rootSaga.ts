import { all } from "redux-saga/effects"
import { loginSagas } from "../views/apps/login/store/saga"
import { weatherSagas } from "../views/apps/weather/store/saga"

export function* rootSaga() {
    yield all([
        weatherSagas(),
        loginSagas(),
    ])
}