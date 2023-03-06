import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, setUserData} from "../../redux/auth-reducer";
import {reducersType} from "../../redux/redux-store";


type PropsType = {
    login: string | null
    isAuth: boolean,
    setUserData: (data: InitialStateType) => void
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((responce) => {
                    if (responce.data.resultCode === 0) {
                        // let {id, email, login} = responce.data.data
                        this.props.setUserData(responce.data.data)
                    }
                }
            )
    }

    render() {
        console.log(this.props)
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: reducersType) => {
    //debugger
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer)
//                       забрасываем это (mapStateToProps, {setUserData})  в (HeaderContainer)
