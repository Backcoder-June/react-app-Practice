import React, {useState} from 'react'
// useState  import! 

const Hello = () => {


  // 일반 변수는 상태값 관리가 안됨 
  //let nickName = '익명'; 
//=> useState() 사용 

// const us = useState('익명'); 
// console.log(us); 
// const[변수명, 변수명 setter함수] = userState('데이터'); 
const[nickName, setNickName] = useState('기본 useState 변수값');
const[nickName2, setNickName2] = useState('기본 useSate 변수값');

// 상태변수 값 수정할 때는 직접 대입 X  => Setter 사용해야 함 



// 이벤트 헨들러(함수)를 안에 다 함수로 만들어놓고 가져다 사용
const sayHello = e => {
  if(nickName !== '') {
    setNickName('함수로 useState 세터 사용하기'); 
  }
  if(nickName === '') {
    setNickName('기본 변수값이 없습니다.');
  }
};

    return (
    <div>
    <h1>hello 안녕 리액트 {nickName}</h1>
    <button className="btn" onClick={sayHello}>{nickName}</button>
    <button className="btn" onClick={() => { setNickName2('화살표함수로 바로 세터 사용'); }}>{nickName2}</button>
    </div>
  )
  // 여기에 쓴 코드는 렌더링 되기 전에 실행. onload 개념 
  // => 리액트에서는 이벤트핸들러(함수) 방식으로, 
  //태그에 인라인 방식으로 이벤트를 건다.  
//   const $btn = document.querySelector('.btn'); 
//   $btn.onclick = e => {
//       alert('버튼잡았다'); 
//   };
}

export default Hello