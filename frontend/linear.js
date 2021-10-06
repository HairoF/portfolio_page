class TeslaCar {
    constructor(model, prive, interior, autopilot) {
        this.model = model;
        this.prive = prive;
        this.interior = interior;
        this.autopilot;
    }
    
}

const car1 = new TeslaCar('S', 5000, 'white', 'black', false);
const car2 = new TeslaCar('M', 4000, 'blue', 'black', false);
car1.autopilot = true;
car2.autopilot = false;
car2.rus = 'Yes';
console.log(car1)
console.log(car2)