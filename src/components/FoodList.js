import React from 'react'

import FoodItem from './FoodItem'

const FoodList = () => {
  return (
    <ul>
        <FoodItem foodName={"짜장면"} price={6000} amount={"double"}/>
        <FoodItem foodName={"짬뽕"} price={5000} amount={"double"}/>
        <FoodItem foodName={"탕수육"} price={3000} amount={"normal"}/>
        <FoodItem foodName={"만두"} price={2000} amount={"normal"}/>
    </ul>
    
    
  )
}

export default FoodList