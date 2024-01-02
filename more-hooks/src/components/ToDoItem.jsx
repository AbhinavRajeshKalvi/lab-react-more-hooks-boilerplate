import React from 'react'

const TodoItem = ({item : { data, isHidden } , index,dispatch}) => {
  return (
    <div style={{
        backgroundColor : "#3b3b3b",
        width : "50vw" ,
        borderRadius: "25px",
        padding: "10px 20px",
        marginTop: "20px",
        filter : `${isHidden?"blur(1px)" : "blur(0px)"}`
    }}>
        <h3>{isHidden ? "This Content is Hidden" : data}</h3>
        <button onClick={()=>{
            dispatch({type : "changeIsHidden" , payload : index})
        }}>Toggle</button>
    </div>
  )
}

export default TodoItem