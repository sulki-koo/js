const background = document.querySelector("div");
let i = 0;

const sizeUp = function(){
    let width1 = `${100*i}px`;
    let height1 = `${100*i}px`;
    background.style.width = width1; background.style.height = height1;
    i = i+2;
}
const sizeDown = function(){
    i = i-2;;
    let width2 = `${100*i}px`;
    let height2 = `${100*i}px`;
    background.style.width = width2; background.style.height = height2;
}
const classBlue = function(){
    i = i+2;
    let width1 = `${100*i}px`;
    let height1 = `${100*i}px`;
    background.style.backgroundColor = 'blue'; background.style.width = width1; background.style.height = height1;
}
const classRed = function(){
    i = i-2;
    let width2 = `${100*i}px`;
    let height2 = `${100*i}px`;
    background.style.backgroundColor = 'red'; background.style.width = width2; background.style.height = height2;
}

Array.from(document.getElementsByTagName("button")).forEach(button => {
    button.addEventListener('click', e => {
        switch(e.target.textContent){
            case '배경색blue' : background.style.backgroundColor = 'blue';
            break;
            case '배경색red' : background.style.backgroundColor = 'red';
            break;
            case '크기X2' : sizeUp();
            break;
            case '크기/2' : sizeDown();
            break;
            case 'blue클래스' : classBlue(); 
            break;
            case 'red클래스' : classRed(); 
        }
    })
});










