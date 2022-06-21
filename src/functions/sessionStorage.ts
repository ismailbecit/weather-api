export const getSessionStorage = (key: any) => {
    if (typeof window !== 'undefined') {
        return sessionStorage.getItem(key)
    }
}

export const setSessionStorage = (name: any, key: any) => {
    if (typeof window !== 'undefined') {
        return sessionStorage.setItem(name, key)
    }
}

export const delSessionStorage = (name: any) => {
    if (typeof window !== 'undefined') {
        return sessionStorage.removeItem(name)
    }
}