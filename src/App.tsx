import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./Footer";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";



type appState = {
    // state: StateType
    // dispatch: (action: any) => void
}

function App(props: appState) {
    return (
        <div className="AppWrapper">
            {/*<Header/>*/}
            <HeaderContainer/>
            <Navbar/>
            <Routes>
                <Route path={'/profile/*'} element={<ProfileContainer/>}/>
                <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                <Route path={'/users'} element={<UsersContainer/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
