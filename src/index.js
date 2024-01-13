import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Main from './Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container py-4 px-3 mx-auto">
        <h1>SWAPI</h1>
        <Main />
    </div>



);

