import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./Footer";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {store} from "./redux/redux-store";
import {Users} from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";


type appState = {
    // state: StateType
    // dispatch: (action: any) => void
}

function App(props: appState) {
    return (
        <div className="AppWrapper">
            <Header/>
            <Navbar/>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                <Route path={'/users'} element={<UsersContainer/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
