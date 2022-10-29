import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./Footer";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="AppWrapper">
            <Header/>
            <Navbar/>
            <Profile/>
            <Footer/>
        </div>
    );
}

export default App;
