// src/components/TodoList.js
import React from 'react';

const TodoList = ({ tasks, removeTask, toggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <span onClick={() => toggleTaskCompletion(index)}>
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
