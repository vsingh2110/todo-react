import React, { useState } from 'react';
import { PencilIcon, CheckIcon } from '@heroicons/react/24/solid';

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 mb-2 rounded-lg shadow">
      <div className="flex items-center flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-3 form-checkbox h-5 w-5 text-blue-600"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={handleEdit}
            onKeyPress={handleKeyPress}
            className="flex-grow mr-2 px-2 py-1 border rounded"
            autoFocus
          />
        ) : (
          <span
            className={`flex-grow cursor-pointer ${
              todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex items-center">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="text-green-500 hover:text-green-600 mr-2 focus:outline-none"
          >
            <CheckIcon className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-600 mr-2 focus:outline-none"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-600 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;