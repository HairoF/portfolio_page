import './header.scss';

export default function fromHeader():void {
    const burger = document.querySelector('.burger') as HTMLDivElement;
    burger.addEventListener('click', function(event:MouseEvent) {
        
        burger.classList.toggle('burger_open');
        
        const navbarMenu = document.querySelector('.navbar__menu');
        navbarMenu.classList.toggle('navbar__menu_mobile');
    })
}