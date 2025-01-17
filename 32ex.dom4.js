const fileList = document.getElementById('fileList');
let i = 0;

function add(){
    document.querySelectorAll("#fileList button").forEach(button => {
        button.addEventListener('click', e => {
            switch(e.target.textContent){
                case '+' : 
                    const input = document.createElement('div');
                        input.innerHTML = `
                            <input type="file">&nbsp;
                            <button>+</button>&nbsp;
                            <button>-</button>
                        `;
                        input.dataset.id = `${i++}`;
                        fileList.appendChild(input);
                break;
                case '-' : 
                    const out = fileList.querySelector(`div[data-id="${i--}"]`);
                    fileList.removeChild(out);
                break;
            }
        })
    });
}













