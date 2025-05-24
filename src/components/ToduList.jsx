import React, { useState } from 'react';

const TudoList = () => {
  const [task, setTask] = useState('');
  const [todolist, setTodolist] = useState([]);

  const addtask = () => {
    if (task.trim() === '') {
      alert("Please enter a task");
      return;
    }
    setTodolist([...todolist, task]);
    setTask('');
  };

  const deltask = (index) => {
    const updatelist = [...todolist];
    updatelist.splice(index, 1);
    setTodolist(updatelist);
  };

  const moveup = (index) => {
    if (index === 0) return;
    const updatelist = [...todolist];
    [updatelist[index], updatelist[index - 1]] = [updatelist[index - 1], updatelist[index]];
    setTodolist(updatelist);
  };

  const movedown = (index) => {
    if (index === todolist.length - 1) return;
    const updatelist = [...todolist];
    [updatelist[index], updatelist[index + 1]] = [updatelist[index + 1], updatelist[index]];
    setTodolist(updatelist);
  };

  return (
    <div>
      <center>
        <h1>Todo List</h1>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Enter a task"
        />
        <button onClick={addtask}>Add Task</button>

        <ul>
          {todolist.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => deltask(index)}>X</button>
              <button onClick={() => moveup(index)}>⬆</button>
              <button onClick={() => movedown(index)}>⬇</button>
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default TudoList;
