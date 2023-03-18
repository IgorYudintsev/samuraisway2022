import React from 'react';
import {Profile} from "./Profile";
import {reducersType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile, setUserProfileThunkCreator, UserProfileType} from "../../redux/profile-reducer";
import {WithAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


type PropsType = {
    setUserProfile: (profile: any) => void
    userProfile: UserProfileType
   // isAuth: boolean
    setUserProfileThunkCreator: (getItemResult: number) => void
}


export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let getItemResult
        let getItem = localStorage.getItem('elId')
        if (getItem !== null) getItemResult = JSON.parse(getItem)
        this.props.setUserProfileThunkCreator(getItemResult)
    }

    render() {
        return (
            <div>
                <Profile
                    userProfile={this.props.userProfile}
                />
            </div>

        );
    }
};


const mapStateToProps = (state: reducersType) => {
    return {
        userProfile: state.profilePage.profile,
    }
}


// const AuthRedirectComponent=WithAuthRedirectComponent(ProfileContainer)
//
//
// export default connect(mapStateToProps, {
//     setUserProfile,
//     setUserProfileThunkCreator
// })(AuthRedirectComponent)


export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        setUserProfileThunkCreator
    }),
    WithAuthRedirectComponent
)(ProfileContainer)


//--------------------------------------------------

// import React from 'react';
// import {Profile} from "./Profile";
// import {reducersType} from "../../redux/redux-store";
// import {connect} from "react-redux";
// import {setUserProfile, setUserProfileThunkCreator, UserProfileType} from "../../redux/profile-reducer";
// import {WithAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
//
//
// type PropsType = {
//     setUserProfile: (profile: any) => void
//     userProfile: UserProfileType
//     // isAuth: boolean
//     setUserProfileThunkCreator: (getItemResult: number) => void
// }
//
//
// export class ProfileContainer extends React.Component<PropsType> {
//
//     componentDidMount() {
//         let getItemResult
//         let getItem = localStorage.getItem('elId')
//         if (getItem !== null) getItemResult = JSON.parse(getItem)
//         this.props.setUserProfileThunkCreator(getItemResult)
//     }
//
//     render() {
//         return (
//             <div>
//                 <Profile
//                     userProfile={this.props.userProfile}
//                 />
//             </div>
//
//         );
//     }
// };
//
//
// const AuthRedirectComponent=WithAuthRedirectComponent(ProfileContainer)
//
//
// const mapStateToProps = (state: reducersType) => {
//     return {
//         userProfile: state.profilePage.profile,
//         //isAuth: state.auth.isAuth
//     }
// }
//
//
// export default connect(mapStateToProps, {
//     setUserProfile,
//     setUserProfileThunkCreator
// })(AuthRedirectComponent)


//--------------------------------------------------