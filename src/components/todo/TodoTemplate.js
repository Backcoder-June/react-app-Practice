import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';

//css 를 여기선 link 태그로 못가져오므로, import 로 처리한다 
import './todocss/TodoTemplate.css'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoMain from './TodoMain'
import { BASE_URL, TODO } from '../../config/host-config';
import { getToken } from '../util/login-util';

const TodoTemplate = () => {
    

    // 베이스 API 설정  => 이렇게 공용으로 빼줘야 배포환경 등 url 바뀔 때 바로 수정 가능
    // const API_BASE_URL = 'http://localhost:8080/api/todos'; 
    // =>근데 이 url을 여기보다 더 상위로 보내서 가져다 쓰고 싶다 
    // => config / host-config 만들어서 이쪽에 빼서 관리 => import 해서 사용 
    const API_BASE_URL = `${BASE_URL}${TODO}`
    const ACCESS_TOKEN = getToken();

    const headerInfo = {'content-type': 'application/json'
    , 'Authorization': 'Bearer ' + ACCESS_TOKEN
};


    // header 랑 body 에서 api 가 쓰이므로, 둘의 부모 객체인 Template 이 api 를 받자 
    // api 데이터를 넣어줄 때도 useState 세터로 넣어줘야 한다. 
    const [todos, setTodos] = useState([]); //배열타입 명시 


    //로딩중 처리 
    const [loading, setLoading] = useState(true); 


    // 자식 => 부모 모든 get post 등 요청은 여기 Template.js 를 커맨드샌터 삼아서 다 여기서 처리 
    // 할일 등록 서버 요청 // 
    // 자식 => 부모 : 콜백 사용 ( props 반대 - 역치개념 ) todo를 매개변수로 보냄
    // <Todoinput add={addTodo} /> 이렇게 역치로 보냄 
    // 새로운 todo 등록     
    const addTodo = (todo) => {  // 자식한테 메소드채로 보내고, 자식에서 todo 매개변수를 집어넣음 
        fetch(API_BASE_URL, {
            method: 'POST', 
            headers: headerInfo,
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
            headers: headerInfo,
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
            headers: headerInfo,
            body: JSON.stringify(todo)
        })
        .then(res => res.json())
        .then(result => {
            setTodos(result.todos);
        });
      };



    // 렌더링 되자마자 할 일 => 전체목록 list Get 받아오기 => useEffect 
    useEffect(() => {
        fetch(API_BASE_URL, {
            method: 'GET', 
            headers: headerInfo
        })
            .then(res => {
                if(res.status === 403) {
                    alert('로그인이 필요한 서비스 입니다.');
                    
                    //로그인 페이지로 리다이렉트 
                    window.location.href= '/login'; 
                    return; 
                }
                if(res.status === 500){
                    alert('서버 internal 에러 입니다.');
                }
                return res.json()})
            .then(result => {
                // console.log(result.todos); 
                setTodos(result.todos);

                //전체 목록 렌더링 완료되면 => 로딩완료처리 
                setLoading(false);
            });
    }, []); // 한 번만 받아오기 

    const loadingPage = (
        <div className='loading'>
                {/* 대체 text - for blind  */}
            <Spinner
            color="warning"
            type="grow"
            >
            Loading...
            </Spinner>


        </div>
    );
    const viewPage = (
        // 이 렌더링 될 div 자체를 로딩에 따라 조건부 처리
        <div className='todo-template'>
        {/* 여기서 일단 자식한테 함수를 보냄 => 자식한테 함수 받아서 꺼내오기 */}
        <TodoHeader todoList={todos} />

        <TodoMain todoList={todos} remove={deleteTodo} update={updateTodo}/>

        <TodoInput add={addTodo} />
    </div>
    );


  return (
    <>
    {loading ? loadingPage : viewPage}
    </>
 
  );
};

export default TodoTemplate