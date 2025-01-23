/*
    [REST API 실습]
    1. JSON서버 구동
    2. 기능
        (1) 데이터가져오기 버튼 누르면 테이블에 전체 데이터 표시 > GET, /persons
        (2) id, name, age 입력하고 등록버튼 클릭시 테이블에 데이터 추가 > POST, /persons
        (3) 각 행의 데이터를 수정하고 수정버튼 누르면 "수정하시겠습니까?" 확인 후 데이터 수정 > PUT, /persons/아이디
        (4) 각 행의 삭제버튼 누르면 "삭제하시겠습니까?"  확인 후 데이터 삭제 > DELETE, /persons/아이디
*/

const xhr = new XMLHttpRequest();
let response = null;

const xhrUtil = {
    init: (httpMethod, url, payload=null) => {
        if(httpMethod.toUpperCase()=='GET' && payload){
            url = url + (payload ? payload : '');
        }
        xhr.open(httpMethod, url);

        if(httpMethod.toUpperCase()=='POST' || 
            httpMethod.toUpperCase()=='PUT' ||
            httpMethod.toUpperCase()=='PATCH'){
                xhr.setRequestHeader('content-type', 'application/json')
            }
        xhr.send(payload);
    }
};

const url = 'http://localhost:7777/persons';

xhr.onreadystatechange = () => {
    if(xhr.readyState !==4) return false;
    if(xhr.status==200 || xhr.status==201){
        response = xhr.responseText;
        console.log('정상완료');
    } else{ 
        console.error('에러발생', xhr.status, xhr.statusText);
    }
}

// 불러오기
const get = document.getElementById('listPerson').addEventListener('click', () => {
    xhrUtil.init('GET', url);
    setRow(response);
});

// 등록
document.getElementById('registPerson').addEventListener('click', () => {
    const newP = {
        id:document.querySelector('input[class="pid"]').value, 
        name:document.querySelector('input[class="pname"]').value, 
        age:document.querySelector('input[class="page"]').value
    };
    xhrUtil.init('POST', url , JSON.stringify(newP));
});

// 수정, 삭제
function add(){
    document.querySelector('tbody').addEventListener('click', e => {
        if(e.target.tagName==='BUTTON'){
        const row = e.target.closest('tr')
        const pId = row.querySelector('td').textContent;
        console.log(pId);
        
            switch(e.target.textContent){
                case '수정':
                    const confirmUpdate = window.confirm('수정하시겠습니까?');
                    if(!confirmUpdate) return;
                    const updateP = {
                        id: pId, 
                        name:row.querySelector('.pname').value, 
                        age:row.querySelector('.page').value
                    };
                    xhrUtil.init('PUT', `${url}/${pId}`, JSON.stringify(updateP));
                break;
                case '삭제':
                    const confirmDelete = window.confirm('삭제하시겠습니까?');
                    if(!confirmDelete) return;
                    xhrUtil.init('DELETE',`${url}/${pId}`);
                break;
            }
        };
    });
}
add();

const setRow = (response) => {
    const arr = JSON.parse(response);
    if (sort==='asc') arr.sort((a, b) => a.id-b.id);
    if (sort==='desc') arr.sort((a, b) => b.id-a.id);

    const tbody = document.querySelector('tbody');
    tbody.textContent = '';

    if(arr!=null){
        for(let obj of arr){
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${obj.id}</td>
                <td><input class="pname" type="text" value="${obj.name}"></td>
                <td><input class="page" type="text" value="${obj.age}"></td>
                <td>
                    <button>수정</button>&nbsp;
                    <button>삭제</button>
                </td>
            `;
            tbody.appendChild(tr);
        }
    }
};



