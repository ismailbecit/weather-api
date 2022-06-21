import React, { useState } from 'react'
import CustomSelect from '../../../components/customSelect'
import { cities } from "../../../../utils/cities"
import { useAppDispatch } from '../../../../redux/store'
import { GetWeather } from '../store/actions'

const Search = () => {
    const dispatch = useAppDispatch()
    const getWeatherHandler = (e: string | number) => {
        dispatch({ type: GetWeather().type, payload: e })
    }
    const cityList = cities.map((item) => ({
        value: item.id,
        label: item.name
    }))
    return (

        <CustomSelect
            className="w-64"
            options={cityList}
            onChange={(e) => getWeatherHandler(e)}
        />

    )
}

export default Search