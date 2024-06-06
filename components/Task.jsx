
import React from 'react';
import Image from 'next/image';

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <li key={task.id} className="flex justify-between items-center p-2 bg-gray-500 rounded mb-2 p-10">
      <div className="flex items-center">
        <button 
          className="w-6 h-6 my-auto mr-6"
          onClick={() => onToggle(task.id)}
        >
          <Image
            src={task.completed ? "/r-029-362x.jpg" : "/r-029-362x.jpg"}
            alt="Task status"
            width={50}
            height={50}
          />
        </button>
        <span className={`ml-2 ${task.completed ? 'line-through text-gray-black' : 'text-black'}`}>{task.text}</span>
      </div>
      <button onClick={() => onDelete(task.id)} className="text-gray-200 hover:text-black">
        <svg xmlns="/r-029-362x.jpg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  );
};

export default Task;
