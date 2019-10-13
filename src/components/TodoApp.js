import React from 'react';

export default function TodoApp({ task, tasks, inputTask, addTask, deleteTask, redirectToError }) {
  return (
    <div>
      <input type='text' value={task} onChange={(e) => inputTask(e.target.value)} />
      <input type='button' value='add' onClick={() => addTask(task)} />
      <ul>
        {
          tasks.map((item) => {
            return (
              <li key={item.id}>
                {item.task}
                &nbsp;
                <a href="#" onClick={() => deleteTask(item.id)}>✗</a>
              </li>
            );
          })
        }
      </ul>
      <button onClick={() => redirectToError()} >Error Page</button>
    </div>
  );
}
