import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./Footer";
import {Profile} from "./components/Profile";
import {Navbar} from "./components/Navbar";

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
