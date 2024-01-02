import React, { useReducer, useState } from 'react'
const reducer=(state,action)=>{
    let{type}=action
    if(type=="INCREASE"){
        return state+1;
    }
    if(type=="DECREASE"){
        return state-1
    }
    return state
}
const initValue=0
const UseReducer = () => {
    // const[count,setCount]=useState(0)
    const [count,dispatch]=useReducer(reducer,initValue)

  return (
    <div>
        <h1>U s e R E D U C E R </h1>
        <button onClick={()=>dispatch({type:"INCREASE"})}>+</button>
        <h2>count : {count}</h2>
        <button onClick={()=>dispatch({type:"DECREASE"})}>-</button>

    </div>
  )
}

export default UseReducer