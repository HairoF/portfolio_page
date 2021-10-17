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

const obj = {
    name: 'Pavel',
    age: 30
}
Object.defineProperty(obj,'surname',{
    value: "KHAIRO",
    configurable: false,
    enumerable:true,
    writable: true
});
// delete obj.surname 
// console.log(obj.surname)

Object.defineProperty(Object.prototype, Symbol.iterator, {
    value: function*() {
        const arra = Object.entries(this);
        for(let i of arra) {
            yield arra[i]
        }
    },
    iterable: false
})
const a = [1,2,3]
for( let key in a){
    console.log(key + ' ' + 'value');
}
for( let key of obj){
    console.log(key + ' ' + obj[key]);
}

let b = 2
const a = [{a:1},{a:2}]
let c = a.find( (el) => el.a === b) 
console.log(c)

let iterableCollection = new Map();
iterableCollection.set('angel','Castiel')
iterableCollection.set('hunter', 'Dean')
iterableCollection.set('hunters brother', 'Samuel');
iterableCollection.set(505, 'squad from Star Wars')

for(let [key,value] in iterableCollection) {
    setTimeout( () => {
        console.log(`${key} -  is ${value}`)
    },1000)
}