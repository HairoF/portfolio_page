import './tabs.scss';

export default function handleTabClick(selector: string):void {
    try {
        const tabsContainer = document.querySelector(selector) as HTMLElement;
        tabsContainer.addEventListener('click', (event:MouseEvent) => {
            const target = event.target as HTMLElement;
            // console.log(target.textContent, target );
            if(target.className === 'tabs__header-item') {
                changeTabs(tabsContainer, target);
            }
            const parent = target.parentNode as HTMLElement;
            if( parent.classList[0] ==='accordion__item' ) {
                // console.log( parent );

                changeBlog(tabsContainer, parent);
            }
        })
    } catch (error) {
        throw new Error('Error from Tabs');
    }
 
}
function changeTabs(tabContainer:HTMLElement, target:HTMLElement):void {
        const activeTabDiv = tabContainer.querySelector('.tabs__header-item.active') as HTMLElement;
    if(activeTabDiv) {
        activeTabDiv.classList.remove('active');
    }
    target.classList.add('active')

    const contentLeftText = tabContainer.querySelector('.content__left') as HTMLSpanElement;

    contentLeftText.textContent = target.textContent;
}

function changeBlog(tabContainer:HTMLElement, target:HTMLElement):void {
        const activeAccordionDiv = tabContainer.querySelector('.accordion__item.active') as HTMLElement;
        // if(activeAccordionDiv) {
        //     activeAccordionDiv.classList.remove('active');
        // }
        target.classList.toggle('active')

        // const dataTabID:string = (target.dataset.content);
        // const toActiveContentDiv = tabContainer.querySelector(`.accordion__item[data-content='${dataTabID}']`) as HTMLDivElement;

}
