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
            ? ( checkFields(target) ) ? handleAuthAction(auth, signButton, logButton) : null
            : ( checkFields(target) ) ? handleRegAction(auth, signButton, logButton) : null;

    }
}

function handleRegAction(auth:Reg, signButton:HTMLAnchorElement, logButton:HTMLAnchorElement) {
        
    signButton.style.display = 'none';
    logButton.style.pointerEvents = 'none';
    logButton.style.opacity = '0.5';
    logButton.textContent = 'Log out';

    setTimeout(() => {
        console.log('Now you signed up');
        auth.isAuth = true;
        logButton.style.pointerEvents = 'visible';
        logButton.style.opacity = '1';
    }, 2000);
}

function handleAuthAction(auth:Reg, signButton:HTMLAnchorElement, logButton:HTMLAnchorElement):void {
  
    signButton.style.display = 'none';
    logButton.style.pointerEvents = 'none';
    logButton.style.opacity = '0.5';
    logButton.textContent = 'Log out';

    setTimeout(() => {
        console.log('Now you logged in');
        auth.isAuth = true;
        logButton.style.pointerEvents = 'visible';
        logButton.style.opacity = '1';
    }, 2000);
}

function checkFields(target:HTMLElement):boolean {
    (!!(target.parentNode.querySelector<HTMLInputElement>('.input').value)) 
        ? (<HTMLFormElement>target.parentNode).classList.remove('show')
        : null;
    
    return !!(target.parentNode.querySelector<HTMLInputElement>('.input').value)
}