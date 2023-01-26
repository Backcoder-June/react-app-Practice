import React from 'react';
import './todocss/TodoHeader.css';

// 부모가 보내준 todoList 전체리스트 받아서 
const TodoHeader = ({todoList}) => {

// todoList 에서 todo.done(true flase)가 !true 즉 false 인 것만 filter 

console.log('filter대상 : ' + todoList)
const undoneTodos = todoList.filter(todo => !todo.done); 

const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });


// 그걸 이용해서 필요한 정보인 length 뿌려줌 

  return (
    <header>
        <h1>{dateString}</h1>
        <h2 className='day'>{dayName}</h2>
        <div className='tasks-left'>할 일  {undoneTodos.length}개 남음</div>
    </header>
  );
}; 

export default TodoHeader