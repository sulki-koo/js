const newBody = document.querySelector('body');
const head = document.querySelector('head');
// document.querySelector('button').addEventListener('click', ()=>{
//     const newTable = document.createElement('table');
//     const newTr1 = document.createElement('tr');
//     const newTd11 = document.createElement('td');
//     newTd11.textContent = '번호';
//     const newTd12 = document.createElement('td');
//     newTd12.textContent = '성명';
//     const newTd13 = document.createElement('td');
//     newTd13.textContent = '나이';
//     const newTd14 = document.createElement('td');
//     newTd14.textContent = '키';

//     const newTr2 = document.createElement('tr');
//     const newTd21 = document.createElement('td');
//     newTd21.textContent = '1';
//     const newTd22 = document.createElement('td');
//     newTd22.textContent = '홍길동';
//     const newTd23 = document.createElement('td');
//     newTd23.textContent = '20';
//     const newTd24 = document.createElement('td');
//     newTd24.textContent = '170';

//     const newTr3 = document.createElement('tr');
//     const newTd31 = document.createElement('td');
//     newTd31.textContent = '2';
//     const newTd32 = document.createElement('td');
//     newTd32.textContent = '강감찬';
//     const newTd33 = document.createElement('td');
//     newTd33.textContent = '30';
//     const newTd34 = document.createElement('td');
//     newTd34.textContent = '150';

//     newBody.appendChild(newTable);
//     newTable.appendChild(newTr1);
//     newTr1.appendChild(newTd11);
//     newTr1.appendChild(newTd12);
//     newTr1.appendChild(newTd13);
//     newTr1.appendChild(newTd14);
//     newTable.appendChild(newTr2);
//     newTr2.appendChild(newTd21);
//     newTr2.appendChild(newTd22);
//     newTr2.appendChild(newTd23);
//     newTr2.appendChild(newTd24);
//     newTable.appendChild(newTr3);
//     newTr3.appendChild(newTd31);
//     newTr3.appendChild(newTd32);
//     newTr3.appendChild(newTd33);
//     newTr3.appendChild(newTd34);
// });

document.querySelector('button').addEventListener('click', ()=>{
    const newTable = document.createElement('table');
    newTable.innerHTML = `
    <tr>
        <th>번호</th><th>성명</th><th>나이</th><th>키</th>
    </tr>
    <tr>
    <td>1</td><td>홍길동</td><td>20</td><td>170</td>
    </tr>
    <tr>
        <td>2</td><td>강감찬</td><td>30</td><td>150</td>
    </tr>
    `;
    newBody.appendChild(newTable);
});








