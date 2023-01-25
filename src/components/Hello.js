import React from 'react'
// useState  import => React 를 static import 처럼(hook) 해두면 React. 생략 
// import React, {useState, useEffect} from 'react' 

const Hello = () => {


  // 일반 변수는 상태값 관리가 안됨 
  //let nickName = '익명'; 
//=> useState() 사용 

// const us = useState('익명'); 
// console.log(us); 
// const[변수명, 변수명 setter함수] = userState('데이터'); 
const[nickName, setNickName] = React.useState('기본 useState 변수값');
const[nickName2, setNickName2] = React.useState('기본 useSate 변수값');

// 상태변수 값 수정할 때는 직접 대입 X  => Setter 사용해야 함 



// 이벤트 헨들러(함수)를 안에 다 함수로 만들어놓고 가져다 사용
const sayHello = e => {

  console.log('sayhello 함수 호출!')
  if(nickName !== '') {
    setNickName('함수로 useState 세터 사용하기'); 
  }
  if(nickName === '') {
    setNickName('기본 변수값이 없습니다.');
  }
};

const foo = () => {
console.log('rendering foo!');

};


// 화면이 처음 렌더링(마운트) 될 때, 상태값이 변경될 때 호출 => 처음 화면 렌더링 할 때 해야하는 일 ( ex. API 값 호출 )
// 콜백함수 () => {} 호출 == function() {} 
// 2번째 파라미터로 의존성 배열 을 넣을 수 있음 => 상태값이 바뀔 때 마다 매번 useEffect 가 실행되는 걸 조종 
// => useEffect 를 한 번만 사용하면 될 경우 => 빈배열[] 설정 => 초기 렌더링 시 단 1회만 호출 ( ex.게시판 목록을 가져올 때 )
// [] 배열에 상태값을 넣어주면 [nickName] => 해당하는 nickName 상태값에 변동이 있을 때 만 useEffect 함수 호출 




// 3순위 - useEffect 콜백함수 
React.useEffect(() => {
  console.log('useEffect 호출됨!'); 
  console.log('nickName(useEffect): ' + nickName);

  // 정리 (claen up) 함수 return() => {};
  // 화면이 리렌더링 되기 직전에 호출 ( 소멸자 개념 ) => 상태변수값이 변하기 전의 값을 마지막으로 조종 
  return() => {
    console.log('clean up 함수 콜!');
    console.log('nickName(cleanUp) : ' + nickName);
  }; 



}, [nickName]); 


// 1순위 실행 =>  Hello 라는 컴포넌트 내부 실행코드 ( 렌더링 되기도 전에 실행 => 순서 주의 ) 
// 2순위 실행 => 렌더링 시에 실행되는 코드 ( return 에서 마운트 하면서 실행되는 코드 )
// 3순위 실행 => useEffect 에 있는 콜백함수 코드 

// 상태값이 변경 될 때마다 => 이 실행 순서대로 모두 실행됨 

// 1순위 - 그냥 Hello 컴포넌트 코드 
console.log('첫번째 호출(component) :' + nickName)





// JSX 문법 => 화면을 마운팅 한다 
    return (
      // 부모태그로 감싸줘야 한다. 부모 태그 의미 없으면 <> </> 
      // 인라인 방식.(프로퍼티 방식) attribute 방식으로 이벤트를 걸어준다.
    <div> 
      {/* 2순위 - 렌더링 시 실행 코드  */}
      {/* {sayHello()} */}
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