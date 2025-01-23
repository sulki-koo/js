// timer function
// setTimeout(콜백함수, 밀리세컨드) : 밀리세컨드 후 콜백함수 호출
// setInterval(콜백함수, 밀리세컨드) : 밀리세컨드 마다 콜백함수 호출

const span = document.querySelector('span');

// 1000밀리초 후에 콜백함수를 한번만 수행
// setTimeout(() => {
//     span.textContent = '1000밀리초 후 나타남!';
// }, 1000);

// let count = 0;
// 밀리초 마다 콜백함수를 수행
// setInterval(콜백함수, 밀리초, 콜백함수인자)
// const interval = setInterval(arg => {
//     span.textContent = arg + count++;
// }, 1000, "time : ");

// const stopBtn = document.querySelector('button');
// stopBtn.addEventListener('click', e => {
//     clearInterval(interval);
// });

// 실습 : start, pause, stop 구현
let count = 0;
let interval = null;
let started = false;
const startBtn = document.querySelector('#start');
startBtn.addEventListener('click', e => {
    pauseBtn.disabled = false;
    if (!started) {
        interval = setInterval(arg => {
            span.textContent = arg + count++;
        }, 1000, "time : ");
    }
    startBtn.disabled = true;
});

const pauseBtn = document.querySelector('#pause');
pauseBtn.addEventListener('click', e => {
    // 시작상태가 아닌걸로 변경
    started = false;
    clearInterval(interval);
    startBtn.disabled = false;
});

// clearInterval : setInterval 종료
const stopBtn = document.querySelector('#stop');
stopBtn.addEventListener('click', e => {
    // 시작상태가 아닌걸로 변경
    started = false;
    clearInterval(interval);
    // 포즈버튼 비활성, 시작버튼 활성, count 초기화
    pauseBtn.disabled = true;
    startBtn.disabled = false;
    count = 0;
});

