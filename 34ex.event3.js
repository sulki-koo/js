// event실습 3 : 입력필드 검증 (validation)
// 전송버튼을 클릭하면
// 1. 아이디, 비밀번호는 12자 이하
// 2. 성별은 필수 체크
// 3. 취미는 2개 이상 선택
// 조건을 모두 만족하면 '폼이 전송되었습니다!' 엘럿
// 그렇지 않으면 해당 폼에 포커스
// 초기화 버튼 클릭하면 폼 초기화

const form = document.querySelector('form[name="writeForm"]');

document.getElementById("submit").addEventListener('click', e => {
    
    const uid = document.querySelector('input[name="uid"]');
    const upass = document.querySelector('input[name="upass"]');
    const gender = document.querySelector('input[name="gender"]:checked');

    const hobbys = document.querySelectorAll('input[type="checkbox"]');
    let count = 0;
    hobbys.forEach(hobby => {
        if(hobby.checked) count++;
    });
    console.log(count);

    if(!gender){
        e.preventDefault();
        console.log('전송x성별');
    }else if(count<2){
        e.preventDefault();
        console.log('전송x취미');
    }else if(uid.value.length==0||uid.value.length>=12){
        uid.focus();
        e.preventDefault();
        console.log('전송x아이디');
    }else if(upass.value.length==0|upass.value.length>=12){
        upass.focus();
        e.preventDefault();
        console.log('전송x비번');
    }else{
        alert('폼이 전송되었습니다!');
    }
});



















