import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./Footer";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App() {
    return (
        <div className="AppWrapper">
            <Header/>
            <Navbar/>
            {/*<Profile/>*/}
            <Dialogs/>
            <Footer/>
        </div>
    );
}

export default App;
