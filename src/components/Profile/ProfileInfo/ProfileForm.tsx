import React from "react";
import styled from "styled-components";
import {SubmitHandler, useForm} from "react-hook-form";
import {loginTC} from "../../../redux/auth-reducer";
import {saveProfileThunkCreator, setUserProfileThunkCreator, UserProfileType} from "../../../redux/profile-reducer";
import {useAppDispatch} from "../../../hooks/hook";

type Inputs = {
    aboutMe: string,
    fullName: string,
    lookingForAJob: boolean
    lookingForAJobDescription: string
};

type PropsType = {
    userProfile: UserProfileType
    setEditMode: (editMode: boolean) => void
}


export const ProfileForm = (props: PropsType) => {
    let dispatch = useAppDispatch()
    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        //console.log(data)
        dispatch(saveProfileThunkCreator(data))
        props.setEditMode(false)

        // reset()
    };

    return (
        <Wrapper>
            <div>
                <h1>CHANGE FORM</h1>
                {/*{errorMessage && <h3 style={{color:'red'}}>{errorMessage}</h3>}*/}
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        aboutMe: <input
                        defaultValue={props.userProfile.aboutMe} {...register("aboutMe", {required: true})} />
                    </div>
                    <div>
                        fullName: <input
                        defaultValue={props.userProfile.fullName} {...register("fullName", {required: true})} />
                    </div>
                    <div>
                        lookingForAJob: <input type={"checkbox"} {...register("lookingForAJob")} />
                    </div>
                    <div>
                        lookingForAJobDescription: <input
                        defaultValue={props.userProfile.lookingForAJobDescription} {...register("lookingForAJobDescription", {required: true})} />
                    </div>

                    {/* errors will return when field validation fails  */}
                    {/*{errors.password && <span>This field is required</span>}*/}

                    <input type="submit"/>
                </form>
            </div>

        </Wrapper>
    )
}

// <div><b>fullName:</b> {props.userProfile.fullName}</div>
// <div><b>lookingForAJob: </b>{props.userProfile.lookingForAJob}</div>
// <div><b>userId:</b> {props.userProfile.userId}</div>
// <div><b>aboutMe:</b> {props.userProfile.aboutMe}</div>
// <div> {Object.keys(props.userProfile.contacts).map(key => {
//     return (
//         <Contact
//             key={key}
//             contactKey={key}
//             contactValue={props.userProfile.contacts[key]}/>
//     )
// })}</div>

const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`