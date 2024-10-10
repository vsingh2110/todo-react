import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { useTodos } from '../hooks/useTodos';

function TodoList() {
  const { todos, addTodo, deleteTodo, toggleTodo, editTodo } = useTodos();

  console.log('Current todos:', todos);

  return (
    <div>
      <TodoForm onAddTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          onEdit={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;