import './auth.scss';
interface Reg {
    isAuth: boolean
}
export default function authentication():void {
    const auth = document.querySelector('.authentication') as HTMLDivElement;
    let regis = {isAuth:false};
    auth.addEventListener('click', showWindow(regis) )

}

function showWindow(auth:Reg) {
    const signButton = document.querySelector('.sign[data-id="sign"]') as HTMLAnchorElement,
          logButton = document.querySelector('.log[data-id="log"]') as HTMLAnchorElement;
    
    return function(event:MouseEvent) {
        event.preventDefault()
        console.log('auth is: ', auth);

        const target = <HTMLElement>event.target
        
    
        auth.isAuth
            ? authorized(auth, signButton, logButton)
            : notAuthorized(target, auth, signButton, logButton); 
    
    }
}


function authorized(auth:Reg, signButton:HTMLAnchorElement, logButton:HTMLAnchorElement) {
    auth.isAuth = false;

    signButton.style.display = 'inline';
    logButton.textContent = 'Log in';
}

function notAuthorized(target:HTMLElement, auth:Reg, signButton:HTMLAnchorElement, logButton:HTMLAnchorElement):void {
    const authWindow = document.querySelector<HTMLFormElement>('.authentication-window[data-id="auth"]'),
          regWindow = document.querySelector<HTMLFormElement>('.authentication-window[data-id="regis"]');

    if(target.classList.contains('log')) {
        console.log('log');

        auth.isAuth ? null : authWindow.classList.toggle('show');
        
        regWindow.classList.remove('show');

    } else if(target.classList.contains('sign')) {
        console.log('sign', );
        
        auth.isAuth ? null : regWindow.classList.toggle('show')

        authWindow.classList.remove('show');

    } else if( target.classList.contains('authentication-window__submit') ) {

        
        (<HTMLFormElement>target.parentNode).dataset.id === 'auth'
            ? handleAuthAction(auth, signButton, logButton, target)
            : handleRegAction(auth, signButton, logButton, target);

    }
}

function handleRegAction(auth:Reg, signButton:HTMLAnchorElement, logButton:HTMLAnchorElement, target:HTMLElement) {
    return new Promise(function(resolve, reject) {
        isInvalidFields(target) ? resolve(true) : reject('Invalid field')
    }).then(() => {
        console.log('sending to server...');
        logButton.style.pointerEvents = 'none';
        logButton.style.opacity = '0.5';
    }).then(() => {
        return new Promise(resolve => setTimeout(() => {
            console.log('Welcome friend!')
            resolve(true) 

        }, 2000) )
    }).then(() => {
        (<HTMLFormElement>target.parentNode).classList.remove('show');
        signButton.style.display = 'none';
        logButton.textContent = 'Log out';

        logButton.style.pointerEvents = 'visible';
        logButton.style.opacity = '1';

        auth.isAuth = true;
        console.log("Now you logged in");
    }).catch((message) => {
        console.log(message);
        (<HTMLFormElement>target.parentNode).style.boxShadow = '2px 2px 4px 2px red';
        setTimeout(() => {
            (<HTMLFormElement>target.parentNode).style.boxShadow = 'none';
            logButton.style.pointerEvents = 'visible';
            logButton.style.opacity = '1';
        }, 1500);
    })
}

function handleAuthAction(auth:Reg, signButton:HTMLAnchorElement, logButton:HTMLAnchorElement, target:HTMLElement) {
    return new Promise(function(resolve, reject) {
        isInvalidFields(target) ? resolve(true) : reject('Invalid field')
    }).then(() => {
        console.log('sending to server...');
        logButton.style.pointerEvents = 'none';
        logButton.style.opacity = '0.5';
    }).then(() => {
        return new Promise( (resolve,reject) => setTimeout(() => {
            console.log('We find you!')
            resolve(true)

        }, 2000) )
    }).then(() => {
        (<HTMLFormElement>target.parentNode).classList.remove('show');
        signButton.style.display = 'none';
        logButton.textContent = 'Log out';

        logButton.style.pointerEvents = 'visible';
        logButton.style.opacity = '1';

        auth.isAuth = true;
        console.log("Now you logged in");
    }).catch((message) => {
        console.log(message);
        (<HTMLFormElement>target.parentNode).style.boxShadow = '2px 2px 4px 2px red';
        setTimeout(() => {
            (<HTMLFormElement>target.parentNode).style.boxShadow = 'none';
            logButton.style.pointerEvents = 'visible';
            logButton.style.opacity = '1';
        }, 1500);
    })
}

function isInvalidFields(target:HTMLElement):boolean {
    const inputs = Array.from(target.parentNode.querySelectorAll('.input') as NodeListOf<Element>);

    let pass:boolean = inputs.every((element:HTMLInputElement) => !!element.value );

    if(inputs.length > 0 && !pass ) {
        
        inputs.forEach( (element:HTMLInputElement) => {
            (!element.value) 
                ? element.classList.add('authentication-window--error') 
                : element.classList.remove('authentication-window--error');
        })
    } else {

        inputs.forEach( (element:HTMLInputElement) => {
            element.classList.remove('authentication-window--error');
            element.value = '';
        })
    }    
    return pass
}