// Promise

const promiseGet = url => {
    // Promise를 리턴
    // Promise는 성공시에 수행할 resolve함수와 실패시 수행할 reject함수를 인자로 받음
    return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () => {
            if (xhr.status===200){
                // 요청에 대한 응답 성공시 resolve를 호출
                resolve(JSON.parse(xhr.response));
            } else {
                // 요청에 대한 응답 실패시 reject를 호출
                reject(new Error(xhr.status));
            }
        };
    });
};

promiseGet('https://jsonplaceholder.typicode.com/posts/1') // 프라미스를 리턴받음
.then(res => console.log(res)) // 프라미스 성공시 res=JSON.parse(xhr.response)
.catch(err => console.log(err)) // 프라미스 실패시 err=new Error(xhr.status)
.finally(() => console.log('성공/실패 여부와 상관없이 수행!'));

const promisePost = (url, paylaod) => {
    // Promise를 리턴
    // Promise는 성공시에 수행할 resolve함수와 실패시 수행할 reject함수를 인자로 받음
    return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(paylaod);
    xhr.onload = () => {
            if (xhr.status===200||xhr.status===201){
                // 요청에 대한 응답 성공시 resolve를 호출
                resolve(JSON.parse(xhr.response));
            } else {
                // 요청에 대한 응답 실패시 reject를 호출
                reject(new Error(xhr.status));
            }
        };
    });
};

promisePost('https://jsonplaceholder.typicode.com/posts'
    , '{"userId":11, "id":101, "title":"title", "body":"body"}') // 프라미스를 리턴받음
.then(res => console.log(res)) // 프라미스 성공시 res=JSON.parse(xhr.response)
.catch(err => console.log(err)) // 프라미스 실패시 err=new Error(xhr.status)
.finally(() => console.log('성공/실패 여부와 상관없이 수행!'));

// 실습
// https://jsonplaceholder.typicode.com/posts
// Promise를 이용해서 id가 20인 게시물의 title을 'modified title'로 수정
const promistPatch = (url, payload) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('PATCH', url);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(payload);
        xhr.onload = () => {
            if (xhr.status===200||xhr.status===201){
                resolve(JSON.parse(xhr.response));
            } else {
                reject(new Error(xhr.status));
            }
        };
    });
};

promistPatch('https://jsonplaceholder.typicode.com/posts/20'
    , '{"title":"modified title"}')
.then(res => console.log(res))
.catch(err => console.log(err));

// 실습2
// https://jsonplaceholder.typicode.com/comments
// Promise를 이용해서 postId가 3인 모든 댓글을 조회
new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    xhr.send();
    xhr.onload = () => {
        if (xhr.status===200) {
            resolve(
                JSON.parse(xhr.response)
                .filter(comment=>comment.postId=="3")
            );
        } else {
            reject(new Error(xhr.status));
        }
    };
}).then(res => console.log(res))
.catch(err => console.log(err))
.finally(() => console.log('성공/실패 여부와 상관없이 수행!'));

// 프라미스 체이닝
const url = 'https://jsonplaceholder.typicode.com';

promiseGet(`${url}/posts/1`) // 1번 게시물
.then(({userId}) => promiseGet(`${url}/users/${userId}`)) // 1번게시물 작성자
.then(userInfo => console.log(userInfo))
.catch(err => console.log(err));

// setTimeout을 순차적으로 처리
// setTimeout함수 : 특정시간(밀리초) 후에 콜백을 호출하는 함수
// 3초후에 1을 resolve하는 프라미스를 반환하는 requestData1 함수
const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
// 2초후에 2을 resolve하는 프라미스를 반환하는 requestData1 함수
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
// 1초후에 3을 resolve하는 프라미스를 반환하는 requestData1 함수
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

// 프라미스들이 resolve한 결과를 저장할 배열
// 3초 + 2초 + 1초 = 6초 후에 결과가 나옴
const res = [];
requestData1() // 1
// 1을 배열에 담고 requestData2호출
.then(data => {res.push(data); return requestData2();})
// 2을 배열에 담고 requestData3호출
.then(data => {res.push(data); return requestData3();})
// 3을 배열에 담고 배열 출력
.then(data => {res.push(data); console.log(res);})
.catch(console.error);

// 전체가 다 resolve 되면 수행을 종료
// 병렬 비동기 호출
// Promise.resolve(1)호출에 3초, Promise.resolve(2)호출에 2초, Promise.resolve(3)호출에 1초 걸린다면
// Promise.all로 병렬 호출하면 최고 오래걸리는 3초보다 조금 더 걸려서
// 병렬 비동기 호출을 모두 수행할 수 있음
Promise.all(
    [
        1, // => Promise.resolve(1)
        2, // => Promise.resolve(2)
        3  // => Promise.resolve(3)
    ]
).then(console.log)
.catch(console.error);

// 어떤 하나가 resolve 되면 수행을 종료
Promise.race(
    [
        1, // => Promise.resolve(1)
        2, // => Promise.resolve(2)
        3  // => Promise.resolve(3)
    ]
).then(console.log)
.catch(console.error);

// 전체가 다 resolve 되거나 reject 되면 수행을 종료
/*
(3) [{…}, {…}, {…}]
0: {status: 'fulfilled', value: 1}
1: {status: 'fulfilled', value: 2}
2: {status: 'fulfilled', value: 3}
length: 3
[[Prototype]]: Array(0)
*/
Promise.allSettled(
    [
        1, // => Promise.resolve(1)
        2, // => Promise.resolve(2)
        3  // => Promise.resolve(3)
    ]
).then(console.log)
.catch(console.error);

// fetch
// 프라미스를 반환하는 비동기처리를 위한 WEB API (웹브라우져에서 작동)
// node환경에서는 node-fetch를 사용
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(promise => console.log(promise));

const request = {
    get(url){ 
        return fetch(url); 
    },
    post(url, paylaod){
        return fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(paylaod)
        });
    }, 
    put(url, paylaod) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(paylaod)
        });
    }, 
    patch(url, paylaod) {
        return fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(paylaod)
        });
    }, 
    delete(url){ 
        return fetch(url, {
            method: 'DELETE'
        }); 
    }
};

// get
request.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(todos => console.log(todos))
.catch(console.error);

// post
request.post('https://jsonplaceholder.typicode.com/todos'
    , {userId:1, title:'javascript', complted:false})
.then(response => response.json())
.then(todos => console.log(todos))
.catch(console.error);

// put
request.put('https://jsonplaceholder.typicode.com/todos/1'
    , {userId:1, title:'JQuery', complted:true})
.then(response => response.json())
.then(todos => console.log(todos))
.catch(console.error);

// patch
request.patch('https://jsonplaceholder.typicode.com/todos/1'
    , {title:'React'})
.then(response => response.json())
.then(todos => console.log(todos))
.catch(console.error);

// delete
request.delete('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(todos => console.log(todos))
.catch(console.error);








