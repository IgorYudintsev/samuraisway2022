import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {InitialStateType, logOutTC, setUserData, setUserProfileThunkCreator} from "../../redux/auth-reducer";
import {reducersType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";


type PropsType = {
    login: string | null
    isAuth: boolean,
    setUserData: (payload: InitialStateType,isAuth:boolean) => void
    //setUserProfileThunkCreator: () => void
    logOutTC:()=>void
}

interface MapStateToPropsType {
    isAuth: boolean,
    login: string | null
}


class HeaderContainer extends React.Component<PropsType> {
    // componentDidMount() {
    //      // this.props.setUserProfileThunkCreator()
    // }

    render() {
        // console.log(this.props)
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: reducersType): MapStateToPropsType => {
      return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {
    setUserData,
   //setUserProfileThunkCreator,
     logOutTC
})(HeaderContainer)
//                       забрасываем это (mapStateToProps, {setUserData})  в (HeaderContainer)


//------------------------------------------------------------------------------------

// import React from "react";
// import {Header} from "./Header";
// import axios from "axios";
// import {connect} from "react-redux";
// import {InitialStateType, logOutTC, setUserData, setUserProfileThunkCreator} from "../../redux/auth-reducer";
// import {reducersType} from "../../redux/redux-store";
// import {authAPI} from "../../api/api";
//
//
// type PropsType = {
//     login: string | null
//     isAuth: boolean,
//     setUserData: (payload: InitialStateType,isAuth:boolean) => void
//     setUserProfileThunkCreator: () => void
//     logOutTC:()=>void
// }
//
// interface MapStateToPropsType {
//     isAuth: boolean,
//     login: string | null
// }
//
//
// class HeaderContainer extends React.Component<PropsType> {
//     componentDidMount() {
//         this.props.setUserProfileThunkCreator()
//     }
//
//     render() {
//         // console.log(this.props)
//         return (
//             <Header {...this.props}/>
//         )
//     }
// }
//
// const mapStateToProps = (state: reducersType): MapStateToPropsType => {
//     return {
//         isAuth: state.auth.isAuth,
//         login: state.auth.login
//     }
// }
//
// export default connect(mapStateToProps, {
//     setUserData,
//     setUserProfileThunkCreator,
//     logOutTC
// })(HeaderContainer)
// //                       забрасываем это (mapStateToProps, {setUserData})  в (HeaderContainer)