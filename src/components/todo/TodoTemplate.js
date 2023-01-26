import React, { useEffect, useState } from 'react';

//css 를 여기선 link 태그로 못가져오므로, import 로 처리한다 
import './todocss/TodoTemplate.css'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoMain from './TodoMain'

const TodoTemplate = () => {
    
    // 베이스 API 설정  
    const API_BASE_URL = 'http://localhost:8080/api/todos'; 

    // header 랑 body 에서 api 가 쓰이므로, 둘의 부모 객체인 Template 이 api 를 받자 
    // api 데이터를 넣어줄 때도 useState 세터로 넣어줘야 한다. 
    const [todos, setTodos] = useState([]);

    // 자식 => 부모 모든 get post 등 요청은 여기 Template.js 를 커맨드샌터 삼아서 다 여기서 처리 
    // 할일 등록 서버 요청 // 
    // 자식 => 부모 : 콜백 사용 ( props 반대 - 역치개념 ) todo를 매개변수로 보냄
    // <Todoinput add={addTodo} /> 이렇게 역치로 보냄 
    const addTodo = (todo) => {  // 자식한테 메소드채로 보내고, 자식에서 todo 매개변수를 집어넣음 
        fetch(API_BASE_URL, {
            method: 'POST', 
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(todo)
        })
        .then(res => res.json()) //res 는 서버에서 보낸 retreive, 추가된 전체목록 
        .then(result => {
            setTodos(result.todos); 
        });
    };


    //삭제 요청 => id 필요했음 
    // 자식 => 부모로 id 올려줘야 함 
    // => 자식이 함수로 꽂아줘야 해 

    const deleteTodo = (todoId) => {

        // 백틱 사용 URL 
        fetch(`${API_BASE_URL}/${todoId}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            setTodos(result.todos);
        });
    };

    // 수정 요청 
    const updateTodo = todo => {
    
        fetch(`${API_BASE_URL}/${todo.todoId}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(todo)
        })
        .then(res => res.json())
        .then(result => {
            setTodos(result.todos);
        });
      };



    // 렌더링 되자마자 할 일 => 전체목록 list Get 받아오기 => useEffect 
    useEffect(() => {
        fetch(API_BASE_URL)
            .then(res => res.json())
            .then(result => {
                // console.log(result.todos); 
                setTodos(result.todos);
            });
    }, []); // 한 번만 받아오기 

  return (
    <div className='todo-template'>
        {/* 여기서 일단 자식한테 함수를 보냄 => 자식한테 함수 받아서 꺼내오기 */}
        <TodoHeader todoList={todos} />

        <TodoMain todoList={todos} remove={deleteTodo} update={updateTodo}/>

        <TodoInput add={addTodo} />
    </div>
  );
};

export default TodoTemplate