import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Login = lazy(() => import("../views/apps/login"))
const Weather = lazy(() => import("../views/apps/weather"))
const Router = () => {

    return (
        <Routes>
            <Route path='/weather' element={<Weather />} />
            <Route path='/' element={<Login />} />
        </Routes>
    )
}

export default Router