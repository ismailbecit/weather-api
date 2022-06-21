export type IGetWeather = {
    type: any
    payload?: {
        lat: any,
        lon?: string,
    } | any
}

export const GetWeather = (payload?: IGetWeather["payload"]): IGetWeather => {
    return {
        type: "GET_WEATHER",
        payload: payload
    }
}