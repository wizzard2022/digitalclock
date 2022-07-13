import React, { useState } from "react";
import './index.css';

const App = () => {
    let DTime = new Date().toLocaleTimeString();

    const[CDTime, setCtime]=useState(DTime);

    const UpdateTime = () => {
        DTime = new Date().toLocaleTimeString();
        setCtime(DTime);
    }

    setInterval(UpdateTime);

    return (
        <>
            <h1>{CDTime}</h1>
        </>
    );
}

export default App;