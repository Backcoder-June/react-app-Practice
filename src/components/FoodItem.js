import React from 'react'

// props : property =>  부모에게 받아온 데이터 ( key : value )
// 변수를 선언해두지 않아도, 부모로부터 받아서 바로 사용 
// props 를 분해해서 {foodName, price} 이렇게 보내면 
// {foodName, price 바로 꺼내서 사용 가능 }
const FoodItem = (props) => {
    console.log('prop:', props); 
  return (
    <li>
        <a href="#">{props.foodName} ({props.price}원)</a> {props.amount}
    </li>
  )
}

export default FoodItem