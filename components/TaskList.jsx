
import React from 'react';
import Task from './Task.jsx';

const TaskList = ({ tasks, filter, onToggle, onDelete }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
  });

  return (
    <ul>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
