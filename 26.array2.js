/*
    고차함수 (high order function) : 함수를 인자로 전달받는 함수
    콜백함수 (callback function) : 인자로 전달되는 함수
*/

// 배열 메소드
const arr = [1,10,9,4,5];

console.log(Array.isArray(arr)); // true
console.log(arr.indexOf(10)); // 1
console.log(arr.includes(9)); // true

// stack : first in last out
console.log(arr.push(7)); // 6, 배열 맨 뒤에 요소를 삽입하고 배열의 크기를 반환
console.log(arr.pop()); // 7, 배열 맨 뒤의 요소를 제거하고 제거된 요소를 반환

// queue : first in first out
console.log(arr.unshift(2)); // 6, 배열 맨 앞에 요소를 삽입하고 배열의 크기를 반환
console.log(arr.shift()); // 2, 배열 맨 앞의 요소를 제거하고 제거된 요소를 반환

console.log(arr.concat(3, 8)); // 배열 3, 8 추가

console.log(arr.splice(1, 2)); // 1번 인덱스에서 2개 요소 제거
console.log(arr.splice(1,2,3,4)); // 1번 인덱스에서 2개 요소 제거한 후 3,4 추가

console.log(arr.slice(1,3)); // 1번 인덱스에서 3번 인덱스전까지의 새로운 배열 반환

console.log(arr.join()); // 요소들을 붙인 문자열 반환

console.log(arr.reverse()); // 요소 순서를 180도 회전

console.log(arr.fill(10)); // 모든 요소를 10으로 채움

const arr2 = [[1,2],[3,4]]
console.log(arr2.flat()); // [ 1, 2, 3, 4 ], 평탄화

// 배열 고차 함수
const arr3 = [1,2,3,4,5];

// 배열의 각 요소마다 콜백함수를 실행하고 반환 없음
const forEachArr = arr3.forEach(function(ele){
    console.log(ele);
});
console.log(forEachArr); // undefined

// 배열 각 요소마다 콜백함수를 실행하고 결과 배열을 반환
const mapArr = arr3.map(function(ele){
    return ele ** ele;
});
console.log(mapArr);

// 배열의 각 요소마다 콜백함수를 실행하고, 콜백함수의 결과가 true인 요소들의 배열을 반환
const filterArr = arr3.filter(function(ele){
    return ele % 2;
});
console.log(filterArr);

// 배열의 각 요소에 콜백함수를 실행하고 실행 결과를 다음번 콜백함수 호출시 전달
// acc: 누적변수, curr: 현재요소
// acc=0, curr=1
// acc=1, curr=2
// acc=3, curr=3
// acc=6, curr=4
// acc=10, curr=5
// acc=15
const sum = arr3.reduce(function(acc, curr){
    return acc + curr;
}, 0); // acc의 초기값 0
console.log(sum);

// 콜백함수의 결과가 true인 경우가 있으면 true
const some = arr3.some(function(ele){
    return ele == 5;
});
console.log(some); // ture

// 콜백함수의 결과가 모두 true인 경우 true
const every = arr3.every(function(ele){
    return ele < 10;
});
console.log(every); // true

// 콜백함수의 결과가 true인 첫번째 요소 리턴
const find = arr3.find(function(ele){
    return ele < 3;
});
console.log(find);

const findIndex = arr3.findIndex(function(ele){
    return ele > 3;
});
console.log(findIndex);

// sort 고차함수
const numbers = [4,2,9,1,5];
numbers.sort((a,b) => a-b); // 오름차순 정렬
console.log(numbers);
numbers.sort((a,b) => b-a); // 내림차순 정렬
console.log(numbers);

const words = ['banana','apple','cherry','peach'];
words.sort(); // 오름차순 정렬
console.log(words);
words.sort((a,b) => (a<b ? 1 : -1)); // 내림차순 정렬
console.log(words);

const people = [
    {name: '홍길동', age: 20},
    {name: '이순신', age: 40},
    {name: '강감찬', age: 30},
];
// age 오름차순 / 내림차순 정렬
people.sort((a,b) => a.age - b.age);
console.log(people);
people.sort((a,b) => b.age - a.age);
console.log(people);

// name 오름차순 / 내림차순 정렬
people.sort((a,b) => a.name>b.name ? 1:-1);
console.log(people);
people.sort((a,b) => a.name<b.name ? 1:-1);
console.log(people);

const fruits = ['apple', 'banana', 'pineapple', 'pear'];
// 문자열 길이 오름차순 / 내림차순
fruits.sort((a,b) => a.length-b.length);
console.log(fruits);
fruits.sort((a,b) => b.length-a.length);
console.log(fruits);

const nums = [5,8,3,10,1,4];
// 짝수를 앞에, 홀수를 뒤에 정렬
//nums.sort((a,b) => a%2==0 ? -1 : 1);
nums.sort((a,b) => {
    if(a%2==0 && b%2!=0) return -1;
    if(a%2!=0 && b%2==0) return 1;
    return a-b;
});
console.log(nums);

const nested = [[3,4],[1,2],[5,6],[0,1]];
// 중첩배열의 첫번째 원소 기준 오름차순 정렬
nested.sort((a,b) => a[0]>b[0] ? 1:-1);
console.log(nested);

