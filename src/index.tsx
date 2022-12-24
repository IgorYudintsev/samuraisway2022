import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const posts = [
    {
        id: 1,
        message: 'Hi, how are you',
        likesCount: 0
    },
    {
        id: 2,
        message: 'I`ts my first post',
        likesCount: 13
    },
]
export type  PostType= {
    id: number,
    message: string,
    likesCount: number
}


const dialogs = [
    {
        id: 1,
        name: 'Igor'
    },
    {
        id: 2,
        name: 'Olga'
    },
    {
        id: 3,
        name: 'Sasha'
    },
]

export type DialogsType={
    id: number,
    name: string
}

const messages = [
    {
        id: 1,
        message: 'Hi'
    },
    {
        id: 2,
        message: 'How are you?'
    },
    {
        id: 3,
        message: 'Hellow'
    },
]

export type MessageType={
    id: number,
    message: string
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
