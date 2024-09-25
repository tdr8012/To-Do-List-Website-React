
import React, { useState } from 'react';

export default function TodoInput(props) {
  const { addTodo } = props;
  const [todoValue, setTodoValue] = useState('');

  return (
    <header>
      <input
        value={todoValue}
        onChange={(event) => {
          setTodoValue(event.target.value); 
        }}
        placeholder="Enter todo things..."
      />
  
      <button
        onClick={() => {
            addTodo(todoValue); 
            setTodoValue('')
        }}
      >
        Add
      </button>
    </header>
  );
}

