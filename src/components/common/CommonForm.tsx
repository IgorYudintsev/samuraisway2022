import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";


type Inputs = {
    message: string,
};

type AddMessageFormMyPostsType = {
    onSubmitHandler: (message: string) => void
    textArea: boolean
}


export const CommonForm = ({onSubmitHandler, textArea}: AddMessageFormMyPostsType) => {
    const {register, handleSubmit, reset, setError, formState: {errors}} = useForm<Inputs>();
    console.log(errors)

    const onSubmit: SubmitHandler<Inputs> = (data) => {
            onSubmitHandler(data.message)
            reset()
    }




    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {textArea
                    ? <textarea cols={30} rows={10} placeholder={'Enter your message'} {...register("message", {
                        required: "Required field",
                        minLength: {
                            value: 2,
                            message: "Minimum 2 symbols",
                        },
                    })} />
                    : <input placeholder={'Enter your message'} {...register("message", {
                        required: "Required field",
                        minLength: {
                            value: 2,
                            message: "Minimum 2 symbols",
                        },
                    })} />
                }
                {errors.message && <div>{errors.message?.message}</div>}
            </div>
            <input type="submit"/>
        </form>
    );
};


//--------------------------------------------------------------

// import React from 'react';
// import {SubmitHandler, useForm} from "react-hook-form";
//
//
// type Inputs = {
//     message: string,
// };
//
// type AddMessageFormMyPostsType = {
//     onSubmitHandler: (message: string) => void
//     textArea:boolean
// }
//
//
// export const CommonForm = ({onSubmitHandler,textArea}:AddMessageFormMyPostsType) => {
//     const {register, handleSubmit, reset,} = useForm<Inputs>();
//     const onSubmit: SubmitHandler<Inputs> = (data) => {
//         onSubmitHandler(data.message)
//         reset()
//     }
//     // React.useEffect(() => {
//     //     setError("message", {
//     //         type: "manual",
//     //         message: "message is required"
//     //     });
//     // }, [setError])
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//                 {textArea
//                     ?  <textarea cols={30} rows={10}  placeholder={'Enter your message'} {...register("message",{required: true})} />
//                     :   <input placeholder={'Enter your message'} {...register("message",{required: true,minLength: 2})} />
//                 }
//                 {errors.message && <div>{errors.message?.message}</div>}
//             </div>
//             <input type="submit"/>
//         </form>
//     );
// };

