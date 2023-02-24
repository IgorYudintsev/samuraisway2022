import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {reducersType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";

type PropsType = {
    setUserProfile: (profile: any) => void
    userProfile: UserProfileType
}

export class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((responce) => {
                this.props.setUserProfile(responce.data)
                }
            )
    }

    render() {
        return (
            <div>
                <Profile userProfile={this.props.userProfile}/>
            </div>

        );
    }
};


const mapStateToProps = (state: reducersType) => {
    //console.log(state.profilePage.profile)
    return {
        userProfile: state.profilePage.profile
    }
}

export default connect(mapStateToProps,
    {setUserProfile}
)(ProfileContainer)