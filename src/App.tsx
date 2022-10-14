import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {MainContent} from "./MainContent";
import {Nav} from "./Nav";

function App() {
    return (
        <div className="AppWrapper">
            <Header/>
            <Nav/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
