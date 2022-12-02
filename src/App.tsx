import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./Footer";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="AppWrapper">
            <Header/>
            <Navbar/>
            <Routes>
              <Route path={'/profile'} element={ <Profile/>}/>
              <Route path={'/dialogs'} element={  <Dialogs/>}/>

            </Routes>


            <Footer/>
        </div>
    );
}

export default App;
