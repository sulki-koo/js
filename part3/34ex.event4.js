// event실습 4 : 성적처리 (동적 테이블 생성)
// 데이터 : 성명,국어,영어,수학
// 기능 : 등록, 삭제, 개인총점, 과목총점 연산

const update = document.getElementById('update');
const textData = document.querySelectorAll('input[type="text"]');
const result = document.querySelector('table tbody');
const tfoof = document.querySelector('table tfoot');

update.addEventListener('click', e => {
    let dataArr = [];
    textData.forEach(input => {
        dataArr.push(input.value);
    });
    console.log(dataArr);
    const total = (+dataArr[1])+(+dataArr[2])+(+dataArr[3]);
    dataArr.push(total);

    if(dataArr.length > 0){
        const row = document.createElement('tr');
        
        dataArr.forEach(data => {
            const cell = document.createElement('td');
            cell.textContent = data;
            row.appendChild(cell);
        });
    
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '[삭제]';
        deleteButton.addEventListener('click', e => {
            result.removeChild(row);
            updateTotalSum();
        });
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
        result.appendChild(row);
        // textData.forEach(input => {
        //     input.value = '';
        // });
        updateTotalSum();
    };
});
    
function updateTotalSum(){
    let totalKor = 0;
    let totalEng = 0;
    let totalMath = 0;
    let totalScore = 0;

    const rows = result.querySelectorAll('tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if(cells.length>1){
            totalKor += Number(cells[1].textContent);
            totalEng += Number(cells[2].textContent);
            totalMath += Number(cells[3].textContent);
            totalScore += Number(cells[4].textContent);
        }
    });
    const tfoodRows = tfoof.querySelectorAll('tr');
    tfoodRows[0].children[1].textContent = totalKor;
    tfoodRows[0].children[2].textContent = totalEng;
    tfoodRows[0].children[3].textContent = totalMath;
    tfoodRows[0].children[4].textContent = totalScore;
}




