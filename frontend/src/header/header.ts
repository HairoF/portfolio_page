import './header.scss';
const burger = document.querySelector('.burger') as HTMLDivElement;


export default function fromHeader():void {
    burger.addEventListener('click', toggleBurger);
    // menuList.addEventListener('click', toggleBurger); // if enable does't work scrollAnchors()
    scrollAnchors('.menu__list');
}

function toggleBurger() {
        
    burger.classList.toggle('burger_open');

    const headerNav = document.querySelector('.header__nav') as HTMLElement;
        headerNav.classList.toggle('header__nav_mobile');
        
    const navbarMenu = document.querySelector('.navbar__menu');
        navbarMenu.classList.toggle('navbar__menu_mobile');

    const authBlock = document.querySelector('.authentication') as HTMLDivElement;
        authBlock.classList.toggle('authentication--mobile');

}

function scrollAnchors(selector:string):void {
    const menuList = document.querySelector(selector) as HTMLUListElement;

    menuList.addEventListener('click', (event:MouseEvent) => {
        const target = event.target as HTMLElement;

        if(target.tagName === "A") {
            event.preventDefault();

            toggleBurger();

            document.querySelector(`h3[data-${target.dataset.anchor}]`).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

    })
    
}
