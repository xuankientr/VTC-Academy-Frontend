import PropTypes from 'prop-types';
const ButtonAdd = ({ onClick }) => {
  return (
    <div>
      <button
        type='button'
        onClick={onClick}
        className='flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-4 rounded transition duration-200 cursor-pointer'
      >
        <svg
          className='w-5 h-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 4v16m8-8H4'
          />
        </svg>
      </button>
    </div>
  );
};

ButtonAdd.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonAdd;
