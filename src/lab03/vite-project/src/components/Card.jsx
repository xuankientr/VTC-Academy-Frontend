import PropTypes from 'prop-types';
const Card = ({ image, title, subtitle }) => {
  return (
    <div className='w-full rounded-lg shadow-md overflow-hidden bg-white'>
      <img src={image} alt={title} className='w-full h-40 object-cover' />
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-1'>{title}</h3>
        <p className='text-sm text-gray-500'>{subtitle}</p>
      </div>
    </div>
  );
};
Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default Card;
