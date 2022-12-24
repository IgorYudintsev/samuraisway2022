import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./Footer";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes } from 'react-router-dom';
import {DialogsType, MessageType, PostType} from "./index";

type dataType={
    posts:PostType[]
    dialogs:DialogsType[]
    messages:MessageType[]
}


function App(props:dataType) {
    return (
        <div className="AppWrapper">
            <Header/>
            <Navbar/>
            <Routes>
              <Route path={'/profile'} element={ <Profile posts={props.posts}/>}/>
              <Route path={'/dialogs'} element={  <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>

            </Routes>


            <Footer/>
        </div>
    );
}

export default App;
