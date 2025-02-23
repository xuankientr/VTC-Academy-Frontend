import { useState } from 'react';

const CounterTab = () => {

  const [count, setCount] = useState(0);


  const handleDecrement = () => {
    setCount(count - 1);
  };


  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className='text-lg font-semibold text-black'>Exercise 5: Counter</h1>
      <p className='my-4'>Sử dụng các button để tăng/giảm giá trị counter</p>
      <div className='flex items-center space-x-4'>
        <button
          onClick={handleDecrement}
          className='bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-md'
        >
          &minus; Giảm
        </button>
        <span className='text-xl'>{count}</span>
        <button
          onClick={handleIncrement}
          className='bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-md'
        >
          + Tăng
        </button>
      </div>
    </div>
  );
};

export default CounterTab;
