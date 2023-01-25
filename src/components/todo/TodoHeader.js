import React from 'react';
import './todocss/TodoHeader.css';

// 부모가 보내준 todoList 전체리스트 받아서 
const TodoHeader = ({todoList}) => {

// todoList 에서 todo.done(true flase)가 !true 즉 false 인 것만 filter 
const undoneTodos = todoList.filter(todo => !todo.done); 

// 그걸 이용해서 필요한 정보인 length 뿌려줌 

  return (
    <header>
        <h1>2023 1월 25일</h1>
        <h2 className='day'>수요일</h2>
        <div className='tasks-left'>할 일  {undoneTodos.length}개 남음</div>
    </header>
  );
}; 

export default TodoHeader