const fileList = document.getElementById('fileList');
let i = 0;

document.querySelectorAll("#fileList button").forEach(button => {
    button.addEventListener('click', e => {
        console.log(e.target.dataset.btnId);
        
        // switch(e.target.textContent){
        //     case '+' : 
        //         const input = document.createElement('div');
        //             input.innerHTML = `
        //                 <input type="file">&nbsp;
        //                 <button>+</button>&nbsp;
        //                 <button>-</button>
        //             `;
        //             input.dataset.id = `${i++}`;
        //             fileList.appendChild(input);
        //     case '-' : 
        //         const out = fileList.querySelector(`div[data-id="${i--}"]`);
        //         fileList.removeChild(out);
        //     break;
        // }
    })
});












