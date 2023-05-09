import React from 'react';
import {Profile} from "./Profile";
import {reducersType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {
    getUserProfileStatusThunkCreator, savePhotoThunkCreator,
    setUserProfile,
    setUserProfileThunkCreator, updateProfileStatusThunkCreator,
    UserProfileType
} from "../../../redux/profile-reducer";
import {WithAuthRedirectComponent} from "../../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


type PropsType = {
    setUserProfile: (profile: any) => void
    userProfile: UserProfileType
    status: string
    userId: number | null
    // isAuth: boolean
    setUserProfileThunkCreator: (getItemResult: number | null) => void
    getUserProfileStatusThunkCreator: (getItemResult: number | null) => void
    updateProfileStatusThunkCreator: (status: string) => void
    savePhotoThunkCreator:(file: File) => void,
}


export class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        this.props.setUserProfileThunkCreator(11593)
        this.props.getUserProfileStatusThunkCreator(11593)
    }

    componentDidMount() {
        let getItemResult
        // let getItem = localStorage.getItem('elId')
        let getItem = localStorage.getItem('elId')
        // if (getItem !== null) getItemResult = JSON.parse(getItem)
        if (getItem !== null) getItemResult = JSON.parse(getItem)

        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.userId!==prevProps.userId){
            this.refreshProfile()
        }

    }

    //11593


    render() {
        return (
            <div>
                <Profile
                    isOwner={!this.props.userId}
                    userProfile={this.props.userProfile}
                    status={this.props.status}
                    updateProfileStatusThunkCreator={this.props.updateProfileStatusThunkCreator}
                    savePhoto={this.props.savePhotoThunkCreator}
                />
            </div>

        );
    }
};


const mapStateToProps = (state: reducersType) => {
    return {
        userProfile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId
    }
}


export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        setUserProfileThunkCreator,
        getUserProfileStatusThunkCreator,
        updateProfileStatusThunkCreator,
        savePhotoThunkCreator
    }),
    WithAuthRedirectComponent
)(ProfileContainer)

