export type ILogin = {
    type: any
    payload?: { apikey: string }
}

export const LoginType = (payload?: ILogin["payload"]): ILogin => {
    return {
        type: "LOGIN",
        payload: payload
    }
}

export type ILogout = {
    type: string
}

export const LogoutType = (): ILogout => {
    return {
        type: "LOGOUT"
    }
}