import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {reducersType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile, setUserProfileThunkCreator, UserProfileType} from "../../redux/profile-reducer";
import {usersApi} from "../../api/api";
import {Navigate} from "react-router-dom";


type PropsType = {
    setUserProfile: (profile: any) => void
    userProfile: UserProfileType
    isAuth:boolean
    setUserProfileThunkCreator:(getItemResult: number)=>void
}


export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let getItemResult
        let getItem = localStorage.getItem('elId')
        if (getItem !== null) getItemResult = JSON.parse(getItem)
       this.props.setUserProfileThunkCreator(getItemResult)
    }

    render() {
        if(!this.props.isAuth){
            return <Navigate to={'/login'}/>
        }

        return (
            <div>
                <Profile
                    userProfile={this.props.userProfile}
                    isAuth={this.props.isAuth}
                />
            </div>

        );
    }
};


const mapStateToProps = (state: reducersType) => {

    return {
        userProfile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    setUserProfile,
    setUserProfileThunkCreator
})(ProfileContainer)