// JSON server, persons.json 사용
// npx json-server --watch persons.json --port 7777 --static ../
// http://localhost:7777/37ex.fetch.html

// fetch함수를 활용하여 get, post, put, patch, delete 호출

// // get
// fetch('http://localhost:7777/persons')
// .then(response => response.json())
// .then(res => console.log(res));

// // post
// fetch('http://localhost:7777/persons'
//     , {method: 'POST'
//         , headers: {'content-type': 'application/json'}
//         ,body: JSON.stringify({id: '7', name: 'min', age: '34'})
//     })
// .then(response => response.json())
// .then(res => console.log(res))
// .catch(console.error);

// // put
// fetch('http://localhost:7777/persons/7'
//     , {method: 'PUT'
//         , headers: {'content-type': 'application/json'}
//         ,body: JSON.stringify({id: '7', name: 'new min', age: 'new34'})}
//     )
// .then(response => response.json())
// .then(res => console.log(res))
// .catch(console.error);

// // patch
// fetch('http://localhost:7777/persons/7'
//     , {method: 'PATCH'
//         , headers: {'content-type': 'application/json'}
//         ,body: JSON.stringify({age: '29'})}
//     )
// .then(response => response.json())
// .then(res => console.log(res))
// .catch(console.error);

// // delete
// fetch('http://localhost:7777/persons/7', {method: 'DELETE'})
// .then(response => response.json())
// .then(res => console.log(res))

// get
axios('http://localhost:7777/persons')
.then(response => console.log(response));

// post
axios.post('http://localhost:7777/persons', 
    {id: '7', name: 'min yoon', age: '34'})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

// put
axios({
    method: 'PUT',
    url: 'http://localhost:7777/persons/7',
    data: {id: '7', name: 'new min', age: 'new34'}
})
.then(function(response) {console.log(response)})
.catch(console.error);

// patch
axios({
    method: 'patch',
    url: 'http://localhost:7777/persons/7',
    data: {name: 'min min min'}
})
.then(function(response) {console.log(response)})
.catch(console.error);

// delete
axios({
    method: 'delete',
    url: 'http://localhost:7777/persons/7',
})
.then(function(response) {console.log(response)})
.catch(console.error);

// 병렬 비동기 호출
// 만약 posts호출에 10초, comments호출에 6초, users호출에 3초 걸린다면
// Promise.all로 병렬 호출하면 최고 오래걸리는 10초보다 조금 더 걸려서
// 병렬 비동기 호출을 모두 수행할 수 있음

Promise.all([
    axios('https://jsonplaceholder.typicode.com/posts'),
    axios('https://jsonplaceholder.typicode.com/comments'),
    axios('https://jsonplaceholder.typicode.com/users')
])
.then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
});


