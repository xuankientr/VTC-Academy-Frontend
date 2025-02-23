const SingleButtonTab = () => {
  const handleClick = () => {
    alert('Hello các bạn nhé!');
  };
  return (
    <div>
      <h1 className='text-lg font-semibold text-black'>
        Exercise 1: Simple Button Click
      </h1>
      <p className='my-4'>
        Click vào button bên dưới để hiển thị thông báo alert
      </p>
      <button
        className='bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};
export default SingleButtonTab;
