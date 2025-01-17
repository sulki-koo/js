// event 실습 2 : 배경색 변경
// outer 클릭시 outer 배경색상 임의색상으로 변경
// inner 클릭시 outer. inner 배경색상 임의색상으로 변경
// button 클릭시 btn, outer, inner 배경색상 임의색상으로 변경

const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const btn = document.getElementById('btn');

const getRandomColor = function() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    // return`rgb(${Math.floor(Math.random()*256)},
    //     ${Math.floor(Math.random()*256)},
    //     ${Math.floor(Math.random()*256)})`;
};

// outer.addEventListener('click', () => {
//     outer.style.backgroundColor = getRandomColor();
// });

// inner.addEventListener('click', () => {
//     inner.style.backgroundColor = getRandomColor();
// });

// btn.addEventListener('click', () => {
//     btn.style.backgroundColor = getRandomColor();
// });

outer.addEventListener('click', event =>{
    const prevInnerBackgroundColor = 
        inner.style.backgroundColor ? 
        inner.style.backgroundColor : 'rgb(255,255,255)';
    switch (event.target.id){
        case 'outer':
            outer.style.backgroundColor = getRandomColor();
            inner.style.backgroundColor = prevInnerBackgroundColor;
            break;
        case 'inner':
            inner.style.backgroundColor = getRandomColor();
            outer.style.backgroundColor = getRandomColor();
            break;
        case 'btn':
            btn.style.backgroundColor = getRandomColor();
            inner.style.backgroundColor = getRandomColor();
            outer.style.backgroundColor = getRandomColor();
            break;
    }
});
























