import React from 'react'
import TodoItem from './TodoItem'
import './todocss/TodoMain.css';

// todotemplate => todoMain => todoItem 전달 전달 
const TodoMain = ({todoList, remove, update}) => {

  return (
    <ul className='todo-list'>
        {
            todoList.map(todo => 
            <TodoItem 
                key={todo.todoId} 
                todo={todo} 
                remove={remove}
                update={update}
            />) 
        }
    </ul>
  );
};

export default TodoMain