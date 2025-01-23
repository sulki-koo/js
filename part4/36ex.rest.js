/*
    [REST API 실습]
    1. JSON서버 구동
    2. 기능
        (1) 데이터가져오기버튼 누르면 테이블에 전체 데이터 표시
            > GET, /persons
        (2) id, name, age 입력하고 등록버튼 클릭하면 테이블에 데이터 추가
            > POST, /persons
        (3) 각 행의 데이터를 수정하고 수정버튼 누르면 "수정하시겠습니까?" 확인 후
            데이터 수정
            > PUT, /persons/아이디
        (4) 각 행의 삭제버튼 누르면 "삭제하시겠습니까?" 확인 후 데이터 삭제
            > DELETE, /persons/아이디
*/

const listPerson = document.querySelector('#listPerson'); // 데이터가져오기버튼
const getPerson = document.querySelector('#getPerson'); // 조회버튼
const pid = document.querySelector('#pid'); // id 입력창
const pname = document.querySelector('#pname'); // name 입력창
const page = document.querySelector('#page'); // age 입력창
const registPerson = document.querySelector('#registPerson'); // 등록 버튼
const tbody = document.querySelector('tbody');
const sel = document.querySelector('#sel'); // select 버튼
const asc = document.querySelector('#asc'); // 오름차순 버튼
const desc = document.querySelector('#desc'); // 내림차순 버튼

let responseArr = null; // xhr객체의 응답몸체를 json배열로 변환하여 담음을 예정

listPerson.addEventListener('click', e => { // 데이터가져오기버튼 클릭 이벤트
    const xhr = new XMLHttpRequest(); // xhr객체 생성
    xhr.open('GET', 'http://localhost:7777/persons'); // 요청 초기화(get)
    xhr.send(); // 요청 전송
    xhr.onload = () => { // 요청 성공시 콜백함수 저장할 프라퍼티
        responseArr = JSON.parse(xhr.response); // xhr객체의 응답몸체 문자열을 json배열로 변환하여 담음
        printList(responseArr); // printList 실행
    };
});

getPerson.addEventListener('click', e => { // 조회버튼 클릭 이벤트
    const xhr = new XMLHttpRequest(); // xhr객체 생성
    const sid = document.querySelector('#sid'); // sid dom요소 할당
    if (!sid.value) {  // sid 입력창에 입력된 값이 없으면 true
        alert('검색하실 아이디를 입력해 주시랑께요!'); // alert창
        sid.focus(); // sid 입력창으로 포커스 이동
        return;
    }
    xhr.open('GET', `http://localhost:7777/persons/${sid.value}`); // 요청 초기화(get)
    xhr.send(); // 요청 전송
    xhr.onload = () => { // 요청 성공시 콜백함수 저장할 프라퍼티
        tbody.textContent = ''; // <tbody></tbody> 사이 값 초기화
        const person = JSON.parse(xhr.response); // xhr객체의 응답몸체를 json배열로 변환하여 담음
        const tr = document.createElement('tr'); // tr 만듦
        // tr 사이에 들어갈 코드 작성
        tr.innerHTML = `
            <td>${person.id}</td>
            <td><input id="name${person.id}" type="text" value="${person.name}" class="pname"></td>
            <td><input id="age${person.id}" type="text" value="${person.age}" class="page"></td>
            <td>
                <button onclick="modifyPerson('${person.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${person.id}');">삭제</button>
            </td>
        `;
        tbody.appendChild(tr); // tbodty 하위에 tr 넣기
    };
});

registPerson.addEventListener('click', e => { // 등록버튼 클릭 이벤트
    const xhr = new XMLHttpRequest(); // xhr객체 생성
    xhr.open('POST', 'http://localhost:7777/persons'); // 요청 초기화(POST)
    // 서버에게 보내는 데이터가 json임을 알려줌
    xhr.setRequestHeader('content-type', 'application/json');
    // json 문자열로 변환하여 객체로 요청 전송
    xhr.send(JSON.stringify(
        {"id": pid.value, "name": pname.value, "age": page.value}
    ));
    xhr.onload = () => { // 요청 성공시 printList 실행
        printList(responseArr);
    };
});

