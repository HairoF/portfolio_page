import './main.scss';
import './accordion.scss';
import './about-section/about-section.scss';

import './my-projects-section/my-projects-section.scss';
import handleTabClick from "./tabs";


export default function fromMain():void {
    handleTabClick('.my-projects__tabs');
    console.log('from Main');
    // const main = document.querySelector('.example') as HTMLFormElement;
    // main.addEventListener('submit', function(event:MouseEvent) {
    //     event.preventDefault();
        
    //     const data:{text: string, translate: boolean} = {
    //         text: ( <HTMLTextAreaElement>main.querySelector('.example__textarea') ).value,
    //         translate: (<HTMLInputElement>document.querySelector('.example__checkbox')).checked

    //     };
    //     console.log(data);

    // })
}
