import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//here props are the very important topic 
//here we have some code or element that have similar pattern so 
//by the props we can reduce effort by create onlly one prototype and then set the value according to that

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App />);