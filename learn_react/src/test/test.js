import React from 'react';
import ReactDOM from 'react-dom/client';
function Car() {
    return <h1>My car</h1>
}

let reactDom;
const root = reactDom.createRoot(document.getElementById('root'));
root.render(<Car/>);

