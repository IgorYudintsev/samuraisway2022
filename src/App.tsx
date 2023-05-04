import React, {lazy, Suspense, useEffect} from 'react';
import './App.css';
import {Footer} from "./Footer";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {useAppDispatch, useAppSelector} from "./hooks/hook";
import {setInitializedTC} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader";
//import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileInfo/ProfileContainer"));

function App() {
    const initialized = useAppSelector<boolean>(state => state.app.initialized)
    let dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setInitializedTC())
    })

    return (
        !initialized
            ? <Preloader/>
            : <div className="AppWrapper">
                {/*<Header/>*/}
                <HeaderContainer/>
                <Navbar/>
                <Routes>
                    <Route path={'/profile/*'} element={<Suspense fallback={<div>Loading...</div>}>
                        <ProfileContainer/>
                    </Suspense>
                    }/>

                    {/*<Route path={'/dialogs'} element={<DialogsContainer/>}/>*/}
                    <Route path='/dialogs' element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <DialogsContainer/>
                        </Suspense>
                    }
                    />
                    <Route path={'/users'} element={<UsersContainer/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Routes>
                <Footer/>
            </div>
    );
}

export default App;

//----------------------------------------------------------------
// import React from 'react';
// import './App.css';
// import {Header} from "./components/Header/Header";
// import {Footer} from "./Footer";
// import {Profile} from "./components/Profile/ProfileInfo/Profile";
// import {Navbar} from "./components/Navbar/Navbar";
// import {Route, Routes} from 'react-router-dom';
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
// import HeaderContainer from "./components/Header/HeaderContainer";
// import {Login} from "./components/Login/Login";
// import {connect} from "react-redux";
// import {InitialStateType, logOutTC, setUserData, setUserProfileThunkCreator} from "./redux/auth-reducer";
//
// type PropsType = {
//     login: string | null
//     isAuth: boolean,
//     setUserData: (payload: InitialStateType,isAuth:boolean) => void
//     setUserProfileThunkCreator: () => void
//     logOutTC:()=>void
// }
//
//
// class App extends React.Component<PropsType> {
//     componentDidMount() {
//         this.props.setUserProfileThunkCreator()
//     }
//
//     render() {
//         return (
//             <div className="AppWrapper">
//                 {/*<Header/>*/}
//                 <HeaderContainer/>
//                 <Navbar/>
//                 <Routes>
//                     <Route path={'/profile/*'} element={<ProfileContainer/>}/>
//                     <Route path={'/dialogs'} element={<DialogsContainer/>}/>
//                     <Route path={'/users'} element={<UsersContainer/>}/>
//                     <Route path={'/login'} element={<Login/>}/>
//                 </Routes>
//                 <Footer/>
//             </div>
//         );
//     }
// }
//
//
// export default connect(null, {
//        setUserProfileThunkCreator,
//   })(App)


//----------------------------------------------------------------------
// import React from 'react';
// import './App.css';
// import {Header} from "./components/Header/Header";
// import {Footer} from "./Footer";
// import {Profile} from "./components/Profile/ProfileInfo/Profile";
// import {Navbar} from "./components/Navbar/Navbar";
// import {Route, Routes} from 'react-router-dom';
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
// import HeaderContainer from "./components/Header/HeaderContainer";
// import {Login} from "./components/Login/Login";
//
//
//
//
// function App() {
//     return (
//         <div className="AppWrapper">
//             {/*<Header/>*/}
//             <HeaderContainer/>
//             <Navbar/>
//             <Routes>
//                 <Route path={'/profile/*'} element={<ProfileContainer/>}/>
//                 <Route path={'/dialogs'} element={<DialogsContainer/>}/>
//                 <Route path={'/users'} element={<UsersContainer/>}/>
//                 <Route path={'/login'} element={<Login/>}/>
//             </Routes>
//             <Footer/>
//         </div>
//     );
// }
//
// export default App;