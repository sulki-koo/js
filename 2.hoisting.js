/*
    ▷ 호이스팅(hoisting) : 변수나 함수들의 선언을 코드 최상단으로 끌어올림
    ▷ 자바스크립트는 선언 > 실행의 순서로 코드를 해석하고 실행
    ▷ 만약 선언이 되지않은 변수나 함수가 있다면 코드 최상단에 선언문을 넣어서 선언한 후 실행하게 됨
*/

// var i; // i를 선언하지 않고 사용하면 이 코드가 삽입

// var print; // print함수를 선언하지 않고 사용하면 선언 코드가 삽입

// -------------------선언부와 실행부의 경계--------------------------

i = 100;
console.log(i);

print();

function print(){
    console.log('출력 잘 되남?');
}