const students = [
    {name:'홍길동', score:65},
    {name:'이길동', score:95},
    {name:'최길동', score:65},
    {name:'김길동', score:55},
];
// 점수에 대해 내림차순 정렬, 점수가 같으면 이름에 대해 오름차순 정렬
students.sort((a,b) => {
    if(b.score != a.score) return b.score - a.score;
    return (a.name>b.name) ? 1:-1;
});
console.log(students);

const items = ['item20','item3','item100','item1'];
// item 숫자 기준으로 오름차순 정렬
items.sort((a,b) => a.slice(4) - b.slice(4));
console.log(items);

const obj = [
    {name: {fname:'길동', lanme:'홍'}, age:30},
    {name: {fname:'순신', lanme:'이'}, age:20},
    {name: {fname:'강찬', lanme:'강'}, age:40},
    {name: {fname:'영', lanme:'최'}, age:20},
    {name: {fname:'관순', lanme:'유'}, age:20},
];
// 나이 기준으로 내림차순 정렬, 나이가 같으면 풀네임(lname+fname) 내림차순 정렬
obj.sort((a,b) => {
    if (a.age != b.age) return b.age-a.age;
    return ((a.name.lanme+a.name.fname) > (b.name.lanme+b.name.fname)) ? 1:-1
});
console.log(obj);

// 배열 고차함수 실습
const arr1 = [1, '2', 3, '4', 5, '6', 7, '8'];
// 1. arr1 배열의 모든 요소를 숫자타입으로 변경 (forEach 사용)
const forEachArr1 = arr1.forEach(function (ele) {
    console.log(+ele);
});
arr1.forEach(ele => parseInt(ele));
arr1.forEach(ele => console.log(typeof +ele));

// 2. arr1 배열의 모든 요소를 3배한 배열을 출력 (map 사용)
const mapArr1 = arr1.map(function(ele){
    return ele*3;
});
console.log(mapArr1);

// 3. arr1 배열의 요소 중 5의 배수가 있는지 확인 (some 사용)
const someArr1 = arr1.some(function(ele){
    return ele%5==0;
});
console.log(someArr1);

// 4. arr1 배열의 모든 요소가 짝수인지 확인 (every 사용)
const everyArr1 = arr1.every(function(ele){
    return ele%2==0;
});
console.log(everyArr1);

// 5. arr1 배열의 모든 요소의 합을 출력 (reduce 사용)
const reduceArr1 = arr1.reduce(function(acc, curr){
    return acc+(+curr);
},0);
console.log(reduceArr1);

// 6. arr1 배열에서 3의 배수들만 추출하여 배열 생성해 출력 (filter 사용)
const filterArr1 = arr1.filter(function(ele){
    return ele%3 == 0;
});
console.log(filterArr1);

// 7. arr1 배열에서 짝수들만 추출하여 각각 3배한 배열의 합계를 출력 (filter, map, reduce 사용)
const objArr1 = arr1.filter(function(ele){
    return ele%2==0;
}).map(function(ele){
    return ele*3;
}).reduce(function(acc, curr){
    return acc+curr;
},0);
console.log(objArr1);


const persons = [
    {name:'홍길동', age:20, address:{si:'서울시', dong:'역삼동'}},
    {name:'이길동', age:40, address:{si:'서울시', dong:'신사동'}},
    {name:'김길동', age:30, address:{si:'서울시', dong:'논현동'}},
    {name:'최길동', age:60, address:{si:'평양시', dong:'평양동'}},
    {name:'박길동', age:50, address:{si:'개성시', dong:'개성동'}}
];
// 8. 서울시에 사는 사람들의 나이의 합계를 출력
const addAge = persons.filter(function(ele){
    return ele.address.si === '서울시';
}).reduce(function(acc, curr){
    return acc+curr.age;
},0);
console.log(`서울시에 사는 사람들의 나이의 합계: ${addAge}`);

// 9. 서울시에 살며 30세 이상인 사람들만 추출한 배열 출력
const s30 = persons.filter(function(ele){
    return ele.address.si === '서울시';
}).filter(function(ele){
    return ele.age >= 30;
});
console.log(s30);

// 10. 각 사람의 주소 중 시이름에서 '시' 동이름에서 '동'을 제거하고 이름, 나이, 주소를 출력 ex) 홍길동,20세,서울 역삼
persons.forEach(ele => {
    console.log(
        `${ele.name},${ele.age}세,${ele.address.si.substring(0,ele.address.si.length-1)} ${ele.address.dong.substring(0,ele.address.dong.length-1)}`
    );
});

// 10. 각 사람의 주소에 contury:'대한민국'을 추가하고 이름, 나이, 주소를 출력 ex) 홍길동,20세,대한민국 서울 역삼
persons.forEach(ele => {ele.address.contury = '대한민국'; 
    console.log(
        `${ele.name},${ele.age}세,${ele.address.contury} ${ele.address.si.substring(0,ele.address.si.length-1)} ${ele.address.dong.substring(0,ele.address.dong.length-1)}`
    );
});
