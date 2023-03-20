import React from 'react';
import {Profile} from "./Profile";
import {reducersType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {
    getUserProfileStatusThunkCreator,
    setUserProfile,
    setUserProfileThunkCreator, updateProfileStatusThunkCreator,
    UserProfileType
} from "../../../redux/profile-reducer";
import {WithAuthRedirectComponent} from "../../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


type PropsType = {
    setUserProfile: (profile: any) => void
    userProfile: UserProfileType
    status:string
   // isAuth: boolean
    setUserProfileThunkCreator: (getItemResult: number) => void
    getUserProfileStatusThunkCreator: (getItemResult: number) => void
    updateProfileStatusThunkCreator:(status:string)=>void
}


export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let getItemResult
        // let getItem = localStorage.getItem('elId')
        let getItem = localStorage.getItem('elId')
        // if (getItem !== null) getItemResult = JSON.parse(getItem)
        if (getItem !== null) getItemResult = JSON.parse(getItem)
        this.props.setUserProfileThunkCreator(getItemResult)
        this.props.getUserProfileStatusThunkCreator(getItemResult)
    }

    render() {
        return (
            <div>
                <Profile
                    userProfile={this.props.userProfile}
                    status={this.props.status}
                    updateProfileStatusThunkCreator={this.props.updateProfileStatusThunkCreator}
                />
            </div>

        );
    }
};


const mapStateToProps = (state: reducersType) => {
    return {
        userProfile: state.profilePage.profile,
        status:state.profilePage.status,
        }
}


export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        setUserProfileThunkCreator,
        getUserProfileStatusThunkCreator,
        updateProfileStatusThunkCreator
    }),
    WithAuthRedirectComponent
)(ProfileContainer)

