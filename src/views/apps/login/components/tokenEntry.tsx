import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'
import Input from '../../../components/customInput/index'
import Button from '../../../components/customButton'
import { useFormik } from 'formik'
import * as yup from "yup"
import { LoginType } from '../store/actions'
import { useNavigate } from 'react-router-dom'
import { getSessionStorage } from '../../../../functions/sessionStorage'

const TokenEntry = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLogin = useAppSelector(state => state.loginSlice.isLogin)
    const validationSchema = yup.object().shape({
        apikey: yup.string().required("Token Zorunlu Alandır")
    })

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: { apikey: "", },
        validationSchema,
        onSubmit: (async (values) => {
            await dispatch({ type: LoginType().type, payload: { apikey: values.apikey } })


        })

    })
    useEffect(() => {
        if (isLogin) {
            if (getSessionStorage("apikey")) {
                navigate("/weather")
            }
        }
    }, [isLogin])


    return (
        <div className='w-full h-28   mx-0 mt-8 '>
            <Input
                label='Api Token'
                required={true}
                error={errors.apikey}
                type="text"
                value={values.apikey}
                name='apikey'
                onChange={handleChange}
                className={"w-full "}
            />
            {touched.apikey ? <p className='text-red-800 text-sm font-mono' data-testid="error">{errors.apikey}</p> : ""}
            <div className='text-center mt-3'>
                <Button
                    onClick={() => handleSubmit()}
                    text='Giriş Yap'
                    className='bg-green-600 mt-2 text-white '
                />
            </div>

        </div>

    )
}

export default TokenEntry