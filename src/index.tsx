import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

import {store} from "./redux/redux-store";
import {ContextProvider} from "./StoreContext";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

//
// export let rerenderEntireTree = (state: any) => {

    root.render(
        <BrowserRouter>
                  <Provider store={store}>
                <App/>
            </Provider>

        </BrowserRouter>
    );
// }


//rerenderEntireTree(store.getState())
// store.subscribe(()=>{
//     let state=store.getState()
//     rerenderEntireTree(state)
// })

reportWebVitals();
