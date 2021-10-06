
function handleTabClick(selector: string):void {
    try {
        const tabsContainer = document.querySelector(selector);
        tabsContainer.addEventListener('click', (event:MouseEvent) => {
            const target = event.target as HTMLElement;
            
            if(target.className === 'tabs__header-item') {
                const activeTabDiv = tabsContainer.querySelector('.tabs__header-item.active'),
                    activeContentDiv = tabsContainer.querySelector('.accordion__item.active');
                if(activeTabDiv && activeContentDiv) {
                    activeTabDiv.classList.remove('active');
                    activeContentDiv.classList.remove('active');
                }
                
                const dataTabID:string = (target.dataset.tab);

                const toActiveTabDiv = tabsContainer.querySelector(`.tabs__header-item[data-tab='${dataTabID}']`) as HTMLDivElement,
                toActiveContentDiv = tabsContainer.querySelector(`.accordion__item[data-content='${dataTabID}']`) as HTMLDivElement;
                
                toActiveTabDiv.classList.add('active');    
                toActiveContentDiv.classList.add('active');

            }
        })
    } catch (error) {
        console.log(error) 
    }

}
export {handleTabClick}