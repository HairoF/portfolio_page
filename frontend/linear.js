export default class TeslaCar {
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
const obj = {
    name: 'Pavel',
    age: 30
}
// for( let key in a){
//     console.log(key + ' ' + 'value');
// }
for( let key in obj){
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

function carry(a) {
    return function(b) {
        return console.log(a+b);
    }
}
carry(2)(5)

let forClosure = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a,b) {
//     return function(el,i) {
//         return el >= a && el <= b
//     }
// }
// console.log(forClosure.filter(inBetween(3,6)));

function inArray(array) {
    return function(el) {
        return array.includes(el)
    }
}
console.log(forClosure.filter(inArray([1,2,3])));

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(key) {
    return function(el, nextEl) {
        return el[key] > nextEl[key] ? 1 : -1
    }
}
users.sort(byField('name'))
users.sort(byField('age'))
console.log(users);

let a = 111;
const obj = {
    a: 222,
    foo() {
        () => console.log(6%3)()
    }
};
obj.foo()

console.log( Array.from(new Set('AAABBCCC')) );