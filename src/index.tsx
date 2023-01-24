import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import state, {addPost, StateType, suscribe, updateNewPostText} from "./redux/state";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


export let rerenderEntireTree = (state: StateType) => {
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
    );
}

// export let rerenderEntireTree=()=>{
//     root.render(
//         <BrowserRouter>
//             <App state={state} addPost={addPost}/>
//         </BrowserRouter>
//     );
// }

rerenderEntireTree(state)
suscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
