import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todoSlice';

export default function ToDoList() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      
      {/* Input to add new todo */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="px-4 py-2 border rounded mb-4"
        placeholder="Enter a new task"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Add Task
      </button>

      {/* Display list of todos */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Your Tasks:</h2>
        {todos.length === 0 ? (
          <p>No tasks yet. Add some!</p>
        ) : (
          <ul className="list-disc pl-5">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center ${
                  todo.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="mr-2"
                />
                {todo.text}
                <button
                  onClick={() => handleRemoveTodo(todo.id)}
                  className="ml-4 text-red-500"
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
