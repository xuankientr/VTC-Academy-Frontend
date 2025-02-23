import { Input } from 'antd';
import { useState } from 'react';

const KeyboardEventTab = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (inputValue.trim() !== '') {
        setItems([...items, inputValue]);

        setInputValue('');
      }
    }
  };

  return (
    <div>
      <h1 className='text-lg font-semibold text-black'>
        Exercise 4: Handling Keyboard Events
      </h1>
      <p className='my-4'>Nhập text và nhấn Enter để thêm vào danh sách</p>
      <div className='w-70'>
        <Input
          placeholder='Nhập dữ liệu vào ô này và nhấn Enter ...'
          className='w-20'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <ul className='border border-gray-200 rounded-md w-70 mt-6'>
        {items.map((item, index) => (
          <li key={index} className='px-4 py-2 border-b last:border-b-0'>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyboardEventTab;
