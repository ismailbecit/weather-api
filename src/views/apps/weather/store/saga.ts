import axios, { AxiosResponse } from "axios"
import { call, all, put, takeEvery } from "redux-saga/effects"
import { application } from "../../../../redux/store"
import { GetWeather, IGetWeather } from "./actions"
import { getWeather } from "./slice"

function* getWeatherHandler({ payload }: IGetWeather) {
    try {
        const response: AxiosResponse = yield call(() => axios.get(`${application.api}/data/2.5/weather`, {
            params: {
                appid: application.key,
                q: payload.label,
                lang: "tr",
                units: "metric"
            }
        }
        ))
        yield put(getWeather(response.data))
    } catch (error) {
    }
}

export function* weatherSagas() {
    yield all([
        takeEvery(GetWeather().type, getWeatherHandler)
    ])
}