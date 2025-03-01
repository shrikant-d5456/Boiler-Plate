import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, clearTask } from './TaskSlice';

const TaskPage = () => {


  const [inp, setInp] = useState("");
  const dispatch = useDispatch();

  const taskList = useSelector((state) => state.tasksSlice.tasks);

  const handleOnSubmit = (e) => {
    if (inp.trim() === "") {
      alert("inp is required");

    }
    else {
      e.preventDefault();
      dispatch(addTask(inp));
      setInp("");
    }
  }

  const handleOnDelete = (ind) => {
    dispatch(deleteTask(ind));
  }

  const deleteAllList = () =>{
    dispatch(clearTask());
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>

      <div>
        {
          taskList?.map((ele, ind) => (
            <li key={ind}>{ele}<button onClick={() => handleOnDelete(ind)}>delete</button></li>
          ))}
          {taskList.length > 2 && <button onClick={deleteAllList}>Delete All list</button>}
      </div>
    </div>
  )
}

export default TaskPage


