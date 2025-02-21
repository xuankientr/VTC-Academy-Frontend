import { useState } from 'react';
import ButtonAdd from './ButtonAdd';
import InputItem from './InputItem';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: 'Làm bài tập',
      isCompleted: false,
    },
    {
      id: 2,
      name: 'Làm thêm',
      isCompleted: false,
    },
    {
      id: 3,
      name: 'Đi học võ',
      isCompleted: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  // Hàm thêm todo mới
  const handleAddTodo = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue === '') return; 
    const newTodo = {
      id: Date.now(), 
      name: trimmedValue,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue(''); 
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };


  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='mt-6 max-w-md mx-auto'>
      <div className='flex gap-2 mb-4'>
        <InputItem
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ButtonAdd onClick={handleAddTodo} />
      </div>

   
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
