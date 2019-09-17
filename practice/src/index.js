import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user){
    return user.firstname + '' + user.lastName;
}

const user = {
    firstname:'Harper',
    lastname:'Perez'
};

const element = (
    <h1>
        Hello,{formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);