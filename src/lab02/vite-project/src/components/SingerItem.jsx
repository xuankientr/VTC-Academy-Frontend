import PropTypes from 'prop-types';

const SingerItem = ({ name, city }) => {
  return (
    <li className='p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 max-w-xs mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-semibold text-red-600 text-[25px]'>
          {name}
        </div>
        <div className='text-gray-500 text-[20px]'>{city}</div>
      </div>
    </li>
  );
};

SingerItem.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default SingerItem;
