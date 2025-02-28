import useCounter from '../hooks/useCounter';

const CounterHookTab = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1 className='text-lg font-semibold text-black'>
        Exercise 1: Creating and Using a Counter Hook
      </h1>
      <p className='my-4'>
        Sử dụng custom hook <strong>useCounter</strong> để quản lý state của
        counter
      </p>
      <div className='flex items-center space-x-4'>
        <button
          onClick={decrement}
          className='bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-md cursor-pointer'
        >
          &minus; Giảm
        </button>
        <span className='text-xl'>{count}</span>
        <button
          onClick={increment}
          className='bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-md cursor-pointer'
        >
          + Tăng
        </button>
        <button
          onClick={reset}
          className='hover:bg-red-700 px-4 py-2 rounded-md border cursor-pointer'
        >
          🔄 Reset
        </button>
      </div>
      <p className='mt-4'>Giới hạn: -10 đến 10</p>
    </div>
  );
};

export default CounterHookTab;
