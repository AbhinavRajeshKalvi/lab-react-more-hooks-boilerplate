import React, { useReducer, useRef } from "react";
import TodoItem from "./ToDoItem";

const todoreducer = (state, action) => {
  if (action.type === "addItem") {
    if (action.payload.trim() !== "") {
      return [
        ...state,
        {
          data: action.payload,
          isHidden: false,
        },
      ];
    }
  }
  if (action.type === "changeIsHidden") {
    return state.map((e, i) =>
      i === action.payload ? { ...e, isHidden: !e.isHidden } : e
    );
  }
  return state;
};

const initialState = [];

const TodoApp = () => {
  const [todo, dispatch] = useReducer(todoreducer, initialState);

  const input = useRef(null);
  return (
    <div>
      <input
        ref={input}
        type="text"
        style={{
          width: "40vw",
          marginRight: "10px",
          height: "3vh",
          borderRadius: "10px"  
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (e.target.value.trim() !== "") {
              dispatch({ type: "addItem", payload: e.target.value });
              e.target.value = "";
            }
          }
        }}
      />
      {todo.length > 0 &&
        todo.map((e, i) => {
          return <TodoItem item={e} index={i} dispatch={dispatch} key={i} />;
        })}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          input.current.focus();
        }  
      }
      style={{
        marginTop: "20px"
      }}
      >
        GO BACK TO TOP{" "}
      </button>
    </div>
  );
};

export default TodoApp;
