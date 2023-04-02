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
    status: string
    userId: number | null
    // isAuth: boolean
    setUserProfileThunkCreator: (getItemResult: number | null) => void
    getUserProfileStatusThunkCreator: (getItemResult: number | null) => void
    updateProfileStatusThunkCreator: (status: string) => void
}


export class ProfileContainer extends React.Component<PropsType> {

    // componentDidMount() {
    //     let getItemResult
    //     // let getItem = localStorage.getItem('elId')
    //     let getItem = localStorage.getItem('elId')
    //     // if (getItem !== null) getItemResult = JSON.parse(getItem)
    //     if (getItem !== null) getItemResult = JSON.parse(getItem)
    //     this.props.setUserProfileThunkCreator(getItemResult)
    //     this.props.getUserProfileStatusThunkCreator(getItemResult)
    // }

    componentDidMount() {
        console.log(this.props.userId)
        let getItemResult
        // let getItem = localStorage.getItem('elId')
        let getItem = localStorage.getItem('elId')
        // if (getItem !== null) getItemResult = JSON.parse(getItem)
        if (getItem !== null) getItemResult = JSON.parse(getItem)
        this.props.setUserProfileThunkCreator(11593)
        this.props.getUserProfileStatusThunkCreator(11593)
    }

    // componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
    //     this.props.setUserProfileThunkCreator(this.props.userId)
    //     this.props.getUserProfileStatusThunkCreator(this.props.userId)
    // }

    //11593


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
        status: state.profilePage.status,
        userId: state.auth.userId
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

