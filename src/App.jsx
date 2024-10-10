import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Todo App</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
