import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Input from './Input';
import GetButton from './GetButton';
import Spiner from './Spiner';
import ResultSwapi from './ResultSwapi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container py-4 px-3 mx-auto">
        <h1>SWAPI</h1>
        <div className="mb-3 input-group input-group-lg">
            <Input />
            <GetButton />
        </div>
        <div className="result-swapi p-2 bg-light-subtle border rounded-2 border-light-subtle">
            <h2>Result:</h2>
            <Spiner />
            <ResultSwapi />
        </div>
    </div>



);

