import React from 'react'

// props 는 부모컴포넌트가 속성값으로 전달한 데이터 객체 
const Item = (props) => {
    // const Item = ({foodInfo}) => { foodInfo } props 쪼개서 넣으면 바로 사용 가능 

    // const {foodName, price, quantity} = foodInfo; // 이렇게 쪼개놓으면 바로 또 사용 가능 
    console.log('props: ' + props); 
  
    return (
        <div>
            <li>음식명 : {props.foodInfo.foodName}, 음식가격 : {props.foodInfo.price}, 추가정보 : {props.abc}</li>
        </div>
  )

}

export default Item