'use strict';
import "./css/style.css";
import Icon from './assets/img/logo512.png';
import printMe from "./print";

function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.textContent = 'Hello webpack';
    button.textContent = 'Click me and check the console';

    button.addEventListener('click', printMe);

    const myIcon = new Image();
    myIcon.src = Icon;

    element.append(myIcon);
    element.append(button);
    
    return element;
}

document.body.append(component());