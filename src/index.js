// library that allows us to build React components
import React from 'react';
// allows us to work with components in context of the DOM
import ReactDOM from 'react-dom';
// import App component
import App from './App';


// render App component in its JSX format to the target we created
ReactDOM.render(
    <App cat={5} />, 
    document.getElementById('root')
);

