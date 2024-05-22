let word = 'word';

word = 45;

console.log(word);

let arr: number[] = [45, 32];

// let arr2: [number,number,number] = [1,2,3];

// arr2[3] = 4;

// arr2.push(4);

let arr2: [] = [];
arr2.push(4, 'hej',3,'fem');
console.log(arr2);

function add(x:number, y:number):number{
    return x+y;
}

add(1,2);

function higherOrderFunc(func:Function):void{
    func();
}



function test(x:any, y?:number):void{
    console.log(x,y);
    
}

test('gf');
test(4,56);
test();

type Person = {
    name: string,
    age: number,
    sayHello: Function,
    isHungry?: boolean
}

const person1:Person = {
    name: 'Lovisa',
    age: 27,
    sayHello(){
        console.log('hello!');
        
    }
}

person1.sayHello();

console.log(person1.name, person1.isSleepy);

type Group = Person [];

const group:Group = [person1, person1, 324]
