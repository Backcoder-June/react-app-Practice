import React from 'react'

import FoodItem from './FoodItem'

const FoodList = () => {
  return (
    <ul>
        <FoodItem foodName={"짜장면"} price={6000}/>
        <FoodItem foodName={"짬뽕"} price={5000}/>
        <FoodItem foodName={"탕수육"} price={3000}/>
        <FoodItem foodName={"만두"} price={2000}/>
    </ul>
    
    
  )
}

export default FoodList