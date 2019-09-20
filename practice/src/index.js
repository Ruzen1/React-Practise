import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user){
    return user.firstname + ' ' + user.lastname;
}

const user = {
    firstname:'Harper',
    lastname:'Perez',
};

const element = <div tabIndex ="1">
    <h1>Hello!</h1>
    <h2>Good to see you here</h2>
</div>;

ReactDOM.render(
    element,
    document.getElementById('root')
);