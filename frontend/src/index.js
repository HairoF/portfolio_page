'use strict';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.textContent = 'Hello webpack';

    return element;
}

document.body.append(component());