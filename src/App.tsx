import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./Footer";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from 'react-router-dom';
import {StateType} from "./redux/state";

type appState={
    state:StateType
    addPost:(postMessage:string)=>void
}

function App(props:appState) {
    return (
        <div className="AppWrapper">
            <Header/>
            <Navbar/>
            <Routes>
              <Route path={'/profile'} element={ <Profile state={props.state.profilePage.posts} addPost={props.addPost}/>}/>
              <Route path={'/dialogs'} element={  <Dialogs state={props.state.messagesPage}/>}/>

            </Routes>


            <Footer/>
        </div>
    );
}

export default App;
