import React, {useState} from 'react';
import './todocss/TodoItem.css';

import {MdDelete, MdDone} from 'react-icons/md'
import cn from 'classnames';

const TodoItem = ({todo, remove, update}) => {

    const {todoId, title, done} = todo; 


    // 서버에 삭제 요청 
    const deleteClickHandler = e => {
        // 받아오고 받아온걸 여기서 사용 
        remove(todoId);
    }; 
    //  todoTemplate 부모에서 처리하자 

    // 할일 완료 수정 처리 이벤트 헨들러 
    // 현재 done 값의 반대 논리값(t/f) 를 전달 => 수정 
    // id, done, title 다 전달해줘야 함 
    const doneCheckHandler = e => {
        const modTodo = {
            ...todo, 
            done: !done // 수정 
        };
        update(modTodo); 
    };



  return (
    <li className='todo-item'>
        <div 
        className={cn('check-circle', {active:done})}
        onClick={doneCheckHandler}
        >
            {done && <MdDone /> }
        </div>
        
        <span className={cn('text', {finish: done})}>{title}</span>
        
        <div className='remove' onClick={deleteClickHandler}>
            <MdDelete />
        </div>
    </li>
  );
};

export default TodoItem