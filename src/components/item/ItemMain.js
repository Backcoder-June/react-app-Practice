import React from 'react'
import Item from './Item';
const ItemMain = () => {

    // 이 콤포넌트에서는 
    const foodArray = [
        {
            foodName : '탕수육', 
            price : 20000, 
            quantity : 2
        },
        {
            foodName : '짜장면', 
            price : 6000, 
            quantity : 7
        },
        {
            foodName : '짬뽕', 
            price : 7000, 
            quantity : 4
        }
    ];


    // foodArray 배열에서 객체의 수 만큼 => 반복문 처리 


    // 1. foreach ( forof 방법 )
    const tagArray = []; // 태그 저장할 배열 그릇 
    const makeList = () => {
        for(let food of foodArray) {
            // const {foondName, price, quantity} = food; // 쪼개놓으면 food. 생략 가능 
            tagArray.push(<li key={food.foodName}>음식명 : {food.foodName}, 가격 : {food.price}, 수량 : {food.quantity}</li>); 
        }
        return tagArray; 
    };


    // 2. map 스트림 함수 방법
    const mappedArray = foodArray.map(food => {
        // return <li key={food.foodName}>음식명 : {food.foodName}, 가격 : {food.price}, 수량 : {food.quantity}</li>; 

    // 근데 food 객체가 더 클 경우 위와 같이 하면 너무 복잡해 질 수 있음 => Item 컴포넌트를 만들어서 따로 뺌 
    // foodArray 배열을 iterator 돌린 food 에 대한 정보는 ItemMain 만 가지고 있음 => 데이터를 넘겨줘야 함 
    // => props (properties) 로 넘겨주기 => 일단 Item 이라는 컴포넌트를 return 시키고, 거기에 foodInfo 라는 props 로 food 데이터를 넘김 
        return <Item foodInfo={food} abc='abc추가정보'/> 
    });

    
    makeList();
  return (
    // 렌더링 할 부모 태그 
    <ul> 
        {tagArray}
        <h1>==============</h1>
        {mappedArray}
    </ul>
  )
}

export default ItemMain