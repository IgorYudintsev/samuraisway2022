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
        let getItemResult
        let getItem = localStorage.getItem('elId')
        if (getItem !== null)  getItemResult = JSON.parse(getItem)


        console.log(getItemResult)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${getItemResult}`)
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

    return {
        userProfile: state.profilePage.profile
    }
}


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)