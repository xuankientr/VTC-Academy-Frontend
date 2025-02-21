import PropTypes from 'prop-types';
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className='relative w-full max-w-md mb-4'>
      <p
        className={`w-full border border-gray-300 rounded-md px-4 py-2 pr-16 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
          transition ${
            todo.isCompleted ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
      >
        {todo.name}
      </p>

      <div className='absolute inset-y-0 right-0 flex items-center space-x-3 pr-3'>

        <button
          type='button'
          onClick={() => onToggle(todo.id)}
          className='text-blue-500 hover:text-blue-700 focus:outline-none'
        >
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
          >
            <path d='M5 13l4 4L19 7' />
          </svg>
        </button>

        <button
          type='button'
          onClick={() => onDelete(todo.id)}
          className='text-gray-400 hover:text-gray-600 focus:outline-none'
        >
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
          >
            <path d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>
    </div>
  );
};
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
