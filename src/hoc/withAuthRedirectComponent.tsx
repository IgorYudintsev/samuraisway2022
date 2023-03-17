import React from 'react';
import {Navigate} from "react-router-dom";
import {reducersType} from "../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile, setUserProfileThunkCreator} from "../redux/profile-reducer";

type mapStateToPropsTYpe={
    isAuth: boolean
}

const mapStateToProps = (state: reducersType) => {
    return {
        // userProfile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export const WithAuthRedirectComponent = (Component:any) => {
    const RedirectComponent=(props:any)=>{
        if(!props.isAuth){
            return <Navigate to={'/login'}/>
        }
        return <Component {...props}/>
    }
    let connectedAuthRedirectComponent= connect(mapStateToProps)(RedirectComponent)
    return connectedAuthRedirectComponent
};

//--------------------------------------------------------------------------------------------

// import React from 'react';
// import {Navigate} from "react-router-dom";
//
// export const WithAuthRedirectComponent = (Component:any) => {
//     const RedirectComponent=(props:any)=>{
//         if(!props.isAuth){
//             return <Navigate to={'/login'}/>
//         }
//         return <Component {...props}/>
//     }
//     return RedirectComponent
// };


//-------------------------------------------------------------------------

