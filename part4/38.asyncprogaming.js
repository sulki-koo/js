// Generator 함수
// 제네레이터 함수는 함수의 실행을 나눠서 할 수 있는 함수
// 제네레이터 함수는 제네레이터 객체를 반환
function* generatorFunc() {
    try {
        console.log("제네레이터 함수 수행 a");
        yield 1;
        console.log("제네레이터 함수 수행 b");
        yield 2;
        console.log("제네레이터 함수 수행 c");
        yield 3;
        console.log("제네레이터 함수 수행 d");
    } catch (err) {
        console.error(err);
        
    }
}

// 제네레이터 객체 생성
const generator = generatorFunc();
// next 호출시 값과 제네레이터함수완료여부를 가진 객체를 반환
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
// throw호출시 에러를 발생시키고 undefined와 제네레이터함수완료여부를 가진 객체를 반환
console.log(generator.throw('에러!')); // { value: undefined, done: true }
// return호출시 return의 인자값과 제네레이터함수완료여부를 가진 객체를 반환
console.log(generator.return('실행 완료!')); // { value: '실행 완료!', done: true }

// async / await
// node환경에서 fet함수를 사용하려면 node-fetch를 설치해야함
// 터미널 > npm install node-fetch@2 --save-dev

// node-fetch 임포트
const fetch = require('node-fetch');
async function fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    // fetch작업이 끝난 후 response에 저장
    const response = await fetch(url);
    // response.json() 작업이 끝난 후 todo에 저장
    const todo = await response.json();
    console.log(todo);
}
fetchTodo();

