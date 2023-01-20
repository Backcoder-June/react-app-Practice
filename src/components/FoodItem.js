import React from 'react'

// props 를 분해해서 {foodName, price} 이렇게 보내면 
// {foodName, price 바로 꺼내서 사용 가능 }
const FoodItem = (props) => {
    console.log('prop:', props); 
  return (
    <li>
        <a href="#">{props.foodName} ({props.price}원)</a>
    </li>
  )
}

export default FoodItem