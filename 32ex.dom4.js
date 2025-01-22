const fileList = document.getElementById('fileList');
const nameList = document.querySelector('ul');
let i = 0;

function updateFileList() {
    nameList.innerHTML = ''; 
    const fileDivs = fileList.querySelectorAll('div'); 
    fileDivs.forEach(fileDiv => {
        const inputFile = fileDiv.querySelector('input[type="file"]');
        if (inputFile && inputFile.files[0]) {
            const fileName = inputFile.files[0].name;
            const li = document.createElement('li');
            li.textContent = fileName;
            nameList.appendChild(li); 
        }
    });
}

// 버튼 클릭 처리
function add() {
    fileList.addEventListener('click', e => {
        const inputDiv = e.target.closest('div');
        if (e.target.tagName === 'BUTTON') {
            switch (e.target.textContent) {
                case '+':
                    // 새로운 파일 입력 div 추가
                    const newInputDiv = document.createElement('div');
                    newInputDiv.innerHTML = `
                        <input type="file">&nbsp;
                        <button>+</button>&nbsp;
                        <button>-</button>
                    `;
                    newInputDiv.dataset.id = `${i++}`;
                    
                    // 파일 선택 시 목록 업데이트
                    const inputFile = newInputDiv.querySelector('input');
                    inputFile.addEventListener('change', () => {
                        updateFileList();
                    });
                    fileList.appendChild(newInputDiv);
                    break;
                case '-':
                    // 파일 삭제
                    if (inputDiv) {
                        const inputFile = inputDiv.querySelector('input[type="file"]');
                        const fileNameToRemove = inputFile.files[0]?.name;
                        
                        if (fileNameToRemove) {
                            const liList = document.querySelectorAll('ul li');
                            liList.forEach(li => {
                                if (li.textContent === fileNameToRemove) {
                                    li.remove(); // 파일 이름 목록에서 제거
                                }
                            });
                        }
                        fileList.removeChild(inputDiv);
                    }
                    break;
            }
        }
    });
}

document.getElementById('first').addEventListener('change', e => {
        nameList.innerHTML = ''; 
        if (e.target && e.target.type === 'file' && e.target.files[0]) {
            const fileName = e.target.files[0].name;
            const li = document.createElement('li');
            li.textContent = fileName;
            nameList.appendChild(li); 
        }
});

add(); 
