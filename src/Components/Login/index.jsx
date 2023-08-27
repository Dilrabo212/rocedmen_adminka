import React, { useEffect, useState } from 'react'
import style from './style.module.scss'
import { BlackUserIcon, BlockIcon, UserIcon } from '../svg'
import { useForm } from 'react-hook-form'
import request from '../../services/request'


export default function Login({ setToken }) {

    const [errors, setErrors] = useState()
    const { register, handleSubmit, reset } = useForm()

    const func = (data) => {
        request.post("/auth/sign-in", {
            password: data.password,
            login: data.login
        })
            .then((res) => {

                setToken(res.data.token)
                localStorage.setItem('token', JSON.stringify({ token: res.data.token }))
            })
            .catch(() => setErrors(true))
            .finally(() => reset())

    }


    useEffect(() => {
        setTimeout(() => {
            setErrors(false)
        }, 2000);
    }, [errors]);
    return (
        <div className={style.body}>


            <div className={style.logo}>
                <BlackUserIcon />
            </div>
            <div className={style.login}>
                {!errors ?
                    <form onSubmit={handleSubmit(func)} className={style.forma}>
                        <h2 className={style.title}>Kirish</h2>
                        <labele className={style.input} >
                            <div className={style.icon}>
                                <UserIcon />
                            </div>
                            <input  {...register('login', { required: true })} type='text' placeholder='Login' />
                        </labele>
                        <labele className={style.input} >
                            <div className={style.icon}>
                                <BlockIcon />
                            </div>
                            <input  {...register('password', { required: true })} type='password' placeholder='Parol' />
                        </labele>
                        <button type='submit' className={style.btn}>Kirish</button>


                    </form>
                    :
                    <form className={style.forma}>
                        Noto'g'ri malumotlar!
                    </form>


                }
            </div>

        </div>
    )
}
