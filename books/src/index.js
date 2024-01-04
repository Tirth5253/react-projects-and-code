import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import './context/book';//here we have imported the context file
import {Provider} from './context/book';//here we have only imported the provider bcse its the funtion of custom 
                                       //provider which consits all the provider code that we want to use



const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render( ///here we have wrap the APP file becase we want to share that all the data into the App file
             //here the value prop contains the thing that we want to share with the file we wraped
             //only the file under <BooksContext.Provider> will have access to that data
             //THIS IS THE STEP NO.2
<Provider value={5}>
    <App />
</Provider>
);