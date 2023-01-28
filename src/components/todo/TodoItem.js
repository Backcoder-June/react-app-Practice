import React, {useState} from 'react';
import './todocss/TodoItem.css';

import {MdCheck, MdDelete, MdDone, MdUpdate} from 'react-icons/md'
import cn from 'classnames';

const TodoItem = ({todo, remove, update}) => {

    const {todoId, title, done} = todo; 

    // 제목 수정 중 여부  => 수정 중 일때는 done 체크 불가하게 설정
    const [updateFlag, setUpdateFlag] = useState(false);

    // done 체크 => 제목 수정 시 done 값 유지 
    const [checkFlag, setCheckFlag] = useState(done);
    
    // 수정 시 입력한 제목 input
    const [titleValue, setTitleValue] = useState(title);



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
        
        // title 내용 수정 중 일 때는, done Check 불가능하도록 바로 return 시킴 
        if (updateFlag) {return;}

        const modTodo = {
            ...todo, 
            done: !done // 수정 
        };
        update(modTodo); 

        // title 수정 시, done 값을 유지시키기 위해 변수에 넣어서 관리
        setCheckFlag(modTodo.done);
    };


    // title 수정 onChange 이벤트 처리
    const titleChangeHandler = e => {
        // titleValue 상태변수에 넣어둠 
        setTitleValue(e.target.value);
    };

    // title 수정 클릭 시 
    const modifyClickHandler = e => {
        if (checkFlag) {
        alert('완료된 할 일은 수정할 수 없어요!');
        return;
        }
        
        // updateFlag 를 true로 set => 렌더링 부분에서 input 태그 생성 => onChange 발동
        // => titleChangeHandler 작동 => e.target.value 값을 titleValue 상태변수로 Set 
        // => input 태그의 value를 {titleValue} 상태변수로 잡아뒀기 때문에 e.target.value 값 => input value 값으로 가져와짐 
        
        if (!updateFlag) {
        setUpdateFlag(true);

        } else {
        const modTodo = {
            ...todo,
            title: titleValue // 수정 버튼 클릭 시점에 => titleValue 상태변수 값을 set 
        };

        // 제목에 변화가 일어났을 때만 서버 통신을 보낸다.
        if (title !== titleValue) update(modTodo);
        setUpdateFlag(false);
        }
    };



  return (
    <li className='todo-item'>
        {/* done 체크 */}
        <div 
        className={cn('check-circle', {active:done})}
        onClick={doneCheckHandler}
        >
            {done && <MdDone /> }
        </div>

        {/* title 및 수정 */}
        {updateFlag 
        ? <input 
              className='text' 
              maxLength={10}
              value={titleValue} 
              onChange={titleChangeHandler} 
          />
        : <span className={cn('text', {finish: done})}>{title}</span>
        }
        
        {/* title 수정버튼 */}
        <div className="modify" onClick={modifyClickHandler}>
            {updateFlag ? <MdCheck /> : <MdUpdate />}
        </div>
        

        {/* todo 제거 */}
        <div className='remove' onClick={deleteClickHandler}>
            <MdDelete />
        </div>
    </li>
  );
};

export default TodoItem