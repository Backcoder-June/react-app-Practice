import React from 'react';
import { MdAdd } from 'react-icons/md';
import './todocss/TodoInput.css';

const TodoInput = () => {
  return (
<>
    <div className='todo-input'>
        <form className='insert-form'>
            <input type='text' placeholder='할 일을 입력하세요.' autoFocus />

        </form>
    </div>

    <button className='begin-btn'>
        <MdAdd />
    </button>
</>


  );
};

export default TodoInput