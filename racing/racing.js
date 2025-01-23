const start = document.querySelector('#start');
const result = document.querySelector('#result');
const horse1 = document.querySelector('#horse1');
const horse2 = document.querySelector('#horse2');
const horse3 = document.querySelector('#horse3');
const horse4 = document.querySelector('#horse4');
const level = document.querySelector('#level');
const reset = document.querySelector('#reset');

let speedRate = 1.0;
let rate = [];

let interval1 = null;
let interval2 = null;
let interval3 = null;

window.onload = function() {
    horse1.style.left = '0px';
    horse2.style.left = '0px';
    horse3.style.left = '0px';
    horse4.style.left = '0px';
}

start.addEventListener('click', e => {
    start.disabled = true;
    level.disabled = true;
    result.textContent = "STARTED! PRESS SPACE BAR KEY!";

    comStart();
    const keyupHandler = e => {
        if(e.keyCode===32) { // e.keyCode===38||e.keyCode===40
            let horse4Left = parseInt(horse4.style.left.substring(0, horse4.style.left.length-2));
            horse4.style.left = (horse4Left+ 18) + 'px';
            if(horse4Left > 1188){
                rate.push(4);
                document.removeEventListener('keyup', keyupHandler);
            }
            printResult();
        }
    };
    document.addEventListener('keyup', keyupHandler);
});

const run = function(horse) {
    const currLeft = parseInt(
        horse.style.left.substring(0, horse.style.left.length-2)
    );
        if (horse.getAttribute("id")=="horse1" && currLeft > 1170) {
            clearInterval(interval1);
            rate.push(1);
        }
        if (horse.getAttribute("id")=="horse2" && currLeft > 1170) {
            clearInterval(interval2);
            rate.push(2);
        }
        if (horse.getAttribute("id")=="horse3" && currLeft > 1170) {
            clearInterval(interval3);
            rate.push(3);
        }
    horse.style.left = (currLeft + (Math.ceil(Math.random()*speedRate*17) + 8)) + 'px';
    printResult();
};

const comStart = () => {
    interval1 = setInterval(run, Math.ceil(Math.random()*50) + 100, horse1);
    interval2 = setInterval(run, Math.ceil(Math.random()*50) + 100, horse2);
    interval3 = setInterval(run, Math.ceil(Math.random()*50) + 100, horse3);
};

level.addEventListener('change', e => {
    switch(e.target.value){
        case "medium" :
            speedRate = 1.25;
            break;
        case "hard" :
            speedRate = 1.5;
    }
});

const printResult = () => {
    if (rate.length==4) {
        let printStr = "";
        for (let i=0; i<rate.length; i++) {
            printStr += (i+1) + "등 : " + rate[i] + "레인&nbsp;&nbsp;&nbsp;"
        }
        result.innerHTML = printStr;
    }
};

