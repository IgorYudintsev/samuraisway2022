import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {useAppDispatch, useAppSelector} from "../../hooks/hook";
import {Navigate} from "react-router-dom";

type Inputs = {
    login: string,
    password: string,
    rememberMe: boolean
};


export const Login = () => {
    let dispatch = useAppDispatch()
    let isAuth = useAppSelector(state => state.auth.isAuth)
    let errorMessage = useAppSelector(state => state.auth.errorMessage)

    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(loginTC(data.login, data.password, data.rememberMe))
        reset()
    };


    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <Wrapper>
            <div>
                <h1 >LOGIN</h1>
                {errorMessage && <h3 style={{color:'red'}}>{errorMessage}</h3>}
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div>
                        <input placeholder={'login'} {...register("login")} />
                    </div>

                    {/* include validation with required or other standard HTML validation rules */}
                    <div>
                        <input placeholder={'password'}  {...register("password", {required: true})} />
                    </div>

                    <div>
                        <input type={"checkbox"} {...register("rememberMe")} />
                    </div>

                    {/* errors will return when field validation fails  */}
                    {errors.password && <span>This field is required</span>}

                    <input type="submit"/>
                </form>
            </div>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;

`
