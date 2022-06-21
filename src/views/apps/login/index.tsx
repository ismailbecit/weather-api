import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSessionStorage } from '../../../functions/sessionStorage'
import TokenEntry from './components/tokenEntry'

const index = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (getSessionStorage("apikey")) {
            navigate("/weather")

        }
    }, [getSessionStorage("apikey")])
    return (
        <div className='grid p-6  justify-center mx-auto text-gray-600  rounded-lg  '>
            <div className=' h-52  mt-0 w-full  mx-auto rounded-full ' >
                <TokenEntry />
            </div>
        </div >
    )
}

export default index