// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2));

// let num=2;
// let kind = num ? (num>0 ? '양수':'음수'):'영';
// console.log(kind);

// let month = 11;
// let monthName;

// switch(month){
//     case 1 : monthName='1월'; break;
//     case 2 : monthName='2월'; break; 
//     case 3 : monthName='3월'; break;
//     case 4 : monthName='4월'; break;
//     case 5 : monthName='5월'; break;
//     case 6 : monthName='6월'; break;
//     case 7 : monthName='7월'; break;
//     case 8 : monthName='8월'; break;
//     case 9 : monthName='9월'; break;
//     case 10 : monthName='10월';  break;
//     case 11 : monthName='11월'; break;
//     case 12 : monthName='12월'; break;
//     default: monthName='없음';
// }
// console.log(monthName);

// for(let i=0;i<2;i++){
//     console.log(i);
// }

// let count=0;
// do { 
//     console.log(count); // ø 1 2 
//     count++ ; 
//     } while (count < 3);


// foo:{
//     console.log(1);
//     break foo;
//     console.log(2);
// }
// console.log('Done');

// outer: for(let i=0;i<3;i++){
//     for(let j=0;j<3;j++){
//         if(i+j==3) break outer;
//         console.log(`inner [${i},${j}] = ${i+j}`);
//     }
// }

// let string='hello';
// let search='l'
// let count=0;

// for(let i=0;i<string.length;i++){
//     console.log(`string [${string[i]}]`);
//     if(string[i]===search){
//         count++;
//         console.log(string[i]);
//     }
// }

// let x=10;
// let str = x.toString();
// console.log(typeof str, str);
// console.log(typeof x, x);

// function sayHello(){console.log('hello!');}
// function greet(callback){console.log('greeting:');  callback();}
// greet(sayHello);

const person = {
    firstName: 'hee',
    lastName: 'lee',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};
console.log(person);

person.fullName = 'mang kim';
console.log(person);
console.log(person.fullName);

// Object.freeze(person);
// console.log(Object.getOwnPropertyDescriptors(person));
Object.preventExtensions(person);
console.log(Object.getOwnPropertyDescriptors(person));