// asc 버튼 클릭시 printList 호출하여 오름차순 정렬 이벤트
asc.addEventListener('click', () => {
    printList(responseArr, sel.value, 'ASC')
});

// desc 버튼 클릭시 printList 호출하여 오름차순 정렬 이벤트
desc.addEventListener('click', () => {
    printList(responseArr, sel.value, 'DESC')
});

// (xhr객체의 응답몸체를 json배열로 변환, select버튼의 값, 정렬)
const printList = (responseArr, selValue, sort) => {
    if (selValue) {
        // select버튼의 값이 숫자
        if (typeof selValue === 'number') {
            responseArr.sort((obj1, obj2) => {
                if (sort==='ASC') {  // 오름차순
                    return obj1[selValue] - obj2[selValue];
                } else if (sort==='DESC') { // 내림차순
                    return obj2[selValue] - obj1[selValue];
                }
            });
        } else { // select버튼의 값이 숫자가 아님
            responseArr.sort((obj1, obj2) => {
                if (sort==='ASC') { // 오름차순
                    return obj1[selValue].localeCompare(obj2[selValue]);
                } else if (sort==='DESC') { // 내림차순
                    return obj2[selValue].localeCompare(obj1[selValue]);
                }
            });
        }
    }
    tbody.textContent = ''; // <tbody></tbody> 사이 값 초기화
    for (let obj of responseArr) { // 배열 이터러블 for~of로 객체 순회
        const tr = document.createElement('tr'); // tr 만듦
        // tr 사이에 들어갈 코드 작성
        // 수정버튼 - modifyPerson('${obj.id}') 함수 실행 / 삭제버튼 - deletePerson('${obj.id}') 함수 실행
        tr.innerHTML = `
            <td>${obj.id}</td>
            <td><input id="name${obj.id}" type="text" value="${obj.name}" class="pname"></td>
            <td><input id="age${obj.id}" type="text" value="${obj.age}" class="page"></td>
            <td>
                <button onclick="modifyPerson('${obj.id}');">수정</button>&nbsp;
                <button onclick="deletePerson('${obj.id}');">삭제</button>
            </td>
        `;
        tbody.appendChild(tr); // tbody 하위에 tr 코드 작성
    }    
};

// 수정 -> ${obj.id} === pid
const modifyPerson = pid => {
    const confirm = window.confirm('수정하시겠습니까?'); // 확인 창
    if (!confirm) return; // 수정 안 할 경우 true
    const pname = document.querySelector('#name'+pid).value; // (id가 name+id)의 dom의 값을 pname에 할당
    const page = document.querySelector('#age'+pid).value; // (id가 age+id)의 dom의 값을 page에 할당
    const xhr = new XMLHttpRequest(); // xhr객체 생성
    xhr.open('PUT', `http://localhost:7777/persons/${pid}`); // 해당 id 수정 요청
    xhr.setRequestHeader('content-type', 'application/json'); // json 데이터임을 서버에 알려줌
    xhr.send(JSON.stringify({"id":pid, "name":pname, "age":page})); // 요청 전송
    xhr.onload = () => { // 요청 성공시 printList 실행
        printList(responseArr);
    };    
}

// 삭제 -> ${obj.id} === pid
const deletePerson = pid => {
    const confirm = window.confirm('삭제하시겠습니까?'); // 확인 창
    if (!confirm) return; // 삭제 안 할 경우 true
    const xhr = new XMLHttpRequest(); // xhr객체 생성
    xhr.open('DELETE', `http://localhost:7777/persons/${pid}`); // 해당 id 삭제 요청
    xhr.send(); // 요청 전송
    xhr.onload = () => { // 요청 성공시 printList 실행
        printList(responseArr);
    };    
}

listPerson.click(); // listPerson 클릭