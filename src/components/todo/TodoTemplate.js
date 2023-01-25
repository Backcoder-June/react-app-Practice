import React from 'react';

//css 를 여기선 link 태그로 못가져오므로, import 로 처리한다 
import './todocss/TodoTemplate.css'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoMain from './TodoMain'

const TodoTemplate = () => {
  return (
    <div className='todo-template'>
        <TodoHeader />

        <TodoMain />

        <TodoInput />

    </div>
  )
}

export default TodoTemplate