import PropTypes from 'prop-types';
const InputItem = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      type='text'
      placeholder='Input a task here'
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
    />
  );
};

InputItem.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default InputItem;
