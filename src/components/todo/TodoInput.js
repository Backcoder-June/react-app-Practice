import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './todocss/TodoInput.css';
import cn from 'classnames'; 

//  add 콜백함수를 받아서 
const TodoInput = ({add}) => {

    // toggle 
    const[open, setOpen] = useState(false); 
    const inputToggle = e => {
        setOpen(!open); // !으로 반대값 으로 설정 
    }; 

    // 사용자 입력값 받을 todo 변수. 기본 값 세팅 
    const [todo, setTodo] = useState({
        title: ''
    });

    // 할일 추가 이벤트 헨들러 
    const todoAddHandler = e => {
        // 항상 setter 로 처리 
        setTodo({
            ...todo, //  기존의 todo는 그대로 복사 해놓고, 
            title: e.target.value //추가적인 값을 setting 해줘야 하는 것 (spread 문법)
        }); 

    // 자식 => 부모 로보낸 콜백함수를 사용해서 부모한테 모아놓은 todo 데이터를 보냄 
    add(todo); 

    // 입력 끝나고 입력칸 비우기 
    setTodo({
        ...todo, 
        title: ''
    });
};


const todoAddHandler2 = e => {
    e.preventDefault();
    if(e.key === 'Enter'){
        console.log('엔터키 확인');
    }
}; 

//onChange 실시간 저장 
const titleChangeHandler = e => {
    // console.log(typeof e.target.value);
    // 항상 setter 로 넣어줘야 한다 명심
    setTodo({
        ...todo, //  기존의 todo는 그대로 복사 해놓고, 추가적인 값을 setting 해줘야 하는 것 (spread 문법)
        title: e.target.value 
    }); 

};

const stopSubmit = e => e.preventDefault(); 

  return (
<>
    { open &&
    <div className='todo-input'>
        <form className='insert-form'>
            <input type='text' placeholder='할 일을 입력하세요.' autoFocus 
            onKeyUp={todoAddHandler2} onChange={titleChangeHandler} value={todo.title}/>
            <input type='button' value='제출' onClick={todoAddHandler} />
        </form>
    </div>
    }

    {/* <button className={open?'begin-btn open' : 'begin-btn'} onClick={inputToggle}> */}
    <button className={cn('begin-btn', {open})} onClick={inputToggle}>
        <MdAdd />
    </button>
</>
  );
};

export default TodoInput