import './slider.scss';

export default function slider():void {
    console.log('Slider');
    const sliderContainer = document.querySelector('.slider'),
          sliderContainerWidth:number = sliderContainer.clientWidth,
          sliderLength:(number) = document.querySelectorAll('.slider__cards-item').length - 1,
          sliderWidth:number = document.querySelector<HTMLElement>('.slider__cards-item').clientWidth + 20,// 20 is marginRight for clider__cards-item
        //   sliderWidtCSS:string = document.querySelector<HTMLElement>('.slider__cards-item').style.width,
          slidsField = document.querySelector<HTMLElement>('.slider__cards');

    if(!sliderLength) {
         throw new Error(`Sliders length is null `);
    }
    
    sliderContainer.addEventListener('click', (event:MouseEvent) => {
        const target = <HTMLElement>event.target;
        // console.log(target.className)

        if(target.className === 'slider__nav-next') {
            slidsField.scrollLeft += sliderWidth;

            if( <number>(slidsField.scrollLeft) >= ((sliderWidth - 20) * sliderLength) && sliderContainerWidth < 820) { 
                console.log('1');
                slidsField.scrollLeft = 0;
            }
            if( <number>(slidsField.scrollLeft) >= sliderContainerWidth && sliderContainerWidth > 420) { 
                console.log('2');
                slidsField.scrollLeft = 0;
            }
            // console.log(<number>(slidsField.scrollLeft) >= sliderContainerWidth, sliderContainerWidth > 420);
        }

        if(target.className === 'slider__nav-prev') {
            slidsField.scrollLeft -= sliderWidth;
            
            if(<number>(slidsField.scrollLeft) == 0) {
                slidsField.scrollLeft += sliderWidth * sliderLength;
            } 
            
        }
    });
}
