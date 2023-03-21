import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styled from "styled-components";

type Inputs = {
    login: string,
    password: string,
    rememberMe:boolean
};


export const Login = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("login")) // watch input value by passing the name of it

    return (
        <Wrapper>
            <div>
                <h1>LOGIN</h1>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div>
                        <input placeholder={'login'} {...register("login")} />
                    </div>

                    {/* include validation with required or other standard HTML validation rules */}
                    <div>
                        <input  placeholder={'password'}  {...register("password", {required: true})} />
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

//------------------------------------------
// import React from 'react';
// import {SubmitHandler, useForm} from "react-hook-form";
// import styled from "styled-components";
//
// type Inputs = {
//     example: string,
//     exampleRequired: string,
// };
//
//
// export const Login = () => {
//     const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
//     const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
//
//     console.log(watch("example")) // watch input value by passing the name of it
//
//     return (
//         <Wrapper>
//             <div>
//                 <h1>LOGIN</h1>
//             </div>
//
//             <div>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     {/* register your input into the hook by invoking the "register" function */}
//                     <div>
//                         <input placeholder={'login'} {...register("example")} />
//                     </div>
//
//                     {/* include validation with required or other standard HTML validation rules */}
//                     <div>
//                         <input  placeholder={'password'}  {...register("exampleRequired", {required: true})} />
//                     </div>
//
//                     <div>
//                         <input type={"checkbox"} {...register("example")} />
//                     </div>
//
//                     {/* errors will return when field validation fails  */}
//                     {errors.exampleRequired && <span>This field is required</span>}
//
//                     <input type="submit"/>
//                 </form>
//             </div>
//
//         </Wrapper>
//     );
// };
//
// const Wrapper = styled.div`
//   margin-left: 20px;
//   display: flex;
//   flex-direction: column;
//
// `