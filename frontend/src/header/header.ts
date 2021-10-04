import './header.scss';
const burger = document.querySelector('.burger') as HTMLDivElement;
const menuList = document.querySelector('.menu__list') as HTMLUListElement;
export default function fromHeader():void {
    burger.addEventListener('click', toggleBurger);
    menuList.addEventListener('click', toggleBurger);
}

function toggleBurger(event:MouseEvent) {
        
    burger.classList.toggle('burger_open');

    const headerNav = document.querySelector('.header__nav') as HTMLElement;
        headerNav.classList.toggle('header__nav_mobile');
        
    const navbarMenu = document.querySelector('.navbar__menu');
        navbarMenu.classList.toggle('navbar__menu_mobile');
}