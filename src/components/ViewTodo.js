import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoData';
function ViewTodo() {
    let dispatch=useDispatch();
    const onclick=(index)=>{
        // console.log(index);
        dispatch(deleteTodo(index));
    }
    const allTodo = useSelector(state => state.todo);
    return (
        <>
            <ul className='todo-list-style'>
                {
                    allTodo.map((item, index) => {
                        return <li key={index}><span className='list-icon-1'><AcUnitIcon/></span>  {item} <span onClick={()=>onclick(index)} className='list-icon'><DeleteIcon/> </span></li>
                    })
                }
            </ul>
        </>
    )
}

export default ViewTodo