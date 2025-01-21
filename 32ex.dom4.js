const fileList = document.getElementById('fileList');
const nameList = document.querySelector('ul')
let i = 0;
let fileNames = [];

// 파일 선택시 목록추가
fileList.addEventListener('change', e => {
    const files = e.target.files;
    if(files.length > 0){
        for(let i=0; i< files.length;i++){
            const fileName =files[i].name;
            fileNames.push(fileName);
        }
        updatefileList();
    }
});

function updatefileList(){
    nameList.innerHTML = '';
    fileNames.forEach(fileName => {
        const li = document.createElement('li');
        li.textContent = fileName;
        nameList.appendChild(li);
    });
}

// 버튼 추가
function add(){
    fileList.addEventListener('click', e => {
        const input = document.createElement('div');
        
        if (e.target.tagName === 'BUTTON') {
            switch (e.target.textContent) {

                case '+':
                    input.innerHTML = `
                    <input type="file">&nbsp;
                    <button>+</button>&nbsp;
                    <button>-</button>
                    `;
                    input.dataset.id = `${i++}`;
                    fileList.appendChild(input);
                    break;

                case '-':
                    const targetFileDiv = e.target.closest('div');
                    if (targetFileDiv) {
                        // 해당 div 제거
                        fileList.removeChild(targetFileDiv);

                        // 해당 div에서 연결된 ul의 파일 목록 삭제
                        const fileNameToRemove = targetFileDiv.querySelector('input[type="file"]').files[0]?.name;
                        const liList = document.querySelectorAll('ul li');
                        for (let li of liList) {
                            if (li.textContent === fileNameToRemove) {
                                li.remove();
                                break;
                            }
                        }
                    }
                    break;
            }
        }
    });
}

add();









