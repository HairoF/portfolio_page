import './main.scss';
import './accordion.scss';
import './about-section/about-section.scss';

import './my-projects-section/my-projects-section.scss';
import handleTabClick from "./tabs";
import slider from './slider';
import canvasApp from './canvas';

export default function fromMain():void {
    try {
        handleTabClick('.my-projects__tabs');
        slider();

        canvasApp();
    } catch (error) {
        console.log('error from Main')
    }
}






    // const bodyE = document.body as HTMLBodyElement; 
    // window.addEventListener( 'resize', () =>{
    //     const bodyWidth:number = document.body.offsetWidth;
    //     if(bodyWidth < 1270) {
    //         const feedbackButton = document.querySelector('.feedback__button') as HTMLElement;
    //         let computedMarginTop:number = - bodyWidth / ( (bodyWidth / 100) + 3 ) ;
    //         feedbackButton.style.marginTop = `${computedMarginTop}px`;
    //         console.log('from Main',feedbackButton.style.margin)
    //         console.log(`bodyWidth: ${bodyWidth} buttonMargin: ${computedMarginTop}`);
    //     } else {
    //         const feedbackButton = document.querySelector('.feedback__button') as HTMLElement;
    //         feedbackButton.style.marginTop = `-100px`;

    //     }
    // })