import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoData';
import ViewTodo from './ViewTodo';
function Todo() {
  let dispatch=useDispatch();
  const [todoItem, setTodoItem] = useState("");
  const onchange=(e)=>{
    setTodoItem(e.target.value);
  }
  const onclick=()=>{
    dispatch(addTodo(todoItem));
    setTodoItem("");
  }
  return (
    <div className='cont'>
        <div className="todo-box">
            <h1 className='todo-title'>todo list</h1>
            <div className="todo-add-item">
                <input type="text"  value={todoItem} onChange={onchange} placeholder='add a items'/>
                <button disabled={todoItem.length===0} onClick={onclick}>+</button>
            </div>
            <div className="todo-list">
              <ViewTodo/>
            </div>
        </div>
    </div>
  )
}

export default Todo