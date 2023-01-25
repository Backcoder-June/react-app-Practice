import React from 'react';
import './todocss/TodoItem.css';

import {MdDelete, MdDone} from 'react-icons/md'

const TodoItem = () => {
  return (
    <li className='todo-item'>
        <div className='check-circle'>
            <MdDone />
        </div>
        
        <span className='text'>할 일 텍스트</span>
        
        <div className='remove'>
            <MdDelete />
        </div>
    </li>
  )
}

export default TodoItem